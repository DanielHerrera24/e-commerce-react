import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Error from "./components/commons/Error";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import Form from "./components/Form.jsx";

function App() {
  return (
    <div className="app text-black">
      <div className="h-16">
        <NavBar className="z-10" />
      </div>
      <main className="flex justify-center min-h-[90vh]">
        <div className="flex flex-col md:flex-row md:mt-7 w-full max-w-screen-lg">
          <section
            id="seccion"
            className="flex flex-col items-center w-full text-black"
          >
            <Routes>
              <Route
                path="/e-commerce-react"
                element={<ItemListContainer greeting={"Productos Eléctrica Janny"} />}
              />
              <Route
                path="/e-commerce-react/categoria/:categoryId"
                element={<ItemListContainer greeting={"Productos Eléctrica Janny"} />}
              />
              <Route
                path="/e-commerce-react/id/:id"
                element={<ItemDetailContainer />}
              />
              <Route
                path="/e-commerce-react/cart"
                element={<Cart />}
              />
              <Route
                path="/e-commerce-react/form"
                element={<Form />}
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
