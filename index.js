const RemoveDuplicatesCommand = require('./src/RemoveDuplicatesCommand');
const fsPromises = require("fs/promises");

async function main() {
  const inputRawJson = await fsPromises.readFile(
    process.cwd() + "/mock_application.json",
    "utf-8"
  );
  const inputJson = JSON.parse(inputRawJson);
  const removeDuplicatesCommand = new RemoveDuplicatesCommand();
  const output = removeDuplicatesCommand.exec(inputJson)

  // Create output
  await fsPromises.writeFile(
    process.cwd() + "/clean_application.json",
    JSON.stringify(output, null, 2)
  );
}

main();
