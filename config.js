const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "];

global.message = {
},

module.exports = {
  botname: process.env.BotName || "Yego", 
  author: process.env.Author || "@Yego",
  packname: process.env.PackName || "Yego",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© YegoBot",
  prefa: process.env.Prefix || ['.'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "Pika~Kun",
  ownernumber: process.env.Owner_Number || "254705677688",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://yegoedwin254:<password>@yego.vymd54d.mongodb.net/?retryWrites=true&w=majority",
  welcome: process.env.Welcome_Msg || ',
  left: process.env.Left_Msg || ,
  promote: process.env.Promote_Msg || ,
  demote: process.env.Demote_Msg || ',
  sessionId: process.env.SESSION_ID || "", 
  image_1: readFileSync('.'), // Thumbnail for allmenu command
  image_2: readFileSync('.'), // null image
  image_3: readFileSync(""), // Thumbnail for Dashboard
  aliveMedia: readFileSync("."),
  menuMedia: readFileSync(''),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "Yego" 
global.author = process.env.Author || "@Yegoz" 
global.packname = process.env.PackName || "Yego MD" 
global.myweb = process.env.Web || "" 
global.footer = process.env.Footer || "© Yego" 
global.prefa = process.env.Prefix || ['-'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Pika~Kun" 
global.ownernumber = process.env.Owner_Number || "254705677688" 
global.adress = process.env.Continent || "Asia, India, Assam" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('') // Thumbnail for allmenu command
global.image_2 = readFileSync('') // null image
global.image_3 = readFileSync("") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

