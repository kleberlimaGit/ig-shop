import Image from 'next/image'
import Anime01 from '../assets/anime01.jpg'
import Anime02 from '../assets/anime02.jpg'
import Anime03 from '../assets/anime03.jpg'
import Anime04 from '../assets/anime04.jpg'
export default function Home() {
  return (
    <main className='my-auto flex gap-12 container calculate-width w-full ml-auto'>
      <a href="" >
        <Image src={Anime01} className="w-96 h-128 rounded-lg border-solid border-2 shadow-md border-greenR-300 shadow-greenR-500" alt=""/>
        <footer>
          <strong>Boneco anime</strong>
          <span>R$ 199,90</span>
        </footer>
      </a>

      <a href="" >
        <Image src={Anime02} className="w-96 h-128 rounded-lg border-solid border-2 shadow-md border-greenR-300 shadow-greenR-500" alt=""/>
        <footer>
          <strong>Boneco anime</strong>
          <span>R$ 199,90</span>
        </footer>
      </a>
      
    </main>
  )
}
