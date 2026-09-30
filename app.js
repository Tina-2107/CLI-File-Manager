import {
  createFile,
  readFile,
  updateFile,
  deleteFile,
  listFiles,
} from "./services/fileService.js";

const command = process.argv[2];
const filename = process.argv[3];
const content = process.argv[4];

try {
  switch (command) {
    case "create":
      if (!filename || !content) {
        throw new Error("Usage: npm start create <filename> <content>");
      }

      await createFile(filename, content);
      break;

    case "read":
      if (!filename) {
        throw new Error("Usage: npm start read <filename>");
      }

      await readFile(filename);
      break;

    case "update":
      if (!filename || !content) {
        throw new Error("Usage: npm start update <filename> <content>");
      }

      await updateFile(filename, content);
      break;

    case "delete":
      if (!filename) {
        throw new Error("Usage: npm start delete <filename>");
      }

      await deleteFile(filename);
      break;

    case "list":
      await listFiles();
      break;

    default:
      throw new Error(`
Unknown command.

Available commands:
create <filename> <content>
read <filename>
update <filename> <content>
delete <filename>
list
            `);
  }
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
