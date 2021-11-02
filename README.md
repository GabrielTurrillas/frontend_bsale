# frontend_bsale
Frontend Bsale

Frontend Bsale es una app de tienda virtual que cuenta con visualización de productos, precios y descuentos.
Contiene un buscador de productos y la opción de filtrado por categoría.
La aplicación busca los datos de los productos en la API REST Backend Bsale y dispone los elementos dentro un div a modo de galería o catálogo.  El elemento principal de la aplicación es el elemento con la id "gallery" y dependiendo de la cantidad de elementos se genera de manera dinámica una cantidad equivalente de elementos "card" que contienen la información de cada producto.

Funciones:
getProductData(parameter:  string)
Genera una API call con un parámetro opcional. Sin parámetro busca todos los registros de la tabla product.
Con parámetro retorna un conjunto de registros que contienen ese parámetro en el campo 'name'.

getCategoryData()
  Genera una Api call que retorna todos los registros de la tabla 'category'.

getProductByCategory(category: int)
  Genera una Api call que retorna un conjunto de registros de la tabla 'product' que contienen la id de la categoría indicada.

createCategoryFilter(categories: array)
  Crea los elementos 'option' para el elemento 'select' de filtrado por categorías.

createProductCard(product: object)
  Crea el elemento 'div' con la clase 'card' que contiene la informacion de los productos.

fillGallery(products: array)
  Toma un arreglo de productos y llama createProductCard por cada elemento para llenar la galería.

searchAndDisplay()
  Genera una búsqueda de productos con getProductData usando el parámetro opcional y luego llama a
  fillGallery para llenar la galería.

filterByCategory()
  Llama a getProductByCategory y con los elementos retornados usa fillGallery para llenar la galería

clickOnEnter(event) 
  función para pasar a event listener y traducir presionar la tecla enter a "click"

clickOnLogo()
  función que llama llena la galería con todos los elementos de la tabla "product" al hacer clic en el logo de la   aplicación

Librerías utilizadas:
Axios
Font Awesome