import { useState, useMemo } from "react";
import "./App.css";
import MarkdownIt from "markdown-it";

let DEFAUT_TEXT = `# Feverfew

## Tanacetum parthenium

Feverfew has been used by large numbers of people for hundreds of years without reports of toxicity and **no toxic reactions were reported** in patients taking feverfew in a 6 month migraine study.

> Feverfews use in the prevention and treatment of migraine headache is the only condition for which confirmed scientific documentation exists at the present time.

- Feverfew\'s primary active chemicals are its sesquiterpene lactones, which contain an alpha-methylene-gamma-lactone group: in particular those of the germacranolide type, including parthenolide (0.06-0.6%) and 3-beta-hydroxy parthenolide; the guaianolide type and others containing chlorine. The postflowering leaves can contain up to four times as much parthenolide as the preflowering leaves.
- The flowering herb also contains 0.02-0.07% essential oils (including Chrysanthenyl acetate L-camphor, L-borneol, terpenes, and miscellaneous esters), flavonoids, monoterpenes, and polyacetylene compounds.
- Melatonin has also been detected In feverfew leaf samples and a commercial preparation (1.37-2.45g/g).

More about [feverfew](https://restorativemedicine.org/library/monographs/feverfew/)

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

![freeCodeCamp Logo](https://freesvg.org/img/warszawianka-Feverfew.png)`;

let md = new MarkdownIt({ breaks: true });

function createMarkup(text) {
  let html = md.render(text);
  return html;
}

function App() {
  const [text, setText] = useState(DEFAUT_TEXT);
  const html = useMemo(() => createMarkup(text), [text]);

  function updateText(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <textarea id="editor" onChange={updateText} value={text}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}

export default App;
