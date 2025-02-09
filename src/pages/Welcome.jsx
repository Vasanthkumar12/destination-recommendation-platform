import React from 'react'
import '../styles/Welcome.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/img 1.jpg'
import img2 from '../assets/img 2.jpg'
import img3 from '../assets/img 3.jpg'
import img4 from '../assets/img 4.jpg'
import img5 from '../assets/img 5.jpg'

export const Welcome = () => {
  let images = [img1, img2, img3, img4, img5]
  let paddingsLeft = [50, 35, 50, 447, 420]
  let paddingsTop = [200, 415, 247, 495, 200]
  const [bgImage, setBgImage] = useState(images[0])
  const [padTop, setPadTop] = useState(paddingsTop[0])
  const [padLeft, setPadLeft] = useState(paddingsLeft[0])
  useEffect(() => {
    let index = 0
    let interval = setInterval(() => {
      index = (index+1) % images.length
      setBgImage(images[index])
      setPadLeft(paddingsLeft[index])
      setPadTop(paddingsTop[index])
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
        <div id='welcome-div'
                style ={{
                    paddingLeft: padLeft,
                    paddingTop: padTop
                }}>
            <h1 id='greet'>A warm welcome to <span id='nova'>Destinova</span>!</h1>
            <Link to='/register' id="goRegister">Register to see Ideal Destinations</Link>
        </div>
    </div>
  )
}
