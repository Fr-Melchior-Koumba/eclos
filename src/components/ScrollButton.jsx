import React, {useState, useEffect} from 'react'
import { up } from '../assets/images'

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop

        if(scrolled > 500){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible)
  return (
    <div onClick={scrollToTop} className={`${visible ? 'flex' : 'hidden'} fixed right-[10px] bottom-[35px] z-10 cursor-pointer`}>
        <img src={up} alt="scroll top" />
    </div>
  )
}

export default ScrollButton