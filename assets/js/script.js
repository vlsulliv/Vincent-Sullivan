let fontFace = new FontFace('Roboto', 'url(https://fonts.example.com/roboto.woff2)');
console.log(fontFace.family); // 'Roboto'

fontFace.family = 'newRoboto';
console.log(fontFace.family); // 'newRoboto'