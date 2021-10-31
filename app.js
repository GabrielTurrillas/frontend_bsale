const getProductBtn = document.getElementById('get-product-btn');

const getData = () => {
  axios.get('https://backend-bsale.vercel.app/api/product')
    .then(res => console.log(res.data))
};

getProductBtn.addEventListener('click', getData);