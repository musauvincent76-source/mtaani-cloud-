// MTAANI CLOUD MD - OFFICIAL MENU
// Powered by Till 3624692

const menu = async (m, { sock, prefix }) => {
  const p = prefix || ".";
  const menuText = 
"╔═══ *MTAANI CLOUD ☁️* ═══\n" +
"║ Welcome Boss! 👋\n" +
"║ Bot is LIVE & Running\n" +
"║ Prefix: [ " + p + " ]\n" +
"╠═══ *CLOUD MENU* ═══\n" +
"║ " + p + "cloud - Cloud info\n" +
"║ " + p + "deploy - How to deploy\n" +
"║ " + p + "balance - Check wallet\n" +
"║ " + p + "fund - Fund wallet\n" +
"║ " + p + "ping - Bot speed\n" +
"║ " + p + "alive - Is Cloud ON?\n" +
"║ " + p + "owner - Contact Admin\n" +
"╠═══ *GROUP MANAGER* ═══\n" +
"║ " + p + "mtag - Tag everyone\n" +
"║ " + p + "hidetag text - Hide tag\n" +
"║ " + p + "mkick @user - Remove user\n" +
"║ " + p + "madd 254... - Add user\n" +
"║ " + p + "mpromote @ - Make admin\n" +
"║ " + p + "mdemote @ - Remove admin\n" +
"║ " + p + "mlink - Get group link\n" +
"║ " + p + "mclose - Close group\n" +
"║ " + p + "mopen - Open group\n" +
"╠═══ *DOWNLOADER ☁️* ═══\n" +
"║ " + p + "mplay song - Download audio\n" +
"║ " + p + "msong song - Download audio\n" +
"║ " + p + "mvideo song - Download video\n" +
"║ " + p + "mtiktok link - TikTok DL\n" +
"║ " + p + "mfb link - Facebook DL\n" +
"║ " + p + "mig link - Instagram DL\n" +
"╠═══ *STICKER CLOUD* ═══\n" +
"║ " + p + "msticker - Photo to sticker\n" +
"║ " + p + "mtoimg - Sticker to photo\n" +
"╠═══ *AI CLOUD* ═══\n" +
"║ " + p + "mai question - Ask AI\n" +
"║ " + p + "mimagine prompt - AI image\n" +
"╚═══ *POWERED BY MTAANI CLOUD* ═══\n" +
"   TILL: 3624692 LIVE";

  await sock.sendMessage(m.key.remoteJid, { text: menuText }, { quoted: m });
};

module.exports = {
  command: ['menu', 'help', 'mtaani', 'cloud'],
  description: 'Show Mtaani Cloud menu',
  run: menu
};
