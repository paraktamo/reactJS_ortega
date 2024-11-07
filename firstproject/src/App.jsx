import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/navBar";


function App() {
  return (
    <>
      <NavBar />
      <hr />
      <ItemListContainer greeting="Bienvenidos a la tienda de Cursos de Casa del Sur" />
    </>
  )
}

export default App
