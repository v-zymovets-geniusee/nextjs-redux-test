const fs = require('fs'); 
const data = fs.readFileSync('./schema.graphql', 'utf8');
const shema = data
    .replace(/AWSEmail/g, 'String')
    .replace(/AWSJSON/g, 'JSON')
    .replace(/AWSDateTime/g, 'String')
    .replace(/AWSTimestamp/g, 'Float')
    .replace(/AWSDate/g, 'String')
    .replace(/AWSTime/g, 'String')
    .replace(/AWSURL/g, 'String')
    .replace(/AWSPhone/g, 'String')
    .replace(/AWSIPAddress/g, 'String');

fs.writeFileSync('./schema_clean.graphql', shema);
