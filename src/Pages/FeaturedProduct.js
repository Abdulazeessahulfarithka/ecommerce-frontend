import React, { useEffect, useState } from 'react';
import './FeaturedProduct.css'; // Import your CSS file
import { API } from '../Global';

function FeaturedProduct() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5; // Number of items to show per page
  const [error, setError] = useState(null); // State for error handling

  const fetchProducts = async (page) => {
    try {
      const response = await fetch(`${API}/api/products/get-product?page=${page}&limit=${itemsPerPage}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / itemsPerPage)); // Assuming your API returns total count
      setError(null); // Reset error if fetch is successful
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products. Please try again later.'); // Set error message
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h1>Featured Products</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      <div className="product-cards-container">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product._id} className="card">
              <img src={product.photo} alt={product.name} className="card-img" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>

               
                <button className="btn btn-primary">
                  <strong>Price: ${product.price}</strong>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <div className="pagination-controls" style={{ marginTop: '20px' }}>
        <a href="#" className={`previous ${currentPage === 1 ? 'disabled' : ''}`} onClick={handlePrevPage}>
          Previous
        </a>
        <span> Page {currentPage} of {totalPages} </span>
        <a href="#" className={`next ${currentPage === totalPages ? 'disabled' : ''}`} onClick={handleNextPage}>
          Next
        </a>
      </div>
    </div>
  );
}

export default FeaturedProduct;
