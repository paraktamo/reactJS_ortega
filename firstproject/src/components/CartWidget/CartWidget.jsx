

function CartWidget({amount}) {
    return (
        <a className="nav-link">Mi Carrito <span className="badge text-bg-secondary">{amount}</span></a>
    )
}

export default CartWidget
