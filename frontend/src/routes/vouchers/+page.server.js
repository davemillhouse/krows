import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const load = async () => {

    const fetchVouchers = async () => {
        const res = await fetch(BASE_API_URL + 'suppliervouchers')
        const data = await res.json()
        return data;
    }

    const fetchDataByDay = async () => {
        let startDate = addDays(new Date(), -7).toJSON();
        let url = 'ordersbyday?IncludeSoldSupplierVoucherTotal=true&fromCompletedDateUtc=' + startDate

        const res = await fetch(BASE_API_URL + url)
        const data = await res.json();

        return data;
    }

    const fetchTopSellers = async () => {
        let startDate = addDays(new Date(), -7).toJSON();
        let url = 'soldsupplierVouchers/amountSold'

        const res = await fetch(BASE_API_URL + url)
        const data = await res.json();

        return data;
    }

    return {
        vouchers: fetchVouchers(),
        dataByDay: fetchDataByDay(),
        topSellers: fetchTopSellers()
    }
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
  
        const name = data.get('name');
        const description = data.get('description');

        const payload = JSON.stringify({ name, description });
        
        const res = await fetch(BASE_API_URL + 'suppliervouchers', {
            method: 'POST',
            body: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return { success: true };
    }
};

