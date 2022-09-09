import { useEffect } from "react";
import logo from "../../assets/logos/logo-blanco.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(props) {
    return (
        <div className="navbar bg-base-100 p-6">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Products</a></li>
                    <li><a>About</a></li>
                </ul>
                </div>
                <img src={logo} className="w-24" alt="Logo de Lacroix Patissier"/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li><a>Products</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <CartWidget/>
            </div>
        </div>
    );
}

export default NavBar;