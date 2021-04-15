import React, {useState} from 'react'
import "./Header.scss"
import sprite from "../../icons/header/symbol-defs.svg"


const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return (
        <header className="pageHeader">
            <button type="button" className="dropdownBtn" onClick={handleDropdown}>
                <span className="userName">Kira Huston</span>
                <svg className="dropdownIcon">
                    <use href={sprite + "#dropDownArrow"} />
                </svg>
            </button>
                {dropdownOpen && (
                    <ul className="userNav">
                        <li className="userNavItem">Profile</li>
                        <li className="userNavItem">Sign out</li>
                    </ul>
                )}
            
            
        </header>
    );
};

export default Header;
