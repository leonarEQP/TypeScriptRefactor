class Producto {
  nombre: string;
  precio: number;
  descuento: number;

  constructor(nombre: string, precio: number, descuento: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
  }

  calcularPrecioFinal(): number {
    return this.precio - this.precio * (this.descuento / 100);
  }
}

class Carrito {
  productos: Producto[] = [];

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  calcularTotal(): number {
    let total = 0;
    for (let i = 0; i < this.productos.length; i++) {
      total += this.productos[i].calcularPrecioFinal();
    }
    return total;
  }

  mostrarDetalle(): void {
    for (let i = 0; i < this.productos.length; i++) {
      console.log(
        `Producto: ${this.productos[i].nombre}, Precio Final: ${this.productos[
          i
        ].calcularPrecioFinal()}`
      );
    }
  }
}
const carrito = new Carrito();
carrito.agregarProducto(new Producto("Producto 1", 100, 10));
carrito.agregarProducto(new Producto("Producto 2", 200, 20));
carrito.agregarProducto(new Producto("Producto 3", 300, 30));

console.log(`Total a pagar: ${carrito.calcularTotal()}`);

carrito.mostrarDetalle();
