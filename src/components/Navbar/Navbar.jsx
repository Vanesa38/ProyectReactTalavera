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
                            <Link to='/'>Home</Link>
                        </li>
                            
                    
                        <li>
                            <Link to= '/category/SushiRoll'>SushiRoll</Link>
        
                            
                        </li>
                        <li>
                            <Link to= '/category/CombinadoSushi'>CombinadoSushi</Link>
                            
                        </li>
                        <li >
                            
                                <CartWidget />
                            
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    );
    
}

