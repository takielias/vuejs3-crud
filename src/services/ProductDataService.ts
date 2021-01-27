// import api from './api'
import { computed, inject, reactive, toRefs, watch } from 'vue'
import {
  useApi
} from "../utils/api";

interface Product {
  title ? : string;
  description ? : string;
  price ? : string;
  image ? : string;
}

export const useAuth = () => {
    const setProduct = (payload: Product): void => {


    }

    return {
      setProduct,
    }

}