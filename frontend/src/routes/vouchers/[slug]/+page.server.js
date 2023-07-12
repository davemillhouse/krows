import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

let voucherId;

export const load = async ({params}) => {

    voucherId = params.slug;

    const fetchProducts = async () => {
        const res = await fetch(BASE_API_URL + 'products')
        const data = await res.json();
        return data;
    }

    return {
        products: fetchProducts()
    }
}


