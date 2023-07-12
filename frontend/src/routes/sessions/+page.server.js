import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const load = async () => {

    const fetchSession = async () => {
        const res = await fetch(BASE_API_URL + 'sessions/-1')
        const data = await res.json()
        return data;
    }

    const fetchSessions = async () => {
        const res = await fetch(BASE_API_URL + 'sessions')
        const data = await res.json()
        return data;
    }

    return {
        session: fetchSession(),
        sessions: fetchSessions()
    }
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export const actions = {

    create: async ({ cookies, request }) => {

        let session = await getSessionFromForm(-1, await request.formData());

        const res = await fetch(BASE_API_URL + 'sessions', {
            method: 'POST',
            body: JSON.stringify(session),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return { success: true };
    },

    update: async ({ cookies, request }) => {

        const formData = await request.formData();
        
        let session = await getSessionFromForm(formData.get('id'), formData);

        const res = await fetch(BASE_API_URL + 'sessions', {
            method: 'PUT',
            body: JSON.stringify(session),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return { success: true };
    }
};

async function fetchSession(sessionId) {
    const res = await fetch(BASE_API_URL + 'sessions/' + sessionId)
    const data = await res.json()
    return data;
}

async function getSessionFromForm(sessionId, formData) {
    let session = await fetchSession(sessionId);
    session.capacity = formData.get('capacity');
    return session;
}


