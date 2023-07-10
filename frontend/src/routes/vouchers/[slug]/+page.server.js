import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const load = async () => {

    const fetchProducts = async () => {
        const res = await fetch(BASE_API_URL + 'products')
        const data = await res.json();
        return data;
    }

    return {
        products: fetchProducts(),
    }
}

export const actions = {
    update: async ({ cookies, request }) => {

        const formData = await request.formData();
  
        const name = formData.get('name');
        const description = formData.get('description');
        const id = formData.get('id');


        const payload = JSON.stringify(Object.fromEntries(formData.entries()));


    
        const res = await fetch(BASE_API_URL + 'suppliervouchers', {
            method: 'PUT',
            body: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        });



        return { success: true };
    }
};

