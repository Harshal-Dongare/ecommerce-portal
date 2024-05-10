import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
    const [parent] = useAutoAnimate();

    const [menuProducts, setMenuProducts] = useState(ProductsData);

    const filter = (type) => {
        setMenuProducts(
            ProductsData.filter((product) => product.type === type)
        );
    };
    return (
        <div className={css.container}>
            <img src={Plane} alt="" />
            <h1>Our Featured Products</h1>

            {/* Products List shown*/}
            <div className={css.products}>
                {/* left side column of category */}
                <ul className={css.menu}>
                    <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                    <li onClick={() => filter("skin care")}>Skin Care</li>
                    <li onClick={() => filter("conditioner")}>Conditioners</li>
                    <li onClick={() => filter("foundation")}>Foundations</li>
                </ul>

                {/* Products based on the category */}
                <div className={css.list} ref={parent}>
                    {/* product card */}
                    {menuProducts.map((product, i) => (
                        <div className={css.product}>
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>Shop Now</div>
                            </div>
                            <img src={product.img} alt="" className="img-p" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
