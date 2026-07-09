import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const envLocal = resolve(root, ".env.local");
const envExample = resolve(root, ".env.example");

if (!existsSync(envLocal) && existsSync(envExample)) {
  const { copyFileSync } = await import("node:fs");
  copyFileSync(envExample, envLocal);
  console.log("Created .env.local from .env.example");
}

const nodeMajor = Number(process.versions.node.split(".")[0]);

if (Number.isNaN(nodeMajor) || nodeMajor < 18) {
  console.error(
    `Node.js ${process.versions.node} is not supported. Use Node.js 18.18 or newer.`,
  );
  process.exit(1);
}

const port = process.env.PORT ?? "3000";
const useTurbopack = process.env.TURBOPACK === "1";

const args = ["dev", "--port", port, "--hostname", "127.0.0.1"];

if (useTurbopack) {
  args.push("--turbopack");
}

console.log(
  `Starting VALON CRM on http://localhost:${port}${useTurbopack ? " (turbopack)" : ""}`,
);

const child = spawn("next", args, {
  cwd: root,
  stdio: "inherit",
  shell: process.platform === "win32",
  env: {
    ...process.env,
    PORT: port,
  },
});

child.on("error", (error) => {
  console.error("Failed to start Next.js dev server:", error.message);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  if (signal) {
    console.error(`Dev server stopped by signal: ${signal}`);
    process.exit(1);
  }

  if (code && code !== 0) {
    console.error(`Dev server exited with code ${code}`);
    process.exit(code);
  }
});

process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
