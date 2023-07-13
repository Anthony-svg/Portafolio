import { useRef } from 'react'
import logo from '../../../assets/images/portada3.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()



  return (
    <div className="logo-container" ref={bgRef}>
      <img src={logo}
        className="solid-logo"
        ref={solidLogoRef}
        alt="Developer"
      />
    </div>
  )
}

export default Logo
