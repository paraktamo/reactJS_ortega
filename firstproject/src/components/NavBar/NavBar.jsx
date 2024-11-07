import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

export default function NavBar() {
    return (
        // <nav>
        //     <ul>
        //         <li>Home</li>
        //         <li>Ingles</li>
        //         <li>Arte</li>
        //         <li>Historia</li>
        //     </ul>
        //     <CartWidget amount={5} />
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-custom">
            <a className="navbar-brand" href="#">Casa del Sur</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inglés</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Arte</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Historia</a>
                    </li>
                    <li className="nav-item active">
                        <CartWidget amount={5} />
                    </li>
                </ul>

            </div>
        </nav>
    )
}

