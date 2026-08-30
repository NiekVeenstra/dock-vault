export function HarborSection() {
  return (
    <section className="harbor-intro" id="harbor">
      <div className="harbor-intro__inner">
        <div className="harbor-intro__content">
          <p className="eyebrow">The Harbor</p>

          <div className="small-rule" aria-hidden="true">
            <span />
          </div>

          <h2 className="harbor-intro__title">
            Not every collection needs a marketplace.
            <span>Some collections need a harbor.</span>
          </h2>

          <div className="harbor-intro__copy">
            <p>Dock Vault was not created to sell products.</p>

            <p>
              It was created because collecting deserves a place where care
              comes before commerce — a place to slow down, preserve what matters
              and continue the journey with confidence.
            </p>

            <p>
              A harbor where knowledge is shared before decisions are made, and
              where every collection is treated with dignity.
            </p>
          </div>

          <a className="primary-cta harbor-intro__cta" href="#market">
            Visit the Market Hall
          </a>
        </div>

        <figure className="harbor-intro__visual">
          <div className="harbor-intro__image-frame">
            <img
              src="/images/harbor-introduction.png"
              alt="Een oud maritiem logboek, kompas en lantaarn op een zeekaart"
            />
          </div>

          <figcaption>Care before commerce. Guidance before haste.</figcaption>
        </figure>
      </div>
    </section>
  );
}
