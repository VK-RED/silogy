import { BRIEF_DESCRIPTION, MAIN_DESCRIPTION } from "../../constants";

export function Hero(){
    return (
        <div className="md:mt-20 p-2 flex flex-col items-center space-y-4 text-center mt-16">

            <h3 className="scroll-m-20 text-2xl font-medium tracking-tight text-zinc-600 dark:text-zinc-400">
                {MAIN_DESCRIPTION}
            </h3>

            <h4 className="leading-7 [&:not(:first-child)]:mt-6 text-zinc-500">
                {BRIEF_DESCRIPTION}
            </h4>
            
        </div>
    )
}