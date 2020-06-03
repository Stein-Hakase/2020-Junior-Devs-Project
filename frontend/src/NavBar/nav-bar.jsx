import React from 'react'
import './nav-bar.css'
import logo from '../assets/logo.svg'
const NavBar=()=>(
    
        <div className='navbarre'> 
                <div  className='logo-container'>           
                    <i class="fa fa-bars mobile-menu"></i>
                    <img className='logo'src={logo} alt="world"/>      
                </div>

                <div className='nav-items'>
                    <div className='nav-grp1'>
                        <a href='#'className='nav-item'
                             style={{color:'#547818'}}
                        >
                            home
                        </a>
                        <a href='#'className='nav-item'>courses</a>
                        <a href='#'className='nav-item'>about</a>
                    </div>
                     <div className='nav-grp2'>
                        <a href='#'className='nav-item'>register</a>
                        <a href='#'className='nav-item'>login</a>
                     </div>
                 </div>
           
        </div>
)
export default NavBar