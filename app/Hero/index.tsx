import Image from "next/image";
import layang from "../images/permainan-layang-layang.webp"
import gasing from "../images/gasing.jpeg"
import kelereng from "../images/kelereng.jpg"
import egrang from "../images/egrang.jpeg"

export default function Hero() {
    return (
        <section className='flex justify-between max-lg:px-4 px-8 pt-10 max-lg:pt-3 max-sm:flex-col-reverse max-lg:flex-col'>
            <div className="w-1/2 max-lg:w-full">
                {/* Title */}
                <p className='text-5xl font-semibold max-lg:text-3xl max-sm:py-2'>Permainan Tradisional</p>
                <p className='indent-5'>
                    <span className="font-semibold">Permainan tradisional</span> adalah permainan yang berasal dari suatu daerah dan dimainkan oleh masyarakat setempat secara turun-temurun. Permainan tradisional biasanya dimainkan oleh anak-anak, tetapi juga dapat dimainkan oleh orang dewasa.
                </p>
                <p className='indent-5 pt-5'>
                    Permainan tradisional memiliki banyak manfaat, baik bagi anak-anak maupun bagi orang dewasa. Bagi anak-anak, permainan tradisional dapat membantu mengembangkan berbagai aspek, seperti:
                </p>
                <div className="flex flex-col">
                    <p className='mt-2 pl-5'>&#10551; <span className="font-semibold">Motorik</span>, yaitu kemampuan untuk menggerakkan tubuh. Permainan tradisional seperti petak umpet, gobak sodor, dan engklek dapat membantu anak-anak untuk mengembangkan kemampuan motorik kasar dan motorik halus.</p>
                    <p className='mt-2 pl-5'>&#10551; <span className="font-semibold">Kognitif</span>, yaitu kemampuan untuk berpikir. Permainan tradisional seperti congklak, ular tangga, dan monopoli dapat membantu anak-anak untuk mengembangkan kemampuan berpikir logis dan strategis.</p>
                    <p className='mt-2 pl-5'>&#10551; <span className="font-semibold">Bahasa</span>, yaitu kemampuan untuk berkomunikasi. Permainan tradisional seperti kelereng, gasing, dan layang-layang dapat membantu anak-anak untuk mengembangkan kemampuan berkomunikasi dengan teman sebaya.</p>
                    <p className='mt-2 pl-5'>&#10551; <span className="font-semibold">Sosial</span>, yaitu kemampuan untuk berinteraksi dengan orang lain. Permainan tradisional seperti egrang, bakiak, dan sepak takraw dapat membantu anak-anak untuk mengembangkan kemampuan berinteraksi dengan orang lain.</p>
                    <p className='mt-2 pl-5'>&#10551; <span className="font-semibold">Karakter</span>, yaitu nilai-nilai yang dianut seseorang. Permainan tradisional seperti gobak sodor, bekel, dan jangkrik-jangkrik lompat dapat membantu anak-anak untuk mengembangkan nilai-nilai kerja sama, kejujuran, dan keberanian.</p>
                </div>
            </div>
            <div className="w-1/2 max-lg:w-full flex flex-wrap max-sm:flex-nowrap overflow-hidden p-5 justify-center max-sm:p-0 max-sm:pt-5">
                <Image className="object-cover w-80 xl:w-96 max-sm:w-60" width={500} height={500} src={layang} alt="..." />
                <Image className="object-cover w-80 xl:w-96 max-sm:w-60" width={500} height={500} src={gasing} alt="..." />
                <Image className="object-cover w-80 xl:w-96 max-sm:hidden" width={500} height={500} src={kelereng} alt="..." />
                <Image className="object-cover w-80 xl:w-96 max-sm:hidden" width={500} height={500} src={egrang} alt="..." />
            </div>
        </section>
    )
}