let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Jiikuan
*✉️ Nama RL* : Zykuan
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 03 Desember 2007
*🎨 Umur* : 15
*🧩 Hobby* : Nonton Animek, Game, Tiktokan,
*💬 Sifat* : Ramah, Baik, Pendiam
*🗺️ Tinggal* : Japan, Tokyo, Akihabara
*❤️ Suka* : Shikimori, Shikimori, Kamu (bukan laki ya anj), Kamu (Tapi ga peka)
*💔 Benci* : autis, seleb, pedofil, hina waifu gw🤠🥀

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : -
*🇫  Facebook* : -
*🏮 Chanel Youtube* : -
*🐈 Github:* AmakawaZKN

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
