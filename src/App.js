import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <div className="app bg-gray-200 text-black">
      <header>
        <NavBar />
      </header>
      <main className="flex">
        <Aside />
        <section
          id="seccion"
          className="flex flex-col items-center text-black"
        >
          <ItemListContainer greeting={"BIENVENIDO A ELÉCTRICA JANNY"} />
        </section>
      </main>
    </div>
  );
}

export default App;
