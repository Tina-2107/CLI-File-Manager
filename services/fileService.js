import fs from "fs/promises";
import path from "node:path";

const dataDir = path.resolve("data");

async function ensureDataDirectory() {
  await fs.mkdir(dataDir, {
    recursive: true,
  });
}

export async function createFile(filename, content) {
  await ensureDataDirectory();
  const filePath = path.join(dataDir, filename);

  await fs.writeFile(filePath, content, "utf-8");

  console.log(`Created: ${filename}`);
}
