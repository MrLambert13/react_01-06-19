const minimist = require('minimist');
const path = require('path');
const fs = require('fs');

//обрезаем первые два параметра
const args = minimist(process.argv.slice(2), {
    alias: {
        name: 'n',
    },
});
//созраняем имя компонента
const componentName = args.name;
//создаем папку с именем компонента
fs.mkdirSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName)
);

//код компонента.jsx
const componentCode = `import './${componentName}.sass';

//React импортируем в каждом файле
import React from 'react';

//stateless
export function ${componentName}(props) {
    return (
        <div className="${componentName}">
            
        </div>
    );
};
`;
//Создаем файл с кодом из {componentCode}
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
    componentCode,
);
//код компонента.css
const componentCodeSASS = `.${componentName} `;
//Создаем файл с кодом из {componentCodeSASS}
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.sass`),
    componentCodeSASS,
);

//код index.js
const indexCode = `export from './${componentName}.jsx';`;
//Создаем файл с кодом из {componentCodeSASS}
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
    indexCode,
);
