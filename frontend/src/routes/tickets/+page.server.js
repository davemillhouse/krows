import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const load = async () => {

    const fetchTickets = async () => {
        const res = await fetch(BASE_API_URL + 'tickets')
        const data = await res.json()
        return data;
    }

    const fetchDataByDay = async () => {
        let startDate = addDays(new Date(), -7).toJSON();
        let url = 'ordersbyday?IncludeSoldTicketTotal=true&fromCompletedDateUtc=' + startDate

        const res = await fetch(BASE_API_URL + url)
        const data = await res.json();

        return data;
    }

    const fetchTopSellers = async () => {
        let startDate = addDays(new Date(), -7).toJSON();
        let url = 'soldTickets/amountSold'

        const res = await fetch(BASE_API_URL + url)
        const data = await res.json();

        return data;
    }

    return {
        tickets: fetchTickets(),
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
        
        const res = await fetch(BASE_API_URL + 'tickets', {
            method: 'POST',
            body: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return { success: true };
    }
};

