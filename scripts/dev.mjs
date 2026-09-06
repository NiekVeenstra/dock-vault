const forwarded = process.argv.slice(2);
const nextArguments = [];

for (let index = 0; index < forwarded.length; index += 1) {
  const argument = forwarded[index];

  if (argument === "--host") {
    nextArguments.push("--hostname", forwarded[index + 1]);
    index += 1;
    continue;
  }

  if (argument === "--strictPort") continue;
  nextArguments.push(argument);
}

process.argv = [process.argv[0], process.argv[1], "dev", ...nextArguments];
await import("next/dist/bin/next");
