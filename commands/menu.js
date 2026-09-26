// MTAANI CLOUD MD - OFFICIAL MENU
// Powered by Till 3624692

const menu = async (m, { sock, prefix }) => {
  const menuText = `
╔═══ *MTAANI CLOUD ☁️* ═══
║ Welcome Boss! 👋
║ Bot is LIVE & Running
║ Prefix: [ ${prefix} ]
╠═══ *CLOUD MENU* ═══
║ ${prefix}cloud - Cloud info
║ ${prefix}deploy - How to deploy
║ ${prefix}balance - Check wallet
║ ${prefix}fund - Fund wallet
║ ${prefix}ping - Bot speed
║ ${prefix}alive - Is Cloud ON?
║ ${prefix}owner - Contact Admin
╠═══ *GROUP MANAGER* ═══
║ ${prefix}mtag - Tag everyone
║ ${prefix}hidetag text - Hide tag
║ ${prefix}mkick @user - Remove user
║ ${prefix}madd 254... - Add user
║ ${prefix}mpromote @ - Make admin
║ ${prefix}mdemote @ - Remove admin
║ ${prefix}mlink - Get group link
║ ${prefix}mclose - Close group
║ ${prefix}mopen - Open group
║ ${prefix}setname text - Set group name
║ ${prefix}setdesc text - Set group desc
╠═══ *DOWNLOADER ☁️* ═══
║ ${prefix}mplay song - Download audio
║ ${prefix}msong song - Download audio
║ ${prefix}mvideo song - Download video
║ ${prefix}mtiktok link - TikTok DL
║ ${prefix}mfb link - Facebook DL
║ ${prefix}mig link - Instagram DL
║ ${prefix}mytmp3 link - YT to MP3
║ ${prefix}mytmp4 link - YT to MP4
╠═══ *STICKER CLOUD* ═══
║ ${prefix}msticker - Photo to sticker
║ ${prefix}mtoimg - Sticker to photo
║ ${prefix}mtake name - Change sticker pack
║ ${prefix}emojimix 😂+😭 - Mix emojis
╠═══ *AI CLOUD* ═══
║ ${prefix}mai your question - Ask AI
║ ${prefix}mimagine prompt - AI image
║ ${prefix}mquote - Random quote
║ ${prefix}mjoke - Random joke
╠═══ *OWNER ONLY* ═══
║ ${prefix}restart - Restart bot
║ ${prefix}broadcast text - Broadcast
║ ${prefix}block @ - Block user
║ ${prefix}unblock @ - Unblock user
║ ${prefix}setpp - Change bot DP
╚═══ *POWERED BY MTAANI CLOUD* ═══
   *TILL: 3624692 | LIVE*
   *Deploy: yourdomain.vercel.app*
`;

  await sock.sendMessage(m.key.remoteJid, { text: menuText }, { quoted: m });
};

module.exports = {
  command: ['menu', 'help', 'mtaani', 'cloud'],
  description: 'Show Mtaani Cloud menu',
  run: menu
};// MTAANI CLOUD MD - OFFICIAL MENU
// Powered by Till 3624692

const menu = async (m, { sock, prefix }) => {
  const menuText = `
╔═══ *MTAANI CLOUD ☁️* ═══
║ Welcome Boss! 👋
║ Bot is LIVE & Running
║ Prefix: [ ${prefix} ]
╠═══ *CLOUD MENU* ═══
║ ${prefix}cloud - Cloud info
║ ${prefix}deploy - How to deploy
║ ${prefix}balance - Check wallet
║ ${prefix}fund - Fund wallet
║ ${prefix}ping - Bot speed
║ ${prefix}alive - Is Cloud ON?
║ ${prefix}owner - Contact Admin
╠═══ *GROUP MANAGER* ═══
║ ${prefix}mtag - Tag everyone
║ ${prefix}hidetag text - Hide tag
║ ${prefix}mkick @user - Remove user
║ ${prefix}madd 254... - Add user
║ ${prefix}mpromote @ - Make admin
║ ${prefix}mdemote @ - Remove admin
║ ${prefix}mlink - Get group link
║ ${prefix}mclose - Close group
║ ${prefix}mopen - Open group
║ ${prefix}setname text - Set group name
║ ${prefix}setdesc text - Set group desc
╠═══ *DOWNLOADER ☁️* ═══
║ ${prefix}mplay song - Download audio
║ ${prefix}msong song - Download audio
║ ${prefix}mvideo song - Download video
║ ${prefix}mtiktok link - TikTok DL
║ ${prefix}mfb link - Facebook DL
║ ${prefix}mig link - Instagram DL
║ ${prefix}mytmp3 link - YT to MP3
║ ${prefix}mytmp4 link - YT to MP4
╠═══ *STICKER CLOUD* ═══
║ ${prefix}msticker - Photo to sticker
║ ${prefix}mtoimg - Sticker to photo
║ ${prefix}mtake name - Change sticker pack
║ ${prefix}emojimix 😂+😭 - Mix emojis
╠═══ *AI CLOUD* ═══
║ ${prefix}mai your question - Ask AI
║ ${prefix}mimagine prompt - AI image
║ ${prefix}mquote - Random quote
║ ${prefix}mjoke - Random joke
╠═══ *OWNER ONLY* ═══
║ ${prefix}restart - Restart bot
║ ${prefix}broadcast text - Broadcast
║ ${prefix}block @ - Block user
║ ${prefix}unblock @ - Unblock user
║ ${prefix}setpp - Change bot DP
╚═══ *POWERED BY MTAANI CLOUD* ═══
   *TILL: 3624692 | LIVE*
   *Deploy: yourdomain.vercel.app*
`;

  await sock.sendMessage(m.key.remoteJid, { text: menuText }, { quoted: m });
};

module.exports = {
  command: ['menu', 'help', 'mtaani', 'cloud'],
  description: 'Show Mtaani Cloud menu',
  run: menu
};
