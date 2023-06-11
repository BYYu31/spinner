let timer = 100
let spinner = ['|', '/', '-', '\\','|', '/', '-', '\\','|'];
for (let tick of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${tick}   `);
  }, timer += 200);
}
setTimeout(() => {
  console.log();
},timer);