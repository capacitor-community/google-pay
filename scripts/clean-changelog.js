const fs = require('fs');

const filePath = process.argv[2] || 'CHANGELOG.md';

/***
 * This script cleans the changelog, changing some of the undesired defaults lerna uses
 * in regards to linking to private repos and a few other things
 */

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // replace version links to github
  // ie: [3.4.0](https://github.com/ionic-team/enterprise-google-pay/compare/v3.3.1...v3.4.0)
  data = data.replace(/\([^\s]*github\.com[^\s]*\)/g, '');

  // replace git commit links to repo
  // ie: ([832fc23](https://github.com/ionic-team/enterprise-google-pay/commit/832fc2307a6095071cc424b22517b1a0f9be1551))
  data = data.replace(
    /\(\[\S*\]\([^\s]*github\.com\/ionic-team\/enterprise-google-pay[^\s]*\)\)/g,
    '',
  );

  // Replace lerna default header with ##Change Log
  data = data.replace(
    `# Change Log
All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.
`,
    '## Change Log \n',
  );

  // Replace the duplicate #Change Log and the extra line breaks before it
  data = data.replace(
    `
# Change Log`,
    '',
  );

  fs.writeFile(filePath, data, err => {
    if (err) {
      console.error(err);
    }
  });
});