import Link from "next/link";
import { GithubIcon, XIcon } from "./ui/icons";
import { GITHUB_LINK, GMAIL_LINK, PROJECT_LINK, TWITTER_LINK } from "../../constants";

export function Footer(){

    return(
        <footer className="w-full py-8 bg-zinc-800 text-white flex items-center justify-between relative top-[160px]">
            <div className="container px-4 md:px-6 flex justify-between">

                <div className="flex space-x-20">
                    <p className="text-left text-gray-500">Built by <span className="text-white animate-pulse">
                        <Link href={GITHUB_LINK}>
                        VK
                        </Link>
                    </span></p>
                    <div className="text-muted text-gray-400">

                        <Link href={GMAIL_LINK}>
                            contact@silogy.io
                        </Link>
                        
                    </div>
                </div>
                
                <div className="flex space-x-4">
                    <Link href={PROJECT_LINK} >
                        <GithubIcon className="w-4 h-4 text-white" />
                    </Link>
                    <Link href={TWITTER_LINK} >
                        <XIcon className="w-4 h-4 text-white" />
                    </Link>
                </div>
            </div>
      </footer>
    )
}