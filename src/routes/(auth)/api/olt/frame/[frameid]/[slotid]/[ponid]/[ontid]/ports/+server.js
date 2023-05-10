import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private'


/**
 * @param {{ params: { frameid: string; slotid: string; ponid: string; ontid: string }; }} d
 */
export async function GET({ params }) {
    const ontId = `${params.frameid}/${params.slotid}/${params.ponid}/${params.ontid}`;
    let portsEndpoint = `${env.OLT_API_URL}/ont/${ontId}/ports`;
    const ontResponse = await fetch(portsEndpoint);
    const ports = await ontResponse.json();

    return json(ports);
}

/**
 * @param {{ [x: string]: any; }} services
 */
function serviceToArray(services) {
    let output = [];
    for(let key in services) {
        output.push(services[key]);
    }
    return output;
}