import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async action to fetch product data from API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://6457b6671a4c152cf9887b69.mockapi.io/api/vd1/Product');
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: { data: [], loading: false, error: null },
  reducers: {
    // Action to add a product to the store
    addProduct: (state, action) => {
      // Push a new product to the data array
      state.data.push({
        ...action.payload,
        id: Date.now().toString(), // Generate a unique ID for the product
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the addProduct action to be used in your AddProduct component
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;