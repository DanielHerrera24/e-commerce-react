import { useState, useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import CartContext from "../context/CartContext";
import Btn, { BtnOutline } from "./commons/Btn";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


function Form() {
  const { itemsCart, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      setErrorMessage("Los correos electrónicos no coinciden");
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

      addDoc(ordersCollection, order)
        .then(({ id }) => {
          setOrderId(id);
          setName("");
          setEmail("");
          setTel("");
          setConfirmEmail("");
          setErrorMessage("");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Su compra ha sido enviada",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            clearCart();
          });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  return (
    <div className="flex flex-col items-center mt-7 w-full">
      <h2 className="text-2xl font-semibold mb-4">Enviaremos la compra a:</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center border rounded-lg p-4 w-full max-w-md shadow-[0_1px_10px_1px_rgba(0,0,0,0.3)]"
      >
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Nombre"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Email"
        />
        <input
          required
          type="email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Confirma tu Email"
        />
        <input
          required
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
        {errorMessage && <p className="text-xl text-red-500 pb-4">{errorMessage}</p>}
        <div className="flex w-full justify-evenly">
          <Btn type="submit">Realizar compra</Btn>
          <Link to="/e-commerce-react/cart">
            <BtnOutline>Cancelar</BtnOutline>
          </Link>
        </div>
      </form>
      {orderId && <h3 className="mt-4 text-2xl text-green-600">Orden ID: {orderId}</h3>}
    </div>
  );
}

export default Form;
