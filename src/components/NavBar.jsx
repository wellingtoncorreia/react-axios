import { Link } from "react-router-dom";

import '../styles/navbar.css'
const NavBar = () => {
  return (
    <nav className="navbar">
        <h2>Blog</h2>
        <ul>
            <li><Link className="link" to={`/`}>Início</Link></li>
            <li><Link className="link" to={`/new`}>Cadastro</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
