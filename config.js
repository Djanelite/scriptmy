const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["628962601467@s.whatsapp.net"]
global.nomerOwner = "6289626012466"
global.nomorOwner = ['6289626012467']
global.namaDeveloper = "Dalertt Gacor"
global.namaBot = "Dalertt Bot"
global.packname = ""
global.author = "Sticker Maker Using Dalertt Bot"
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv1 = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh ZIRO
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/