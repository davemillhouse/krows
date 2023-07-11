import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const actions = {
    search: async ({ request }) => {

        const formData = await request.formData();
        const daysToSearch = formData.get('daysToSearch');
        console.log(daysToSearch);

        let startDate = addDays(new Date(), -daysToSearch).toJSON();
        let url = 'ordersbyday?IncludeOrderCount=true&IncludeSoldSupplierVoucherCount=true&IncludeSoldTicketCount=true&IncludePaymentAmountTotal=true&fromCompletedDateUtc=' + startDate

        const res = await fetch(BASE_API_URL + url)
        const data = await res.json();

        return data;
    }
};

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export const load = async () => {

    const fetchSessions = async () => {
        let startDate = new Date().toJSON();
        let sessionUrl = 'sessions?fromDateTimeUtc=' + startDate + '&pageSize=7'
        const res = await fetch(BASE_API_URL + sessionUrl)
        const data = await res.json();

        return data;
    }

    const fetchOrders = async () => {
        let startDate = new Date().toJSON();
        let sessionUrl = 'orders?toCompletedDateUtc=' + startDate + '&pageSize=9'
        const res = await fetch(BASE_API_URL + sessionUrl)
        const data = await res.json();

        return data;
    }

    const fetchOrdersByDay = async () => {
        let startDate = addDays(new Date(), -7).toJSON();
        let url = 'ordersbyday?IncludeOrderCount=true&IncludeSoldSupplierVoucherCount=true&IncludeSoldTicketCount=true&IncludePaymentAmountTotal=true&fromCompletedDateUtc=' + startDate


        const res = await fetch(BASE_API_URL + url)
        const data = await res.json();

        return data;
    }

    return {
        sessions: fetchSessions(),
        orders: fetchOrders(),
        ordersByDay: fetchOrdersByDay()
    }
}

