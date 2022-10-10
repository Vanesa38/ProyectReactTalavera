import logo from "../../logosushi1.png";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <header>
                <div className="img-logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>
                              <li id="item">Home</li>
                            </Link>
                        </li>
                        <li>
                            <Link to= '/category/SushiRoll'>
                            <a id="item">SushiRoll</a>
                            </Link>
                        </li>
                        <li>
                            <Link to= '/category/CombinadoSushi'>
                            <a id="item">CombinadoSushi</a>
                            </Link>
                        </li>
                        <li >
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

