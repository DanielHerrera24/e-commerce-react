export const sumaQuantities = (productos) => {
    if (!productos.length) return 0;
    const totalAmount = productos.reduce((acumulador, producto) => {
      return acumulador + producto.quantity;
    }, 0);
    return totalAmount;
  };