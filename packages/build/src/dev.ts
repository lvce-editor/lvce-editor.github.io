import { execa } from "execa";
import { root } from "./root.ts";
import { join } from "node:path";

const main = async (): Promise<void> => {
  await execa(`npm`, ["run", "dev"], {
    cwd: join(root, "packages", "website"),
    stdio: "inherit",
  });
};

main();
