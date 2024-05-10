import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";

const Header = () => {
    const [visibleHamburgerMenu, setVisibleHamburgerMenu] = useState(true);

    const toggleMenu = () => {
        setVisibleHamburgerMenu((prev) => !prev);
    };

    return (
        <div className={css.container}>
            {/* Branding of Portal */}
            <div className={css.logo}>
                <img src={Logo} alt="" /> {/* Website logo */}
                <span>amazon</span> {/* Website Name */}
            </div>

            {/* Navigation Section on the right side */}
            <div className={css.right}>
                {/* Hamburger menu for smaller screens */}
                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars />
                </div>

                {/* Navigation links */}

                <ul
                    className={css.menu}
                    style={{
                        display: visibleHamburgerMenu ? "inherit" : "none",
                    }}
                >
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>

                {/* Search bar */}
                <input
                    type="text"
                    placeholder="Search"
                    className={css.search}
                />
                {/* Add card Menu */}
                <CgShoppingBag className={css.cart} />
            </div>
        </div>
    );
};

export default Header;
