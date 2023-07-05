import 'dotenv/config'
import { BASE_API_URL } from '$env/static/private'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const load = async () => {

    const fetchSessions = async () => {
        const res = await fetch(BASE_API_URL + 'sessions')
        const data = await res.json();
        
        return data;
    }

    return {
        sessions: fetchSessions(),
    }
}