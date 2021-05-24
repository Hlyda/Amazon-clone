import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id); /* Searching the product from its id (data.js) if it's exist ... else.. */
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2"> {/* Column to show the product's img */}
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1"> {/* Column to show the product's description */}
          <ul> {/* Unordered list */}
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Price : {product.price} DA</li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1"> {/* Column to show the action to take */}
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">{product.price} DA</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                      {/* If the product's in Stock ..Else Unavailable*/}
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
