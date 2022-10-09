import logo from "../../logosushi1.png";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

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
                        <Link to = '/'>
                          <h1>Home</h1> 
                        </Link>
                        </li>
                        <li>
                            <a href="">SUSHI</a>
                        </li>
                        <li>
                            <a href="">COMBINADOS</a>
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

