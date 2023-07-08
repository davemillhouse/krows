import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'


export const actions = {
    create: async ({ cookies, request }) => {



        const res = await fetch(BASE_API_URL + 'teardown', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return { success: true };
    }
};

