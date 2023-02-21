import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private'

export async function GET() {
    let api_endpoint = env.OLT_API_URL + '/frame';
    const response = await fetch(api_endpoint);
    const data = await response.json();

    return json(data);
}