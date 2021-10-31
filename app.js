//SELECTORS
const gallery = document.getElementById('gallery')

//EVENT LISTENERS
//getProductBtn.addEventListener('click', getProductData);


//FUNCTIONS
const getProductData = async () => {
  const products = await axios.get('https://backend-bsale.vercel.app/api/product')
    .then(res => res.data)
  return products
};

const createProductCard = (product) => {
  //Card div
  const card = document.createElement('div');
  card.classList.add('card')

  //Title area
  const titleArea = document.createElement('div')
  titleArea.classList.add('title-area')

  //Title
  const title = document.createElement('h3');
  title.classList.add('title')
  title.innerText = product.name
  titleArea.appendChild(title)

  //Img area
  const imgArea = document.createElement('div')
  imgArea.classList.add('img-area')

  //Img
  const img = document.createElement('img');
  img.src = product.url_image
  img.alt = 'Image not available'
  imgArea.appendChild(img)

  //Text area
  const textArea = document.createElement('div')
  textArea.classList.add('text-area')

  // price
  const price = document.createElement('h4')
  price.innerText = `$${product.price}`
  textArea.appendChild(price)

  //Append areas to card
  card.appendChild(titleArea)
  card.appendChild(imgArea)
  card.appendChild(textArea)

  //Append card to gallery
  gallery.appendChild(card)
}

const fillGallery = (products) => {
  console.log(products)

  cards = [];
  products.forEach((product) => {
    createProductCard(product)
  })
}

//FUNCTION CALLS
getProductData().then(products => fillGallery(products))

