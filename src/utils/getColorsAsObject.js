import makeName from "./makeName";

// Convert the array of colors into an object with the
// color names as keys
const getColorsAsObject = palette =>
  palette.reduce((accumulator, value) => {
    return {
      ...accumulator,
      [makeName(value.name)]: value.color
    };
  }, {});

export default getColorsAsObject;
