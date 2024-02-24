import { useState } from "react";
import { collection, addDoc, getFirestore } from 'firebase/firestore'

function Form() {

    const cart = [
        {
            nombre: "apagador",
            precio: 80
        },
        {
            nombre: "foco LED",
            precio: 45
        }
    ]

    const [orderId, setOrderId] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const db = getFirestore()

const handleSubmit = (e) => {
    e.preventDefault()
    const ordersCollection = collection(db, "orden") 
    const order = {
        buyer: {
            name,
            email
        },

        items: cart

    }

    addDoc(ordersCollection, order).then(({ id }) => {
        setOrderId(id)
    })

}

  return (
    <>
      <h2>Form</h2>
       <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
       </form>

       <h3>Order Id: {orderId}</h3>
    </>
  );
}

export default Form;
