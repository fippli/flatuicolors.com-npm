# flatuicolors.com-npm

npm package to easily use [flatuicolors.com's](https://flatuicolors.com) palettes in your projects

## Installation

```
npm install @fippli/flatuicolors.com
```

## Basic Usage

```JavaScript
import flatUIColors from '@fippli/flatuicolors.com';

// Get the color by the color name
const { german: {
    fusionRed
} } = flatUIColors;

console.log(fusionRed); // => rgb(252, 92, 101)

// Get color from the index in the list
// of colors in the palette
// 0 | 1 | 2 | 3 | 4
// 5 | 6 | 7 | 8 | 9
// 10 | 11 | 12 | 13 | 14
// 15 | 16 | 17 | 18 | 19
const desire = flatUIColors.german.list[5];

console.log(desire);
// => { name: 'Desire', color: 'rgb(235, 59, 90)' }
```

## Testing

**Functions**  
Write tests in the `tests/` folder

**Package**

1. Make a dry reslease with `npm run dry-release`. This will generate a file `packagename-x.x.x.tgz`.
2. Install the package in your other application/package by running `npm install path/to/packagename-x.x.x.tgz`.
3. Import and use as usual in you application/package.

## Releasing

1. Run `npm run release`
2. Push the code to github
3. Update package version
   - `npm version patch` updates `x.x.1` -> `x.x.2`
   - `npm version minor` updates `x.1.x` -> `x.2.x`
   - `npm version major` updates `1.x.x` -> `2.x.x`
4. Run `npm publish --access public`

## Issues

Please help by posting issues here on github
