import './product.css'
import QuantityPicker from './quantityPicker';
import { useState, useContext } from 'react';
import StoreContext from '../context/storeContext';

const Product = (props) => {
    let [quantity,setQuantity] = useState(1);
    let addProdToCart = useContext(StoreContext).addProdToCart;

    let onQuantityChange = (value) => {
        setQuantity(value);
    }


    //add a function to return the total. total = price*quantity
    const getTotal = () => {
        let total = props.data.price * quantity;
        return total;
        return total.toFixed(2)
    };

    const addProduct = () => {
        console.log("adding product to cart", props.data.title)
        let prodForCart = {...props.data, quantity: quantity};
        addProdToCart(prodForCart);
    }


    return(
    <div className="product">
       <img className="productImg" src={"/img/" + props.data.image} alt="Products"></img>
       <h2>{props.data.title}</h2>

       <div className="controls">
          <label className="total">Total: ${getTotal()}</label>
          <label>Price: ${props.data.price.toFixed(2)}</label>
        </div>

        <div className="controls">
           <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
           <button onClick={addProduct}className="btn btn-danger btn-sm">
              Add
            </button>
        </div>
    </div>
    );
};

export default Product;