import GERMAN from "./palettes/german";
import getColorsAsObject from "./utils/getColorsAsObject";

export default {
  german: {
    list: GERMAN,
    ...getColorsAsObject(GERMAN)
  }
};
