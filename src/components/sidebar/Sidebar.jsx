import React, { useState } from 'react'
import sprite from "../../icons/sidebar/symbol-defs.svg"
import "./Sidebar.scss"
import routes from "../../routes/routes"
import { NavLink } from 'react-router-dom'



const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }
    return (
        <div className="sidebarContainer">
            <div className="sidebarControls">
                <button type="button" onClick={sidebarToggle} className="sidebarOpenButton">
                    <svg className="sidebarControlsIcon">
                        <use href={sidebarOpen? (sprite+"#arrowLeft"):(sprite+"#arrowRight")} />
                    </svg>
                </button>

            </div>
            <nav className="navigation">
                <ul>
                    {routes?.map(({ name, path, icon }) => (
                        <li key={name}>
                            <NavLink to={path}
                                className="sidebarLink"
                                activeClassName="sidebarLinkActive"
                            >
                                <svg className="sidebarControlsIcon">
                                    <use href={sprite + "#" + icon} />
                                </svg>
                                {sidebarOpen && <span className="linkName">{name}</span>}
                            </NavLink>

                        </li>
                    )
                    )}
                </ul>
            </nav>
            
        </div>
    );
};

export default Sidebar;
