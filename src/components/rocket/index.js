import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import Rocket from '../../assets/images/rocket.svg'
import './index.css'

const RocketSVG = () => {
  const bgRef = useRef()
  const rocketSpaceRef = useRef()
  const solidRocketRef = useRef()


  return (
    <div className="rocket-container" ref={bgRef}>
      <img
        className="solid-rocket"
        ref={solidRocketRef}
        src={Rocket}
        alt="Solid Rocket"
      />
    </div>
  )
}

export default RocketSVG;