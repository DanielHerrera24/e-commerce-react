import { useState, useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import CartContext from "../context/CartContext";
import Btn, { BtnOutline } from "./commons/Btn";
import { Link } from "react-router-dom";

function Form() {
  const { itemsCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState(null);
  const [confirmEmail, setConfirmEmail] = useState("");

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      alert("Los correos electrónicos no coinciden");
    } else {
      const ordersCollection = collection(db, "orden");
      const order = {
        buyer: {
          name,
          email,
          confirmEmail,
          tel,
        },

        items: itemsCart,
      };

      addDoc(ordersCollection, order).then(({ id }) => {
        setOrderId(id);
        setName("");
        setEmail("");
        setTel("");
      });
    }
  };

  return (
    <div className="flex flex-col items-center py-6">
      <h2 className="text-2xl font-semibold mb-4">Enviaremos la compra a:</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center border rounded-lg p-4 w-full max-w-md shadow-[0_1px_10px_1px_rgba(0,0,0,0.3)]"
      >
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Nombre"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Email"
        />
        <input
          type="email"
          onChange={(e) => setConfirmEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Confirma tu Email"
        />
        <input
          type="tel"
          value={tel}
          onChange={(e) => {
            const input = e.target.value;
            if (!isNaN(input) && input.length <= 10) {
              setTel(input);
            }
          }}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Teléfono"
        />

        <div className="flex w-full justify-evenly">
          <Btn type="submit">Enviar compra</Btn>
          <Link to="/e-commerce-react/cart">
            <BtnOutline>Cancelar</BtnOutline>
          </Link>
        </div>
      </form>
      <h3 className="mt-4 text-xl">Order Id: {orderId}</h3>
    </div>
  );
}

export default Form;
