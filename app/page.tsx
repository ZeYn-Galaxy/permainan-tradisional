import Image from 'next/image'
import Hero from './Hero'
import PermainanList from './PermainanList'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <nav className='py-3 bg-[#424769]'>
        <Link href={'/'} className="pl-5 font-semibold text-[#fff]">Permainan Tradisional</Link>
      </nav>
      <Hero />
      <PermainanList />
      <footer><p className='text-center py-5'>Copyright &copy; By Muhammad Shafwan Kasifillah</p></footer>
    </main>
  )
}
