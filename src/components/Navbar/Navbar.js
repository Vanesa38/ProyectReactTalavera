import logo from "../../logosushi1.png";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
export default function Navbar() {
    return(
        <div>
            <header>
                <div className= "img-logo">
                    <img src={logo} alt= "logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="">HOME</a>
                        </li>
                        <li>
                            <a href="">PRODUCTOS</a>
                        </li>
                        <li>
                            <a href="">CONTACTO</a>
                        </li>
                        <li className="cart">
                            <a href="">
                                <CartWidget />
                            </a>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    );
}

