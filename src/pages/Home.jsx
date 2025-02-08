import React, { useEffect, useState } from 'react'
import { NavBar } from '../common/NavBar'
import { Landing } from '../components/Landing'
import '../styles/Home.css'
import img1 from '../assets/img 1.jpg'
import img2 from '../assets/img 2.jpg'
import img3 from '../assets/img 3.jpg'
import img4 from '../assets/img 4.jpg'
import img5 from '../assets/img 5.jpg'


export const Home = () => {
  let images = [img1, img2, img3, img4, img5]
  const [bgImage, setBgImage] = useState(images[0])

  useEffect(() => {
    let index = 0
    let interval = setInterval(() => {
      index = (index+1) % images.length
      setBgImage(images[index])
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div id='home' 
      style={{
      backgroundImage: `url(${bgImage})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity: 0.9,
      transition: 'background-image 0.5s ease-in-out'
      }}
  >
        <NavBar />
        <Landing />
    </div>
  )
}
