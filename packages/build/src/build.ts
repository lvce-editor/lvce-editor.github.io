import { execa } from "execa";
import { join } from "node:path";
import { root } from "./root.ts";
import { cp } from "node:fs/promises";

const main = async () => {
  await execa(`npm`, [`run`, "build"], {
    stdio: "inherit",
    cwd: join(root, "packages", "website"),
  });
  await cp(
    join(root, "packages", "website", ".output", "public"),
    join(root, "packages", "build", ".tmp", "dist"),
    {
      recursive: true,
      force: true,
    },
  );
};

main();
