# Font Styler

Font Styler is a simple and flexible Node.js library that allows you to fetch and apply custom font styles to text using the FontGen API. This library is perfect for creating stylized text for applications, websites, or any project requiring custom fonts.

![npm](https://img.shields.io/npm/v/@saxx/font-styler)
![npm](https://img.shields.io/npm/dw/@saxx/font-styler)
![npm](https://img.shields.io/npm/dt/@saxx/font-styler)

## Features

- Fetch a list of available fonts.
- Apply custom font styles to text dynamically.
- Easy-to-use API with detailed error handling.
- Lightweight and efficient.

## 📊 Statistics

- **Total Downloads**: ![npm](https://img.shields.io/npm/dt/@saxx/font-styler)
- **Weekly Downloads**: ![npm](https://img.shields.io/npm/dw/@saxx/font-styler)

## Installation

To install the library, use npm:

```bash
npm install @saxx/font-styler@latest
```

## Usage

Here’s a quick example of how to use Font Styler:

### Importing the Library

```javascript
const { fontStyle, applyFont, fontStyler, getFontStyle, allFont, listFont, getAllFonts, fetchFonts } = require('@saxx/font-styler');
```

### Applying a Font Style to Text

```javascript
const { fontStyle, applyFont, fontStyler, getFontStyle, allFont, listFont, getAllFonts, fetchFonts } = require('@saxx/font-styler');

fontStyle('hello', 'monospace').then(result => {
  console.log("Styled Text:", result);
}).catch(err => {
  console.error("Error:", err);
});
```

### Fetching All Available Fonts

```javascript
const { fontStyle, applyFont, fontStyler, getFontStyle, allFont, listFont, getAllFonts, fetchFonts } = require('@saxx/font-styler');

allFont().then(result => {
  console.log("Available Fonts:", result);
}).catch(err => {
  console.log("Error:", err);
});
```

## API Reference

### `fontStyle(text: string, font: string)`

Applies a custom font style to the given text.

- **Parameters**:
  - `text` (string): The text to style.
  - `font` (string): The name of the font to apply.

- **Returns**: A styled version of the text as a string.

- **Throws**: An error if the font is not found or if there is an issue with the API.

---

### `allFont()`

Fetches a list of all available fonts.

- **Returns**: An objects with `font_name: "Sample Text"`.

- **Throws**: An error if there is an issue with the API.

---

## Error Handling

The library provides meaningful error messages for issues such as:
- Font not found.
- Network errors while accessing the API.

## Dependencies

Font Styler depends on the following package:

- [axios](https://www.npmjs.com/package/axios) for making HTTP requests.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, feel free to submit a pull request or open an issue on GitHub.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

## Author

- **Mesbah Saxx**  
  [GitHub Profile](https://github.com/MBBXMESBAH)

---

## Links

- **Repository**: [Font Styler GitHub](https://github.com/MBBXMESBAH/font-styler)
- **Issues**: [Submit Issues](https://github.com/MBBXMESBAH/font-styler/issues)
- **Homepage**: [Font Styler Homepage](https://github.com/MBBXMESBAH/font-styler#readme)