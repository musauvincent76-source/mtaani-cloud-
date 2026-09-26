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
╠═══ *DOWNLOADER ☁️* ═══
║ ${prefix}mplay song - Download audio
║ ${prefix}msong song - Download audio
║ ${prefix}mvideo song - Download video
║ ${prefix}mtiktok link - TikTok DL
║ ${prefix}mfb link - Facebook DL
║ ${prefix}mig link - Instagram DL
╠═══ *STICKER CLOUD* ═══
║ ${prefix}msticker - Photo to sticker
║ ${prefix}mtoimg - Sticker to photo
╠═══ *AI CLOUD* ═══
║ ${prefix}mai question - Ask AI
║ ${prefix}mimagine prompt - AI image
╚═══ *POWERED BY MTAANI CLOUD* ═══
   TILL: 3624692 LIVE
`;

  await sock.sendMessage(m.key.remoteJid, { text: menuText }, { quoted: m });
};

module.exports = {
  command: ['menu', 'help', 'mtaani', 'cloud'],
  description: 'Show Mtaani Cloud menu',
  run: menu
};
