import { StaticImageData } from "next/image";
import egrang from "../images/egrang.jpeg";
import layang from "../images/permainan-layang-layang.webp"
import kelereng from "../images/kelereng.jpg"
import gasing from "../images/gasing.jpeg"

interface Data {
    title: string,
    deskripsi: string,
    image: StaticImageData
}

const data : Data[] = [
    {
        title: "Egrang",
        deskripsi: "Egrang adalah sebuah permainan tradisional yang menggunakan sepasang bambu untuk berjalan. Bambu dibentuk seperti tongkat yang memiliki tumpuan kaki yang terbuat dari kayu. Egrang umumnya dimainkan oleh anak-anak. Egrang juga bisa digunakan dalam atraksi. Permainan egrang berguna dalam pelatihan pengendalian diri dengan menjaga keseimbangan, ke fokusan dan meningkatkan rasa percaya diri sekaligus hiburan untuk anak anak maupun dewasa.",
        image: egrang
    },
    {
        title: "Layang-layang",
        deskripsi: "Layang-layang adalah salah satu permainan tradisional yang paling populer di Indonesia. Layang-layang terbuat dari kerangka bambu yang dilapisi kertas atau kain. Layang-layang diterbangkan dengan bantuan angin dengan cara memegang ekornya.",
        image: layang
    },
    {
        title: "Kelereng",
        deskripsi: "Kelereng adalah salah satu permainan tradisional yang paling populer di Indonesia. Kelereng terbuat dari berbagai macam bahan, seperti kaca, tanah liat, atau agate. Kelereng biasanya memiliki diameter ½ inci atau 1,25 cm dari ujung ke ujungnya.",
        image: kelereng
    }, 
    {
        title: "Gasing",
        deskripsi: "Gasing adalah permainan tradisional yang kaya akan kreativitas, keahlian, dan nilai budaya. Meski menghadapi tantangan di era modern, upaya pelestarian terus dilakukan. Dengan memperkenalkan gasing kepada anak-anak dan melestarikan tradisinya, kita dapat memastikan bahwa dengungan si Raja Berputar ini akan terus terdengar menggema di masa depan.",
        image: gasing
    }
]

export default data