// node app.js <command> <filename> <content>
import { createFile } from "./services/fileService.js";

const command = process.argv[2];
const filename = process.argv[3];
const content = process.argv[4];

try {
  if (command === "create") {
    if (!filename || !content) {
      console.log("Usage: npm start create <filename> <content>");
      process.exit(1);
    }

    await createFile(filename, content);
  } else {
    console.log("Unknown command.");
  }
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
