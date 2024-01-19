import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <div className="app bg-gray-200 text-black">
      <div className="h-16">
      <NavBar />
      </div>
      <main className="z-10 flex h-screen">
        <Aside />
        <section id="seccion" className="flex flex-col text-black">
          <ItemListContainer greeting={"BIENVENIDO A ELÉCTRICA JANNY"} />
        </section>
      </main>
    </div>
  );
}

export default App;
