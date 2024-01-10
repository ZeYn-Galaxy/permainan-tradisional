import Image from 'next/image'
import data from '../lib/data'
import Link from 'next/link'

export default function PermainanList() {
    return (
        <section className='px-8 my-10'>
            <p className="text-3xl font-semibold text-center pb-10">Daftar Permainan Tradisional</p>
            <div className="flex justify-center flex-wrap gap-10">
                {
                    data.map((item, index) => (
                        <div className='w-96 max-lg:w-80 border rounded-md overflow-hidden pb-2'>
                            <Link href={`/permainan/${index}`}>
                                <Image className='w-full h-56 object-cover' width={500} height={500} src={item.image} alt='...'></Image>
                            </Link>
                            <p className='text-xl p-2'>{item.title}</p>
                            <p className='text-sm px-2 line-clamp-3'>
                                {item.deskripsi}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}