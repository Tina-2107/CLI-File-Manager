import fs from "fs/promises";
import path from "node:path";

const dataDir = path.resolve("data");

async function ensureDataDirectory() {
  await fs.mkdir(dataDir, {
    recursive: true,
  });
}
//create new file
export async function createFile(filename, content) {
  await ensureDataDirectory();
  const filePath = path.join(dataDir, filename);

  await fs.writeFile(filePath, content, "utf-8");

  console.log(`Created: ${filename}`);
}
//read existing file
export async function readFile(filename) {
  const filePath = path.join(dataDir, filename);

  const content = await fs.readFile(filePath, "utf-8");
  console.log(content);
}
//update existing file
export async function updateFile(filename, content) {
  const filePath = path.join(dataDir, filename);

  await fs.writeFile(filePath, content, "utf-8");

  console.log(`Updated: ${filename}`);
}
// delete existing file
export async function deleteFile(filename) {
  const filePath = path.join(dataDir, filename);

  await fs.unlink(filePath);

  console.log(`Deleted: ${filename}`);
}
//list of al file exist in directory
export async function listFiles() {
  await ensureDataDirectory();
  const files = await fs.readdir(dataDir);

  if (files.length === 0) {
    console.log("No files found.");
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
}
