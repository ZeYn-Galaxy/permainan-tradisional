import { StaticImageData } from "next/image";
import egrang from "../images/egrang.jpeg";
import layang from "../images/permainan-layang-layang.webp"
import kelereng from "../images/kelereng.jpg"
import gasing from "../images/gasing.jpeg"

interface Data {
    title: string,
    deskripsi: string,
    image: StaticImageData,
    asal_usul: string
}

const data: Data[] = [
    {
        title: "Egrang",
        deskripsi: "Egrang adalah sebuah permainan tradisional yang menggunakan sepasang bambu untuk berjalan. Bambu dibentuk seperti tongkat yang memiliki tumpuan kaki yang terbuat dari kayu. Egrang umumnya dimainkan oleh anak-anak. Egrang juga bisa digunakan dalam atraksi. Permainan egrang berguna dalam pelatihan pengendalian diri dengan menjaga keseimbangan, ke fokusan dan meningkatkan rasa percaya diri sekaligus hiburan untuk anak anak maupun dewasa.",
        image: egrang,
        asal_usul: "Asal usul egrang tidak diketahui secara pasti, namun diduga sudah ada sejak zaman Belanda. Egrang terbuat dari bambu panjang yang dibelah dua dan disambung dengan tali atau rotan. Pada awalnya, egrang digunakan sebagai alat transportasi, namun kemudian menjadi permainan tradisional yang populer di Indonesia. "
    },
    {
        title: "Layang-layang",
        deskripsi: "Layang-layang adalah salah satu permainan tradisional yang paling populer di Indonesia. Layang-layang terbuat dari kerangka bambu yang dilapisi kertas atau kain. Layang-layang diterbangkan dengan bantuan angin dengan cara memegang ekornya.",
        image: layang,
        asal_usul: "Asal usul layangan dalam permainan tradisional Indonesia tidak diketahui secara pasti, namun diduga sudah ada sejak zaman prasejarah. Lukisan layang-layang tertua ditemukan di Sulawesi Tenggara dan diperkirakan berusia 9.500 tahun."
    },
    {
        title: "Kelereng",
        deskripsi: "Kelereng adalah salah satu permainan tradisional yang paling populer di Indonesia. Kelereng terbuat dari berbagai macam bahan, seperti kaca, tanah liat, atau agate. Kelereng biasanya memiliki diameter ½ inci atau 1,25 cm dari ujung ke ujungnya.",
        image: kelereng,
        asal_usul: `
        Asal usul kelereng tidak diketahui secara pasti, namun diduga sudah ada sejak zaman Mesir Kuno. Kelereng tertua yang ditemukan berasal dari tahun 3000 SM di Mesir dan terbuat dari batu atau tanah liat.
        Kelereng kemudian menyebar ke berbagai negara di dunia, termasuk Indonesia. Di Indonesia, kelereng dikenal dengan berbagai nama, seperti gundu, ekrek, atau kelereng.
        `
    },
    {
        title: "Gasing",
        deskripsi: "Gasing adalah permainan tradisional yang kaya akan kreativitas, keahlian, dan nilai budaya. Meski menghadapi tantangan di era modern, upaya pelestarian terus dilakukan. Dengan memperkenalkan gasing kepada anak-anak dan melestarikan tradisinya, kita dapat memastikan bahwa dengungan si Raja Berputar ini akan terus terdengar menggema di masa depan.",
        image: gasing,
        asal_usul: "Asal usul gasing berputar-putar seperti kisahnya! Ada yang bilang ia lahir dari Tiongkok kuno, menyebar hingga Nusantara, lalu jadi bagian tak terpisahkan budaya kita. Yang lain melihat kemiripannya dengan buah perepat yang licin dan terampil berputar. Bahkan, mitos pun berbisik tentang gasing yang berevolusi dari permainan telur berlomba pirouette. Tak peduli awal ceritanya, gasing telah menari selama berabad-abad, memikat generasi dengan tariannya yang sederhana namun memikat. Hingga kini, ia tetap jadi simbol warisan Indonesia, pengingat tawa masa kecil dan keseruan putaran yang tepat."
    }
]

export default data