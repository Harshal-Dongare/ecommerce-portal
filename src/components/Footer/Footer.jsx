import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                {/* Logo */}
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>amazon</span>
                </div>

                {/* Contact Us Block */}
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact US</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>111 north avenue Orlando, FL 32801</span>
                        </span>
                        <span className={css.pngLine}>
                            <PhoneIcon className={css.icon} />
                            <a href="tel:352-306-4415">352-306-4415</a>
                        </span>
                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <a href="mainto:support@amazon.com">
                                support@amazon.com
                            </a>
                        </span>
                    </div>
                </div>

                {/* Account */}
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <span>Sign in</span>
                        </span>
                    </div>
                </div>

                {/* Company */}
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <span>About us</span>
                        </span>
                    </div>
                </div>

                {/* Resources */}
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <span>Safety Privacy & Terms</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className={css.copyRight}>
                <span>CopyRight 2022 by Amazon, Inc</span>
                <span>All rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;
