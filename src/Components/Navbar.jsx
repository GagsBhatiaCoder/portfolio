import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Comp.css';
import Logo from '../assets/GagsLogo.png'


const MenuData = [
    {
      title:'Home',
      url: '/',
      cName: 'navLinks',
      icon: 'fa-solid fa-house'
    },
    {
      title:'About',
      url: '/about',
      cName: 'navLinks',
      icon: 'fa-solid fa-circle-info'
    },
    {
      title:'Services',
      url: '/service',
      cName: 'navLinks',
      icon: 'fa-solid fa-briefcase'
    },
    {
      title:'Blog',
      url: '/blogPage',
      cName: 'navLinks',
      icon: 'fa-solid fa-blog'
    },
    {
      title:'Contact-Us',
      url: '/contact',
      cName: 'navLinksContact',
    }
  ]
export default function Navbar() {
    const [clicked, SetClicked] = useState(false);
    const navigate = useNavigate()

    const toggleMenu = () =>{
      SetClicked(!clicked)
    
    }
    const handleNavigation = (url) => {
      SetClicked(false);
      navigate(url)

    }
  return (
    <>
       <nav className="navbarItems">
      <Link to="/" className="logo" ><img className="logo-img" src={Logo} alt="Company Logo" /></Link>
      <div className="menuBars" onClick={toggleMenu}>
      <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
   <ul className= {clicked ? "navMenu active" : "navMenu"}>
    {MenuData.map((item, index) => {
      return(
        <li key={index}>
          <Link to={item.url} className={item.cName} onClick={() => handleNavigation(item.url)}> <i className={item.icon} ></i>{item.title}</Link>
          </li>
      )
    })}
   
   </ul>
      </nav>
    </>
  )
}
