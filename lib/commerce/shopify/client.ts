import "server-only";

export const SHOPIFY_API_VERSION = "2026-07";
export type ShopifyFailureCode = "configuration" | "connection" | "response" | "pagination";

/** No upstream response, URL, headers or tokens are exposed through errors. */
export class ShopifyError extends Error {
  constructor(public readonly code: ShopifyFailureCode) {
    super(`Shopify catalog: ${code}`);
    this.name = "ShopifyError";
  }
}

export async function storefrontRequest<T>(
  query: string,
  variables: Record<string, unknown>,
  buyerIp?: string,
): Promise<T> {
  const domain = process.env.SHOPIFY_STORE_DOMAIN?.trim().toLowerCase();
  const token = process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN?.trim();
  if (!domain || !/^[a-z0-9][a-z0-9-]*\.myshopify\.com$/.test(domain) || !token || /\s/.test(token)) {
    throw new ShopifyError("configuration");
  }

  try {
    const response = await fetch(`https://${domain}/api/${SHOPIFY_API_VERSION}/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Shopify-Storefront-Private-Token": token,
        ...(buyerIp ? { "Shopify-Storefront-Buyer-IP": buyerIp } : {}),
      },
      body: JSON.stringify({ query, variables }),
      // Prices/stock must refresh on the next page load, including sold-out changes.
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) throw new ShopifyError("connection");
    const body = await response.json() as { data?: T; errors?: unknown[] };
    if (!body.data || body.errors?.length) throw new ShopifyError("response");
    return body.data;
  } catch (error) {
    throw error instanceof ShopifyError ? error : new ShopifyError("connection");
  }
}
