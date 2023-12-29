export function ImageCard(){

    return(
        <div>



            <div className="border h-[350px] w-[400px] overflow-hidden rounded-3xl object-cover shadow-slate-600 shadow-2xl mt-10 dark:shadow-slate-400 dark:animate-pulse">
                <img 
                    src ={`https://c1.wallpaperflare.com/preview/625/985/142/integrated-circuit-device-chip-technology.jpg`}
                    alt='design-integrated-circuit'
                    className="h-full w-full "
                />
            </div>

            <blockquote className="mt-10 pl-6 italic text-center">
                {`"Meet the Future"`}
            </blockquote>
        </div>
        
    )
}