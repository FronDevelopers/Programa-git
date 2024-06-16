document.getElementById('navbar-toggler').addEventListener('click', function() {
    document.getElementById('navbar-menu').classList.toggle('active');
  });


const ProductList = ()=>{
  const [products, setProducts] = useState([]);
    return(
      <div className= "product-list"></div>
    );
};


