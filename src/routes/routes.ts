import { productController } from "../controllers/productController";

export class Routes {    

    public productController: productController = new productController();
    
    public routes(app): void {  

        app.route('/')
                .get((req, res)=>{res.send("<h3>Welcome to mmartan API</h3>By: Marcos Pereira Lourinho");});
        
        app.route('/api/v1/products')
                .get(this.productController.index)
                .post(this.productController.store)
        
        app.route('/api/v1/products/search')
                .get(this.productController.search)
                
        app.route('/api/v1/products/:id')
                .get(this.productController.view)
                .put(this.productController.update)
                .delete(this.productController.destroy)

    }
}