import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <div className="app text-black">
      <div className="h-16">
        <NavBar className="z-10" />
      </div>
      <main className="flex justify-center h-screen">
        <div className="flex child-main w-full max-w-screen-lg">
          <Aside />
          <section id="seccion" className="flex flex-col w-full text-black">
            <ItemListContainer greeting={"BIENVENIDO A ELÉCTRICA JANNY"} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
