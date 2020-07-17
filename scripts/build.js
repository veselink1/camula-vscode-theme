const fs = require('fs');
const path = require('path');
const generate = require('./generate');

const THEME_DIR = path.join(__dirname, '..', 'theme');

if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR);
}

module.exports = async () => {
    const { base: camulaBase, soft: camulaSoft } = await generate('camula.yml');
    const { base: moonBase, soft: moonSoft } = await generate('camula-moon.yml');
    const { base: sunBase, soft: sunSoft } = await generate('camula-sun.yml');

    return Promise.all([
        fs.promises.writeFile(
            path.join(THEME_DIR, 'camula.json'),
            JSON.stringify(camulaBase, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'camula-soft.json'),
            JSON.stringify(camulaSoft, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'camula-moon.json'),
            JSON.stringify(moonBase, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'camula-moon-soft.json'),
            JSON.stringify(moonSoft, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'camula-sun.json'),
            JSON.stringify(sunBase, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'camula-sun-soft.json'),
            JSON.stringify(sunSoft, null, 4)
        )
    ]);
};

if (require.main === module) {
    module.exports();
}
