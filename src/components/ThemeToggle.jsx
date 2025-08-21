import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import cn from '../lib/utils.js'

export default function ThemeToggle(){
    const [ isDarkMode, setIsDarkMode ] = useState(false)
    useEffect(()=>{
        const theme = localStorage.getItem('theme')
        if(theme === 'light'){
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', 'light')
            setIsDarkMode(false)
        }else{
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')
            setIsDarkMode(true)
        }
    },[])


    function toggleTheme(){
        if(isDarkMode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', 'light')
            setIsDarkMode(false)
        }else{
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')
            setIsDarkMode(true)
        }
    }

    return(
        <button 
        onClick={toggleTheme} 
        className={cn("fixed max-sm:hidden top-5 right-5 z-50 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}>
            { isDarkMode? 
                <Sun className="h-6 w-6 text-yellow-300"/>:
                <Moon className="h-6 w-6 text-blue-900"/>
            }
        </button>
    )
}