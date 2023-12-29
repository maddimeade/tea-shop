import React, { useContext } from 'react';
import { TeaShopContext } from './TeaShopProvider';
import { ADD_TO_CART } from '../atoms/Constants';
import CustomImageButton from '../atoms/CustomImageButton';

//useReducer

//useCOntext

const TeaItem = ({ tea, onRemove }) => {
  const { dispatch } = useContext(TeaShopContext);

  const addToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: tea });
  };

  return (
    <li>
      {tea.name} - ${tea.price}
      <CustomImageButton imagePath={tea.pathToImage} onClick={addToCart}></CustomImageButton>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default TeaItem;
