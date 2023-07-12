import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const load = async () => {

    const fetchVoucher = async () => {
        const res = await fetch(BASE_API_URL + 'suppliervouchers/-1')
        const data = await res.json()
        return data;
    }

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
        voucher: fetchVoucher(),
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

        let voucher = await getVoucherFromForm(-1, await request.formData());

        console.log("voucher come back:" + voucher)

        console.log(JSON.stringify(voucher))

        const res = await fetch(BASE_API_URL + 'suppliervouchers', {
            method: 'POST',
            body: JSON.stringify(voucher),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return { success: true };
    },

    update: async ({ cookies, request }) => {

        const formData = await request.formData()
        let voucher = await getVoucherFromForm(formData.get('id'), formData);


        const res = await fetch(BASE_API_URL + 'suppliervouchers', {
            method: 'PUT',
            body: JSON.stringify(voucher),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return { success: true };


    }
};

async function fetchSupplierVoucher(voucherId) {
    const res = await fetch(BASE_API_URL + 'suppliervouchers/' + voucherId)
    const data = await res.json()

    console.log("data:" + data)
    return data;
}

async function getVoucherFromForm(voucherId, formData) {
    console.log("formData:" + formData)
    console.log("id: " + voucherId)
    let voucher = await fetchSupplierVoucher(voucherId);
    console.log("dbvoucher:" + voucher)
    voucher.name = formData.get('name');
    voucher.description = formData.get('description');
    return voucher;
}


