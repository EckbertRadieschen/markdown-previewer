const h1 = "# Willkommen in meinem Markdown-Previewer\n\n";
const h2 = "## Unten siehst du alle enthaltenen Markdowns perfekt umgewandelt!\n\n";
const inlineCode = "Hier ist inlineCode `<div></div>`\n\n";
const link = "Als nächstes ein süßer Link: [freeCodeCamp](https://www.freecodecamp.org)\n\n";
const boldedText = "Natürlich kannst du Text auch **bold** schreiben\n\n"
const codeBlock = "```This is a code block.```\n\n";
const blockQuote = "> Block Quotes!\n\n"
const list = "1. Dies \n2. ist \n3. eine \n4. Liste\n\n";
const image = "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"


const defaultText = h1.concat(" ", h2, inlineCode, link, boldedText, codeBlock, blockQuote, list, image)
;

export default defaultText;