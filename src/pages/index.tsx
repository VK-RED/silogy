import { DarkModeToggle } from '@/components/darkModeToggle'
import { Hero } from '@/components/hero'
import { TITLE } from '../../constants'
import { ImageCard } from '@/components/imageCard'
import { WaitListCard } from '@/components/waitListCard'

export default function Home() {
  return (
    <div className='h-screen flex flex-col items-center py-5 min-w-[500px] w-full'>

        <div className='w-full flex justify-between py-2 items-center'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-20">
              {TITLE}
            </h1>
            <div className='mr-10'>
                <DarkModeToggle />
            </div>
        </div>

        {/* <ImageCard /> */}
        <Hero />

        <div className='flex flex-col md:flex-row md:space-x-7 lg:space-x-14 justify-between items-center'>
          <WaitListCard />
          <ImageCard />
        </div>
        
    
    </div>
  )
}
