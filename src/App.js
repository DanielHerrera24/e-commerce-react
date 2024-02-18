import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Aside from "./components/Aside/Aside";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import Collection from "./components/ProductListContainer/ProductListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
    <div className="app text-black">
      <div className="h-16">
        <NavBar className="z-10" />
      </div>
      <main className="flex justify-center h-[90vh]">
        <div className="flex flex-col md:flex-row child-main md:mt-7 w-full max-w-screen-lg">
          <Aside />
          <section
            id="seccion"
            className="flex flex-col items-center w-full text-black"
          >
            <Routes>
              <Route
                path="/e-commerce-react"
                element={<Collection greeting={"Productos desde FIREBASE"} />}
              />
              <Route
                path="/e-commerce-react/categoria/:categoryId"
                element={<Collection greeting={"Productos desde FIREBASE"} />}
              />
              <Route
                path="/e-commerce-react/id/:id"
                element={<ItemDetailContainer />}
              />
              <Route
                path="/e-commerce-react/cart"
                element={{/* <Cart /> */}}
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
