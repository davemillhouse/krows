import { redirect } from '@sveltejs/kit';
import { invalidate } from '$app/navigation';
import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'


export const load = async (serverLoadEvent) => {

    const { fetch, params, url } = serverLoadEvent;
    const ss = url.searchParams.get('searchString');


    const fetchOrders = async () => {

        let searchString = '';
        if (ss != null) {
            searchString = '&searchString=' + ss;
        }
        let startDate = new Date().toJSON();
        let sessionUrl = 'orders?completedFromDateTimeUtc=' + startDate + '&pageSize=10' + searchString;
        const res = await fetch(BASE_API_URL + sessionUrl)
        const data = await res.json();

        return data;
    }

    const getHeaderText = async () => {

        let headerText = 'Recently placed';
        if (ss != null) {
            headerText = 'Search results'
        }

        return headerText;
    }

    const fetchRecentlyViewedOrders = async () => {
        let url = 'orders?recentlyViewed=5'
        const res = await fetch(BASE_API_URL + url)
        const data = await res.json();

        return data;
    }

    return {
        orders: fetchOrders(),
        recentlyViewedOrders: fetchRecentlyViewedOrders(),
        headerText: getHeaderText(),
    }
}

export const actions = {
    search: async ({ cookies, request }) => {
        const data = await request.formData();

        const searchString = data.get('searchString');

        throw redirect(303, '/orders/redirect/' + searchString);

        return { success: true };
    }
};
