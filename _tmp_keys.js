const fs = require("fs");
const data = JSON.parse(
  fs.readFileSync("C:\\Users\\Invenzee\\AppData\\Local\\Temp\\figma-metadata.json", "utf8")
);
const text = data[0].result.content.find((c) => c.type === "text").text;
fs.writeFileSync("C:\\Users\\Invenzee\\AppData\\Local\\Temp\\figma-aero.xml", text);

const lines = text.split("\n");
const start = lines.findIndex((l) => l.includes('id="10203:7385"'));
console.log("start", start, "lines", lines.length);
const baseIndent = lines[start].match(/^ */)[0].length;
const children = [];
for (let i = start + 1; i < lines.length; i++) {
  const line = lines[i];
  const indent = line.match(/^ */)[0].length;
  if (indent <= baseIndent) break;
  if (indent === baseIndent + 2 && line.trim().startsWith("<")) {
    const tag = line.trim().match(/^<([\w-]+)/);
    const id = line.match(/id="([^"]+)"/);
    const name = line.match(/name="([^"]*)"/);
    const w = line.match(/width="([^"]+)"/);
    const h = line.match(/height="([^"]+)"/);
    const y = line.match(/ y="([^"]+)"/);
    children.push({
      tag: tag && tag[1],
      id: id && id[1],
      name: name && name[1],
      w: w && Math.round(Number(w[1])),
      h: h && Math.round(Number(h[1])),
      y: y && Math.round(Number(y[1])),
    });
  }
}
console.log(JSON.stringify(children, null, 2));
console.log("child count", children.length);
