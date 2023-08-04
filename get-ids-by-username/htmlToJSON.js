const {parse} = require('node-html-parser');
const fs = require('fs');

function main() {
    try {
        const html = fs.readFileSync('./tmp/likes-dump.html', 'utf8');
        const parsed = parse(html);
        const links = [];
        const pages = [];
        parsed.querySelectorAll('a').forEach((node) => {
            const link = node.getAttribute('href');
            const username = link.split(".com/")[1];

            if (username.includes("pages/")) {
                pages.push(link)
            } else {
                links.push({ link, username });
            }
        });

        fs.writeFileSync('./data/likes.json', JSON.stringify(links, null, 2));
        fs.writeFileSync('./data/pages.json', JSON.stringify(pages, null, 2));

    } catch (e) {
        console.log("HTML-TO-JSON FAILED");
        console.error(e);
    }
}

main();