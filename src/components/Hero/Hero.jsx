import css from "./Hero.module.css";
import HeroImage from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
    const transition = { duration: 3, type: "spring" };

    return (
        <div className={css.container}>
            {/* Left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>skin protection cream</span>
                <div className={css.text2}>
                    <span>Trendy collection</span>
                    <span>
                        Seedily say has suitable disposal and boy. Exercise joy
                        man children rejoiced.
                    </span>
                </div>
            </div>

            {/* middle part: Hero Image Section */}
            <div className={css.wrapper}>
                {/* Rainbow Circle  with animation*/}
                <motion.div
                    initial={{ bottom: "2rem" }}
                    whileInView={{ bottom: "0rem" }}
                    className={css.blueCircle}
                    transition={transition}
                ></motion.div>

                {/* Hero Image with animation*/}
                <motion.img
                    transition={transition}
                    initial={{ bottom: "-2rem" }}
                    whileInView={{ bottom: "0rem" }}
                    src={HeroImage}
                    width={600}
                    alt=""
                />

                {/* Cart div with animation */}
                <motion.div
                    transition={transition}
                    initial={{ right: "4%" }}
                    whileInView={{ right: "2%" }}
                    className={css.cart2}
                >
                    <RiShoppingBagFill />

                    <div className={css.signup}>
                        <span>Best Signup offers</span>

                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic </span>
                </div>
                <div className={css.customer}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
