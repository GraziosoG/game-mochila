import './Menu.css';
import React, {useState} from 'react';
import { GrMenu, GrClose } from 'react-icons/gr';
import { Link } from "react-router-dom";
import { MenuData} from './MenuData';
import { IconContext } from 'react-icons';

const Menu = () => {
    const [sidebar, setSideBar ] = useState(false); // not shown

    const showSideBar = () => setSideBar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: 'black'}}>
            <div className="menu">
                <Link to="#" className="menu-bars">
                    <GrMenu onClick={showSideBar}/>
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <GrClose />
                        </Link>
                    </li>
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index} className="nav-text">
                                <Link to={item.path}>
                                    {item.icon}
                                    <span className="nav-text-span">{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                
            </nav>
            </IconContext.Provider>
        </>
    )
  }

export default Menu