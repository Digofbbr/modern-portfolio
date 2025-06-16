import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)
 
    const changeMode = () => {
        if(isDarkMode){
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', 'light')
            
        }else{
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')
        }
    }

    useEffect(() => {
      let theme = localStorage.getItem("theme")
      if(theme === "dark"){
          setIsDarkMode(true)
          document.documentElement.classList.add("dark")
        }else{
          setIsDarkMode(false)
          document.documentElement.classList.remove("dark")
      }
    }, [])
    

  return (
    <button onClick={changeMode} className="fixed cursor-pointer max-sm:hidden top-5 right-5 z-50 rounded-full transition-colors duration-300 focus:outline-hidden">
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}
    </button>
  )
}

export default ThemeToggle