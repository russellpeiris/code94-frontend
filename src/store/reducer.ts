import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, GET_PRODUCTS, UPDATE_PRODUCT, UPLOAD_IMAGE } from './actionTypes';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: action.payload === true ? [] : action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload === true ? [] : action.payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload === true ? [] : action.payload,
      };

    case UPLOAD_IMAGE:
      return {
        ...state,
        image: action.payload === true ? [] : action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload === true ? [] : action.payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: action.payload === true ? [] : action.payload,
      };

    default:
      return state;
  }
};

export function postProduct(values: any): any {
  return async (dispatch: Dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: ADD_PRODUCT, payload: true });
        axios
          .post(`/products/create-product`, values)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };
}

export function getProducts(): any {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_PRODUCTS, payload: true });
      const res = await axios.get(`/products/get-products`);
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function uploadImage(files: any[]): any {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UPLOAD_IMAGE, payload: true });
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file.file);
      });
      const res = await axios.post(`/products/upload-images`, formData);
      dispatch({ type: UPLOAD_IMAGE, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function deleteProduct(id: string): any {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: DELETE_PRODUCT, payload: true });
      const res = await axios.delete(`/products/delete-product/${id}`);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
}

export function getProduct(sku: string): any {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_PRODUCT, payload: true });
      const res = await axios.get(`/products/get-product/${sku}`);
      console.log('res :', res);
      dispatch({ type: GET_PRODUCT, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
}
