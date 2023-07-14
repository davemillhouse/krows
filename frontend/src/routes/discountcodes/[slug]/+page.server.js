import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const load = async ({params}) => {

    const discountCode = await getDiscountCode();

    const fetchDiscountCode = async () => {
        return discountCode;
    }

    const fetchLinkedProducts = async () => {
        const res = await fetch(BASE_API_URL + 'products?ids=' + discountCode.linkedProductIds)
        const data = await res.json();
        return data;
    }

    const fetchUnlinkedProducts = async () => {
        const res = await fetch(BASE_API_URL + 'products?exceptids=' + discountCode.linkedProductIds)
        const data = await res.json();
        return data;
    }

    async function getDiscountCode () {
        const res = await fetch(BASE_API_URL + 'discountcodes/' + params.slug)
        const data = await res.json()
        return data;
    }

    return {
        discountCode: fetchDiscountCode(),
        unlinkedProducts: fetchUnlinkedProducts(),
        linkedProducts: fetchLinkedProducts(),
    }
}


