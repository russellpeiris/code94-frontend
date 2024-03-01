import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ADD_PRODUCT,
  ADD_TO_FAVORITE,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  SEARCH,
  UPDATE_PRODUCT,
  UPLOAD_IMAGE,
} from './actionTypes';

const initialState = {
  allProducts: [],
  singleProduct: {},
  productImages: [],
  newProduct: {},
  favoriteProducts: [],
  search: [],
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        newProduct: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        singleProduct: action.payload,
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        productImages: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: action.payload,
      };
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favoriteProducts: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload,
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
      dispatch({ type: GET_PRODUCT, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function updateProduct(values: any): any {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UPDATE_PRODUCT, payload: true });
      const res = await axios.put(`/products/update-product/${values.sku}`, values);
      dispatch({ type: UPDATE_PRODUCT, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function addToFavorites(sku: string): any {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ADD_TO_FAVORITE, payload: true });
      const res = await axios.post(`/products/add-to-favorites/${sku}`);
      dispatch({ type: ADD_TO_FAVORITE, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function searchProduct(sku: string): any {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: SEARCH, payload: true });
      const res = await axios.get(`/products/search-product/${sku}`);
      dispatch({ type: SEARCH, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
}
