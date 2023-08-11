import {watchFile, unwatchFile} from "fs";
import chalk from "chalk";
import {fileURLToPath} from "url";
import fs from "fs";
import cheerio from "cheerio";
import fetch from "node-fetch";
import axios from "axios";
import moment from "moment-timezone";
import memexd from "./lib/memes.js";
import { webp2png } from "./lib/webp2mp4.js";
import { sandroid1 } from "./lib/scrape.js";
import { spin } from "./lib/scrape.js";
import { sticker } from "./lib/sticker.js";
import { toPTT } from "./lib/converter.js";
import { toAudio } from "./lib/converter.js";
import { ffmpeg } from "./lib/converter.js";
import { en, es, pt } from "./lib/idiomas/total-idiomas.js";
import uploadFile from "./lib/uploadFile.js";
import uploadImage from "./lib/uploadImage.js";
//cambia los números que sean propietarios
global.owner = [
/*╔══════════════════╗*/
/*║ ❒*/ ["5218442286089", "🔰𝐃𝐈𝐄𝐆𝐎-𝐂𝐑𝐄𝐀𝐃𝐎𝐑🔰", true],
/*║ ❒*/ ["923052362330"]
/*╚══════════════════╝*/                     ];
/*┌--------------*/
/*├➢*/ global.suittag = ["923052362330"];
/*├➢*/ global.mods = ["923052362330"];
/*├➢*/ global.prems = ["923052362330"];
/*└────ׂ─ׂ─ׂ─ׂ───*/


global.openai_key = "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";
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = "org-3";
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */

/* NO BORRAR NADA DE AQUÍ ABAJO*/
global.lenguajeGB = es;
global.memexd = memexd;
global.cheerio = cheerio;
global.uploadImage = uploadImage;
global.uploadFile = uploadFile;
global.webp2png = webp2png;
global.sandroid1 = sandroid1;
global.ffmpeg = ffmpeg;
global.toPTT = toPTT;
global.spin = spin;
global.fs = fs;
global.sticker = sticker;
global.toAudio = toAudio;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
/*-----------------------*/

/* ______________________________________________ */
global.creadorname = "𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂";
global.creatorname = "𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂";
global.library = "BAILEYS-MD";
global.vs = "V10";
global.version = vs;
global.baileys = '@whiskeysockets/baileys'
//_______tiempp de stickers______________
global.d = new Date(new Date() + 3600000);
global.locale = "es";
global.dia = d.toLocaleDateString(locale, {weekday: "long"});
global.fecha = d.toLocaleDateString("es", {day: "numeric", month: "numeric", year: "numeric"});
global.mes = d.toLocaleDateString("es", {month: "long"});
global.año = d.toLocaleDateString("es", {year: "numeric"});
global.tiempo = d.toLocaleString("en-US", {hour: "numeric", minute: "numeric", second: "numeric", hour12: true});
//------------- Sticker WM -----------
global.packname = `𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂`;
global.author = `©⏤͟͟͞𝐓𝐇𝐄 𝐙𝐈𝐑𝐀𝐗-𝐁𝐎𝐓-𝐌𝐃`;
//_______________
global.wm = "𝐙𝐈𝐑𝐀𝐗-𝐁𝐎𝐓 | 𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂";
global.db3t = `©⏤͟͟͞𝐓𝐇𝐄 𝐙𝐈𝐑𝐀𝐗-𝐁𝐎𝐓-𝐌𝐃 `;
global.wm3 = db3t;
global.codex = `Diego-Ofc`;
global.igfg = "𝐙𝐈𝐑𝐀𝐗-𝐁𝐎𝐓-𝐌𝐃 ";
global.wait = "*[❕] CARGANDO POR FAVOR ESPERA...*";
//-------------------
global.md = "https://chat.whatsapp.com/JuuuUaIQnnE3t4SWQenShg";
global.dorramd = md;
global.tarje = "Banesco";
global.yt = "http://youtube.com/@diegogameplays82";
global.youtube = yt;
//Menu
global.DorrafotoMenu = ["./galería/dorratmini.mp4"];
global.menulinks = [md, yt];
/* _____________________________________________ */
global.ag = "━━━ ❎ 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 ❎ ━━━";
global.advertencia = ag;
global.fg = "☆━━━━ ⚠️ 𝙵𝙰𝙻𝙻𝙾 ⚠️ ━━━☆";
global.fallo = fg;
global.mg = "══ ❎ 𝙻𝙾 𝚄𝚂𝙾 𝙼𝙰𝙻 ❎ ══";
global.mal = mg;
global.dorre = "DORRAT-BOT-MD";
global.DORRA = dorre;

/* Imagenes___________________ */
global.imagen1 = fs.readFileSync("./Menu2.jpg");
global.imagen2 = fs.readFileSync("./galeria/nuevobot.jpg");
global.imagen3 = fs.readFileSync("./galeria/Pre Bot Publi.png");
global.imagen4 = fs.readFileSync("./galeria/menudorrat3.jpg");
global.imagen5 = fs.readFileSync("./galeria/menudorrat5.png");
global.video1 = fs.readFileSync("./galeria/dorratmini.mp4");
global.dorratMenu = [imagen1, imagen4];
global.pdoc = [
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/msword",
  "application/pdf",
  "text/rtf",
];
global.antiyaoi = ['YAOI', 'yaoi', 'yAoi','yaoI']
global.sinyaoi = ["como te através a buscar esa perra puta mamada","puto gay no busques mierdas", "puto estorbo social este bot es hetero", "aquí no existe yaoi maricon"]
global.Key360 = ["964f-0c75-7afc"]; //keys ephoto360
global.keysZens = ["fiktod", "c2459db922", "BF39D349845E", "675e34de8a", "37CC845916", "0b917b905e6f", "6fb0eff124"];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
//__________________
global.lolkeys = ["2e0da1f78d1721134b21816d", "902c3bc9d8c08b0dcf8f5373", "808693688ecc695293359089", "85faf717d0545d14074659ad"];
//global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]
global.lolkeysapi = ["GataDios"];

/* ⊱__________________.⋅ RPG ⋅.________ ⊰ */

global.flaaa = [
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",

  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",

  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",

  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",

  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
];

global.cmenut = "❖––––––『";
global.cmenub = "┊✦ ";
global.cmenuf = "╰━═┅═━––––––๑\n";
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ";

global.dmenut = "*❖─┅──┅〈*";
global.dmenub = "*┊»*";
global.dmenub2 = "*┊*";
global.dmenuf = "*╰┅────────┅✦*";
global.htjava = "⫹⫺";

global.htki = "*⭑•̩̩͙⊱•••• ☪*";
global.htka = "*☪ ••••̩̩͙⊰•⭑*";

global.comienzo = "• • ◕◕════";
global.fin = "════◕◕ • •";

global.botdate = `⫹⫺ Date :  ${moment.tz("Asia/Jakarta").format("DD/MM/YY")}`;
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Jakarta").format("HH:mm:ss")}`; //America/Los_Angeles
global.fgif = {
  key: {
    participant: "0@s.whatsapp.net",
  },
  message: {
    videoMessage: {
      title: wm,
      h: `Hmm`,
      seconds: "999999999",
      gifPlayback: "true",
      caption: bottime,
      jpegThumbnail: fs.readFileSync("./Menu2.jpg"),
    },
  },
};
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("se actualizo 'configuracion.js'"));
  import(`${file}?update=${Date.now()}`);
});

