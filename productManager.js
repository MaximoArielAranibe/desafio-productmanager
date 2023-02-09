class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts = () => { return this.products }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        const id = this.generateID()

        let product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(product)
        return this.products
    }

    generateID = () => {
        const count = this.products.length

        if (count == 0) return 1

        const lastProduct = this.products[count - 1]
        const lastID = lastProduct.id
        const nextID = lastID + 1

        return nextID
    }

    getProductById = (id) => {
        const productFound = this.products.filter(e => e.id == id)
        return productFound || console.log(`Not found`)
    }
}

const manager = new ProductManager()
console.log(manager.addProduct("Hola","Hola description",30,30,30,30));
console.log(manager.addProduct("Hola","Hola description",30,30,30,30));
console.log("----------------");
console.log(manager.getProducts());

