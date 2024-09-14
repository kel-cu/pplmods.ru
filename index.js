const exp = require('express')
const fs = require("fs")
const axios = require('axios')
let config;
if (fs.existsSync("./config.json")) config = JSON.parse(fs.readFileSync('./config.json').toString());
else config = {}
let port = config.port == null ? 8007 : config.port;
// web
const web = exp();
__dirname = __dirname.replace(`\\`, `/`);

web.use('/', exp.static('www')).use('/', exp.static('www/pages'))
web.get("/projects", async function (req, res) {
  res.json(JSON.parse(fs.readFileSync("./projects.json")))
})

web.use(async function (req, res, next) {
  res.status(404)
  res.sendFile(`${__dirname}/www/pages/404/index.html`);
  return;
});

web.listen(port, async () => {
  console.log(`\n-=-=-=-=-=-\n\n${config.domain}\n\n-=-=-=-=-=-\nСайт был успешно запущен!\nПорт: ${port}\n-=-=-=-=-=-\n`)
})