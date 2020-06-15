import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  AddToCartButton,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl}></BackgroundImage>
      <CollectionFooterContainer>
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </CollectionFooterContainer>
      <AddToCartButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
