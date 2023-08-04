const {parse} = require('node-html-parser');

function main() {
    try {
        const test = parse('<div id="hello"><li>1</li><li>2</li><li>3</li></div>');
        const x = test.childNodes[0].childNodes.map((x) => x.rawText);


        console.log(x);
    } catch (e) {
        console.log("HTML-TO-JSON FAILED");
        console.error(e);
    }
}

main();