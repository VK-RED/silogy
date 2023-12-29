import { DarkModeToggle } from '@/components/darkModeToggle'
import { Hero } from '@/components/hero'
import { TITLE } from '../../constants'
import { ImageCard } from '@/components/imageCard'
import { WaitListCard } from '@/components/waitListCard'
import { Footer } from '@/components/footer'
import Head from 'next/head'



export default function Home() {
  return (
    <div className='h-screen flex flex-col items-center py-5 min-w-[500px] w-full'>
        <Head>
          <title>{TITLE}</title>
        </Head>
        <div className='w-full flex justify-between py-2 items-center'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-20">
              {TITLE}
            </h1>
            <div className='mr-10'>
                <DarkModeToggle />
            </div>
        </div>

        
        <Hero />

        <div className='flex flex-col md:flex-row md:space-x-7 lg:space-x-14 justify-between items-center'>
          <WaitListCard />
          <ImageCard />
        </div>
        
        <Footer />
    </div>
  )
}
