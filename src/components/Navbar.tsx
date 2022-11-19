import { useState } from 'react'
import menuIcon from '../assets/menuIcon.svg'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);
    
  }

  return (
    <>
      <div className='navbar'>
        <a href='#e' className='navbar-logo'>Catpunks</a>
        <div className={`${isOpen ? "nav-links mobile-menu" : "nav-links"}`}>
          <ul>
            <li><a href='#a'>About</a></li>
            <li><a href='#b'>Collection</a></li>
            <li><a href='#c'>FAQ</a></li>
            <li><button className='navbar-btn'>Connect Wallet</button></li>
          </ul>
        </div>
        <img onClick={() => {handleOpen()}} src={menuIcon} alt='menuIcon' className="navbar-icon"/>
      </div>
    </>
  )
}

export default Navbar