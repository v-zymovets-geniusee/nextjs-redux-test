const fs = require('fs');

const generatedFile = './src/graphql/index.tsx';
fs.writeFileSync(
  generatedFile,
  fs
    .readFileSync(generatedFile, 'utf8')
    .replace('@apollo/react-common', '@apollo/client')
    .replace('@apollo/react-hooks', '@apollo/client')
);
