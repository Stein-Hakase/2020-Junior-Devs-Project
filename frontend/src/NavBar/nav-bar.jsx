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
                        <span className='nav-item'
                             style={{color:'#547818'}}
                        >
                            home
                        </span>
                        <span className='nav-item'>courses</span>
                        <span className='nav-item'>about</span>
                    </div>
                     <div className='nav-grp2'>
                        <span className='nav-item'>register</span>
                        <span className='nav-item'>login</span>
                     </div>
                 </div>
           
        </div>
)
export default NavBar