const fs = require('fs');

const filePath = process.argv[2] || 'CHANGELOG.md';

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    // Replace the default header with markdown front matter for docusaurus pages
    data = data.replace("## Change Log ", 
`---
title: Google Pay Changelog
sidebar_label: Changelog
---
    `);

    fs.writeFile("./website/docs/changelog.md", data, (err) => {
        if (err) {
            console.error(err);
        }
    })

})