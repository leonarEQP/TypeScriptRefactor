class Product {
  constructor(
    public name: string,
    public price: number,
    public discount: number
  ) {}

  calculateFinalPrice(): number {
    return this.price - this.price * (this.discount / 100);
  }
}

class Cart {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }
  calculateTotal(): number {
    return this.products.reduce(
      (total, product) => total + product.calculateFinalPrice(),
      0
    );
  }
  showDetail() {
    this.products.forEach((product) =>
      console.log(
        `Product: ${
          product.name
        }, Final Price: ${product.calculateFinalPrice()}`
      )
    );
  }
}

const shoppingCart = new Cart();

shoppingCart.addProduct(new Product("Product 1", 100, 10));
shoppingCart.addProduct(new Product("Product 2", 200, 20));
shoppingCart.addProduct(new Product("Product 3", 300, 30));

console.log(`Total amount: ${shoppingCart.calculateTotal()} `);

shoppingCart.showDetail();
