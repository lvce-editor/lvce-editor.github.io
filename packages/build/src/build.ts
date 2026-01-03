import { execa } from "execa";
import { dirname, join } from "node:path";
import { root } from "./root.ts";
import { cp, mkdir, rm } from "node:fs/promises";

const main = async () => {
  await execa(`npm`, [`run`, "build"], {
    stdio: "inherit",
    cwd: join(root, "packages", "website"),
  });
  const dist = join(root, "packages", "build", ".tmp", "dist");
  await rm(dist, { recursive: true });
  await mkdir(dirname(dist), { recursive: true });
  await cp(join(root, "packages", "website", ".output", "public"), dist, {
    recursive: true,
    force: true,
  });
};

main();
