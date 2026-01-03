import { execa } from "execa";
import { join } from "node:path";
import { root } from "./root.ts";

const main = async () => {
  await execa(`npm`, [`run`, "build"], {
    stdio: "inherit",
    cwd: join(root, "packages", "website"),
  });
};

main();
