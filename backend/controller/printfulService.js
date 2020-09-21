const axios = require('axios');

const printfulApi = axios.create({
    baseURL: 'https://api.printful.com',
    headers: {
        'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`
    }
});

module.exports = {
    getStoreProducts: async (storeId) => {
        try {
            const response = await printfulApi.get(`/store/products?store_id=${storeId}`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch store products from Printful: ' + error.message);
        }
    },

    getSingleProduct: async (productId, storeId) => {
        try {
            const response = await printfulApi.get(`/store/products/${productId}?store_id=${storeId}`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch product details from Printful: ' + error.message);
        }
    },

    createOrder: async (orderData) => {
        try {
            const response = await printfulApi.post('/orders', orderData);
            return response.data;
        } catch (error) {
            throw new Error('Failed to create order with Printful: ' + error.message);
        }
    },

    listOrders: async () => {
        try {
            const response = await printfulApi.get('/orders');
            return response.data;
        } catch (error) {
            throw new Error('Failed to list orders from Printful: ' + error.message);
        }
    },

    getOrder: async (orderId) => {
        try {
            const response = await printfulApi.get(`/orders/${orderId}`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch order from Printful: ' + error.message);
        }
    },

    updateOrder: async (orderId, orderData) => {
        try {
            const response = await printfulApi.put(`/orders/${orderId}`, orderData);
            return response.data;
        } catch (error) {
            throw new Error('Failed to update order with Printful: ' + error.message);
        }
    },

    deleteOrder: async (orderId) => {
        try {
            const response = await printfulApi.delete(`/orders/${orderId}`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to delete order from Printful: ' + error.message);
        }
    }
};
