import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Ingles</li>
                <li>Arte</li>
                <li>Historia</li>
            </ul>
            <CartWidget amount={5} />
        </nav>
    )
}

