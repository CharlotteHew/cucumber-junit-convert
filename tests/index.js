const cucumberJunitConvert = require('../index');

const options = {
    inputJsonFile: 'report.json',
    outputXmlFile: 'report.xml'
}

cucumberJunitConvert.convert(options);
