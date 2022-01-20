const core = require("@actions/core");
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
  names,
} = require("unique-names-generator");

try {
  const length = core.getInput("length") || 2;

  // Reorder dictionaries based on length so they make sense
  let dictionaries;
  if (length == 1) {
    dictionaries = [animals];
  } else if (length == 2) {
    dictionaries = [adjectives, animals];
  } else if (length == 3) {
    dictionaries = [adjectives, colors, animals];
  } else if (length == 4) {
    dictionaries = [colors, adjectives, animals, names];
  } else {
    throw "length parameter must be `1`, `2`, `3`, or `4`";
  }

  // Generate the name
  const config = {
    dictionaries: dictionaries,
    length: length,
    separator: core.getInput("separator"),
    style: core.getInput("style"),
  };
  const output = uniqueNamesGenerator(config);
  console.log(`Generated name: ${output}`);

  // Set the output into the github action
  core.setOutput("generated_name", output);
} catch (error) {
  core.setFailed(error.message);
}
