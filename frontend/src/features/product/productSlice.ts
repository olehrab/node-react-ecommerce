import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";
import { Product } from "../../types/product";
import { STATUS } from "../../constants/Status";
import axiosConfig from "../../app/axiosConfig";

interface ProductState {
  products: Product[];
  product: Product | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  status: string;
}

const initialState: ProductState = {
  products: [],
  product: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  status: "",
};

export const getProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "products/getProduct",
  async (id: number, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCategory = createAsyncThunk(
  "products/getCategory",
  async (data: string, thunkAPI) => {
    try {
      return await productService.getCategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const searchProducts = createAsyncThunk(
  "products/search",
  async (query: string, thunkAPI) => {
    try {
      return await productService.searchProducts(query);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const searchProducts = async (query) => {
//   const response = await axiosConfig.get(`products/search?query=${query}`);
//   return response.data.result;
// };

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productReset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state: ProductState) => {
        state.isLoading = true;
        state.status = STATUS.LOADING;
      })
      .addCase(
        getProducts.fulfilled,
        (state: ProductState, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload;
          state.status = STATUS.IDLE;
        }
      )
      .addCase(getProducts.rejected, (state: ProductState) => {
        state.isLoading = false;
        state.isError = true;
        state.status = STATUS.ERROR;
        toast.error(state.status);
      })
      .addCase(getSingleProduct.pending, (state: ProductState) => {
        state.isLoading = true;
        state.status = STATUS.LOADING;
      })
      .addCase(
        getSingleProduct.fulfilled,
        (state: ProductState, action: PayloadAction<Product>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.product = action.payload;
          state.status = STATUS.IDLE;
        }
      )
      .addCase(getSingleProduct.rejected, (state: ProductState) => {
        state.isLoading = false;
        state.isError = true;
        state.status = STATUS.ERROR;
        toast.error(state.status);
      })
      .addCase(getCategory.pending, (state: ProductState) => {
        state.isLoading = true;
        state.status = STATUS.LOADING;
      })
      .addCase(
        getCategory.fulfilled,
        (state: ProductState, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload;
          state.status = STATUS.IDLE;
        }
      )
      .addCase(getCategory.rejected, (state: ProductState) => {
        state.isLoading = false;
        state.isError = true;
        state.status = STATUS.ERROR;
        toast.error(state.status);
      })
      .addCase(searchProducts.pending, (state: ProductState) => {
        state.isLoading = true;
        state.status = STATUS.LOADING;
      })
      .addCase(
        searchProducts.fulfilled,
        (state: ProductState, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload;
          state.status = STATUS.IDLE;
        }
      )
      .addCase(searchProducts.rejected, (state: ProductState) => {
        state.isLoading = false;
        state.isError = true;
        state.status = STATUS.ERROR;
        toast.error(state.status);
      });
  },
});

export const { productReset } = productSlice.actions;
export default productSlice.reducer;
