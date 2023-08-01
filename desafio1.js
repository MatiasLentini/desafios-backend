class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        if (this.products.find(prod => prod.code == product.code)) {
            return "Código de producto ya existente"
        }
        if (product.code != "" || product.stock >= 0) {
            this.products.push(product)
        } else {
            return "No es posible cargar un producto vacio"
        }
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        let product = this.products.find(prod => prod.id == id)
        if (product) {
            return product
        }
        return "Producto no encontrado"
    }

}

class Product {
    constructor(tittle, description, price, thumbnail, code, stock) {
        this.tittle = tittle
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementarID()
    }

    static incrementarID() {
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const product1 = new Product("Intel i3", "Procesador gama baja", 50000, "", "333", 10)
const product2 = new Product("Intel i5", "Procesador gama media", 100000, "", "555", 10)
const product3 = new Product("Intel i7", "Procesador gama alta", 200000, "", "777", 10)

const productManager = new ProductManager()

productManager.addProduct(product1)
productManager.addProduct(product2)
productManager.addProduct(product3)

console.log(productManager.getProducts())
console.log(productManager.getProductById(3))