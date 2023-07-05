import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const load = async () => {

    const fetchCategories = async () => {
        const res = await fetch(BASE_API_URL + 'categories')
        const data = await res.json()
        return data;
    }

    return {
        categories: fetchCategories(),
    }
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

        const name = data.get('name')

        const payload = JSON.stringify({ name });
        
        const res = await fetch(BASE_API_URL + '/categories', {
            method: 'POST',
            body: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        });
	}
};
