import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const load = async () => {

    const fetchDiscountCode = async () => {
        const res = await fetch(BASE_API_URL + 'discountcodes/-1')
        const data = await res.json()
        return data;
    }

    const fetchDiscountCodes = async () => {
        const res = await fetch(BASE_API_URL + 'discountcodes')
        const data = await res.json()
        return data;
    }

    const fetchDataByDay = async () => {
        let startDate = addDays(new Date(), -7).toJSON();
        let url = 'ordersbyday?IncludeSoldDiscountCodeTotal=true&fromCompletedDateUtc=' + startDate

        const res = await fetch(BASE_API_URL + url)
        const data = await res.json();

        return data;
    }

    const fetchTopSellers = async () => {
        let startDate = addDays(new Date(), -7).toJSON();
        let url = 'soldDiscountCodes/amountSold'

        const res = await fetch(BASE_API_URL + url)
        const data = await res.json();

        return data;
    }

    return {
        discountCode: fetchDiscountCode(),
        discountCodes: fetchDiscountCodes(),
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

        let discountCode = await getDiscountCodeFromForm(-1, await request.formData());

        const res = await fetch(BASE_API_URL + 'discountcode', {
            method: 'POST',
            body: JSON.stringify(discountCode),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return { success: true };
    },

    update: async ({ cookies, request }) => {

        const formData = await request.formData();
        
        let discountCode = await getDiscountCodeFromForm(formData.get('id'), formData);

        const res = await fetch(BASE_API_URL + 'discountcode', {
            method: 'PUT',
            body: JSON.stringify(discountCode),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return { success: true };
    }
};

async function fetchDiscountCode(discountCodeId) {
    const res = await fetch(BASE_API_URL + 'discountcode/' + discountCodeId)
    const data = await res.json()

    console.log("data:" + data)
    return data;
}

async function getDiscountCodeFromForm(discountCodeId, formData) {
    console.log("formData:" + formData)
    console.log("id: " + discountCodeId)
    let discountCode = await fetchDiscountCode(discountCodeId);
    console.log("dbdiscountCode:" + discountCode)
    discountCode.name = formData.get('name');
    discountCode.description = formData.get('description');
    return discountCode;
}


