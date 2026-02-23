const fs = require('fs');
const path = require('path');

const dirs = ['./components', './'];
const filesToProcess = [];

for (const dir of dirs) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.html')) {
            filesToProcess.push(path.join(dir, file));
        }
    }
}

for (const file of filesToProcess) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Make dark mode grays whiter
    content = content.replace(/dark:text-gray-500/g, 'dark:text-gray-300');
    content = content.replace(/dark:text-gray-400/g, 'dark:text-gray-200');
    content = content.replace(/dark:text-gray-600/g, 'dark:text-gray-400');
    content = content.replace(/dark:text-gray-700/g, 'dark:text-gray-500');

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated colors in ${file}`);
    }
}
console.log('✅ Color replacement complete.');
