import React from 'react';
import garment1 from '../../../public/images/garment1.jpg';
import garment2 from '../../../public/images/garment2.jpg';
import garment3 from '../../../public/images/garment3.jpg';
import './Portfolio.css';


const Portfolio = () => {
    return (
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4">
            <span>{'<'}</span>sourcing portfolio<span>{'>'}</span>
          </h1>
          <p className="text-warning">These are a few of the successful garments we’ve sourced for top brands and retailers.</p>
        </div>
  
        <div className="row g-4">
          {/* Garment 1 */}
          <div className="col-md-4">
            <div className="image-container mb-3">
              <img className="img-fluid" src={garment1} alt="Garment 1" />
            </div>
            <h5>{'{ Men’s Casual Shirts }'}</h5>
            <p className="text-warning">
              Our high-quality men’s shirts have been a staple for several leading brands. From design to fabric selection, we ensure a premium end product.
            </p>
            <p className="text-muted">Client: XYZ Apparel</p>
          </div>
  
          {/* Garment 2 */}
          <div className="col-md-4">
            <div className="image-container mb-3">
              <img className="img-fluid" src={garment2} alt="Garment 2" />
            </div>
            <h5>{'{ Women’s Activewear }'}</h5>
            <p className="text-warning">
              We specialize in sourcing women’s activewear, focusing on both functionality and fashion. Quality materials and fit are our top priority.
            </p>
            <p className="text-muted">Client: ABC Sportswear</p>
          </div>
  
          {/* Garment 3 */}
          <div className="col-md-4">
            <div className="image-container mb-3">
              <img className="img-fluid" src={garment3} alt="Garment 3" />
            </div>
            <h5>{'{ Children’s Clothing }'}</h5>
            <p className="text-warning">
              From playful designs to durable materials, we’ve been trusted to source children’s apparel for brands that value quality and comfort.
            </p>
            <p className="text-muted">Client: Kids World</p>
          </div>
        </div>
      </div>
    );
  };
  
export default Portfolio;
