
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6281998863003']  
global.mods = ['6281998863003'] 
global.prems = ['6281998863003']
global.nameowner = 'Rezza'
global.numberowner = '6281998863003' 
global.mail = 'fxacbapi.my.id@gmail.com' 
global.dana = '-'
global.pulsa = '081998863003'
global.gopay = '-'
global.namebot = 'Devantara inc.'
global.gc = 'https://chat.whatsapp.com/C3y8SC2EmJWHurHEGl9S4D'
global.web = 'https://github.com/panda560'
global.instagram = 'https://instagram.com/arrezza20'
global.wm = '© Devantara inc.'
global.watermark = wm
global.wm2 = '⫹⫺ Devantara inc. BY arrezza20'
global.wm3 = '© Astrea inc.'
global.wm4 = '© BotWa'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Devantara inc. Made with arrezza20'
global.author = 'ig : https://instagram.com/arrezza20'
global.read = true//Untuk autoread kalau pengen autoread nyala true kalau pengen mati false 
//==> Apikey
global.lann = 'Your_Key_Here' //isi apikey mu https://api.betabotz.org
global.btc = 'Your_Key_Here'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'Your_Key' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
