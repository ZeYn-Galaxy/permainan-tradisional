import Image from "next/image"
import data from "../lib/data"
import Link from "next/link"

export default function PermainanSlug({ params }: any) {
    return (
        <main>
            <nav className='py-3 bg-[#424769]'>
                <Link href={'/'} className="pl-5 font-semibold text-[#fff]">Permainan Tradisional</Link>
            </nav>

            <div className="flex justify-between max-md:flex-col">
                <div className="w-1/2 p-5 max-md:w-full">
                    <Image className="w-full object-cover rounded-md" width={500} height={500} src={data[params.id] === undefined ? "" : data[params.id].image} alt="..." />
                </div>
                <div className="w-1/2 p-5 max-md:w-full">
                    <p className="text-2xl font-semibold">Deskripsi</p>
                    <p>{data[params.id] === undefined ? "Not Found..." : data[params.id].deskripsi}</p>
                </div>
            </div>
        </main>
    )
}