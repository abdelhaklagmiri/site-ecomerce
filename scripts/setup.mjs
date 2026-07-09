import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const envLocal = resolve(root, ".env.local");
const envExample = resolve(root, ".env.example");

if (!existsSync(envLocal) && existsSync(envExample)) {
  copyFileSync(envExample, envLocal);
  console.log("Created .env.local from .env.example");
} else if (existsSync(envLocal)) {
  console.log(".env.local already exists");
} else {
  console.log("No .env.example found — skipping env setup");
}

console.log("Setup complete. Run: npm install && npm run dev");
