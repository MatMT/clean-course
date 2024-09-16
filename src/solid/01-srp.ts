(() => {

    interface Product {
        id: number;
        name: string;
    }


    class ProductService {
        getProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product);
        }
    }

    class Mailer {
        private masterEmail: string = 'intersys@isyserp.com';

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }

    class CartBloc {
        private itemsInCart: Object[] = [];

        onAddToCart(productId: number) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
        }
    }


    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct(id: number) {
            this.productService.getProduct(id)
        }

        saveProduct(product: Product) {
            this.productService.saveProduct(product);
        }

        notifyClients() {
            this.mailer.sendEmail(['oscar'], 'to-clients');
        }

    }


    const service = new ProductService();
    const mailerSender= new Mailer();
    
    const productBloc = new ProductBloc(service, mailerSender);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);








})();