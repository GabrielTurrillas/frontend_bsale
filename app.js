/************************/
/*       SELECTORS      */
/************************/
const gallery = document.getElementById('gallery')
const searchBar = document.getElementById('search-bar')
const searchBtn = document.getElementById('search-btn')
const filterProduct = document.querySelector('.filter-product')
const categoriesBtn = document.getElementById('categories-btn')
const logo = document.getElementById('logo')


/************************/
/*    EVENT LISTENERS   */
/************************/
searchBtn.addEventListener('click', searchAndDisplay);
searchBar.addEventListener('keyup', clickOnEnter);
logo.addEventListener('click', clickOnLogo);
categoriesBtn.addEventListener('click', filterByCategory);

/************************/
/*      FUNCTIONS       */
/************************/
const getProductData = async (parameter = '') => {
  const products = await axios.get(`https://backend-bsale.vercel.app/api/product/${parameter}`)
    .then(res => res.data)
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
  return products
};

const getCategoryData = async () => {
  const categories = await axios.get(`https://backend-bsale.vercel.app/api/category`)
    .then(res => res.data)
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
  return categories
}

const getProductByCategory = async (category) => {
  console.log(category)
  const products = await axios.get(`https://backend-bsale.vercel.app/api/product/category/${category}`)
    .then(res => res.data)
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
  return products
}

const createCategoryFilter = (categories) => {
  categories.forEach(category => {
    const option = document.createElement('option')
    option.value = category.id
    option.innerText = category.name
    filterProduct.appendChild(option)
  })
}

const createProductCard = (product) => {
  //Card div
  const card = document.createElement('div');
  card.classList.add('card')

  //Title area
  const titleArea = document.createElement('div')
  titleArea.classList.add('title-area')

  //Title
  const title = document.createElement('h3');
  title.innerText = product.name
  titleArea.appendChild(title)

  //Img area
  const imgArea = document.createElement('div')
  imgArea.classList.add('img-area')

  //Img
  const img = document.createElement('img');
  img.src = product.url_image
  img.alt = 'Imagen no disponible'
  imgArea.appendChild(img)

  //Text area
  const textArea = document.createElement('div')
  textArea.classList.add('text-area')

  // price
  if (product.discount) {
    //Value of prices
    const oldPrice = product.price
    const newPrice = Math.trunc(product.price - (product.price * product.discount / 100))
    //Price DOM elements
    const priceNoDiscount = document.createElement('h4')
    priceNoDiscount.innerText = `$${oldPrice}`
    priceNoDiscount.classList.add('price-no-discount')

    const priceWithDiscount = document.createElement('h4')
    priceWithDiscount.innerText = `$${newPrice}`
    priceWithDiscount.classList.add('price-with-discount')

    const discount = document.createElement('h4')
    discount.innerText = `${product.discount}%OFF`
    discount.classList.add('discount')

    textArea.appendChild(priceNoDiscount)
    textArea.appendChild(priceWithDiscount)
    textArea.appendChild(discount)
  } else {
    const price = document.createElement('h4')
    price.innerText = `$${product.price}`
    price.classList.add('normal-price')
    textArea.appendChild(price)
  }
  //Append areas to card
  card.appendChild(titleArea)
  card.appendChild(imgArea)
  card.appendChild(textArea)

  return card
}

const fillGallery = (products) => {
  //Clean gallery
  gallery.innerHTML = ''
  cards = [];
  products.forEach((product) => {
    const card = createProductCard(product)
    gallery.appendChild(card)
  })
}

//Search button function
function searchAndDisplay() {
  //Filling Gallery
  const parameter = searchBar.value
  getProductData(parameter).then(products => fillGallery(products))
}

function filterByCategory(e) {
  console.log(filterProduct.value)
  if (filterProduct.value === 'All') {
    getProductData().then(products => fillGallery(products))
  } else {
    getProductByCategory(filterProduct.value).then(products => fillGallery(products))
  }
}

function clickOnEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchBtn.click();
  }
}

function clickOnLogo(e) {
  getProductData().then(products => fillGallery(products))
}

/************************/
/*    FUNCTION CALLS    */
/************************/
getProductData().then(products => fillGallery(products))
getCategoryData().then(categories => createCategoryFilter(categories))
