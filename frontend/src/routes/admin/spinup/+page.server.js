import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'


export const actions = {
    create: async ({ cookies, request }) => {

        const data = await request.formData();
  
        const products = data.get('products');
        const categories = data.get('categories');
        const voucherPayments = data.get('voucherPayments');
        const cashPayments = data.get('cashPayments');
        const stripePayments = data.get('stripePayments');
        const orders = data.get('orders');
        const bookings = data.get('bookings');
        const sessions = data.get('sessions');
        const merchandise = data.get('merchandise');
        const tickets = data.get('tickets');
        const soldTickets = data.get('soldTickets');
        const supplierVouchers = data.get('vouchers');
            const soldSupplierVouchers = data.get('soldVouchers');
        const soldMerchandise = data.get('soldMerchandise');
        const discountCodes = data.get('discountCodes');
        const soldDiscountCodes = data.get('soldDiscountCodes');

        const payload = JSON.stringify({ products, categories, voucherPayments, cashPayments, 
            stripePayments, orders, bookings, sessions, merchandise, tickets, soldTickets,supplierVouchers,soldSupplierVouchers,
            soldMerchandise, discountCodes, soldDiscountCodes });
    
        const res = await fetch(BASE_API_URL + 'spinup', {
            method: 'POST',
            body: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return { success: true };
    }
};

