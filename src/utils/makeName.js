// Assumes that the name is a string separated by " "
// The purpose is to create a camelCase name that
// can be used in json objects
// "some name" -> "someName"
const makeName = name =>
  name
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      // Make the inital letter capital
      return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
    })
    .join("");

export default makeName;
