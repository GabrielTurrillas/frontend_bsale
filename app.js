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

const fillGallery = (products) => {
  console.log(products)

  cards = [];
  products.forEach((product) => {
    //Card div
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card')

    //Card title
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('title')
    cardTitle.innerText = product.name
    cardDiv.appendChild(cardTitle)

    //Card Img
    const cardImg = document.createElement('img');
    cardImg.src = product.url_image
    cardImg.alt = 'Image not available'
    cardDiv.appendChild(cardImg)

    // Append card div
    gallery.appendChild(cardDiv)
  })
}

//FUNCTION CALLS
getProductData().then(products => fillGallery(products))

