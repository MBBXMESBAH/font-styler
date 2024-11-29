const { fontStyle, applyFont, fontStyler, getFontStyle, allFont, listFont, getAllFonts, fetchFonts } = require('./index.js');


fontStyle('hello', 'monospace').then(result => {
  console.log(result);
}).catch(err => {
  console.error(err);
});

applyFont('hello', 'bold').then(result => {
  console.log(result);
});

allFont().then(result => {
  console.log(result);
}).catch(err => {
  console.error(err);
});

getAllFonts().then(result => {
  console.log(result);
});
