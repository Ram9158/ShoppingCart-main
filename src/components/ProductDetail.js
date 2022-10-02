import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  selectedproduct,
  removeselectedproduct,
} from "../redux/actions/productactions";

const ProductDetail = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  console.log(product);
  useEffect(() => {
    const fetchProductDetail = async () => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(selectedproduct(response.data));
    };
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeselectedproduct());
    };
  }, [dispatch, productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <h1>
          <LoadingButton
            margin="auto"
            loading
            loadingIndicator="Loading…"
          ></LoadingButton>
        </h1>
      ) : (
        <div className="ui placeholder segment">
          <h5 className="">
            <a className="ui  teal tag label" href="/">
              back
            </a>
          </h5>
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt="IMG.png" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui  teal tag label" href="/">
                    ${price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
