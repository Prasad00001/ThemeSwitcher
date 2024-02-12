import { useState } from 'react'

import './App.css'
import { ThemeProvider } from './Context/Context'
import { useEffect } from 'react'
import ThemeBtn from './Component/ThemeBtn'
import Card from './Component/Card'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  const [themeMode, setThemeMode]=useState('light')
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  //actual change theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
          <div>
   
              <h1 className='bg-gray-300 text-white p-4 m-4 rounded-full text-4xl font-bold'>Context Api</h1>
        
              <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
              </div>

          </div>
    </ThemeProvider>
  )
}

export default App

