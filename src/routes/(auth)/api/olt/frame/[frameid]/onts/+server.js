import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private'


/**
 * @param {{ params: { frameid: string; }; }} d
 */
export async function GET({ params }) {
    let ontEndpoint = `${env.OLT_API_URL}/frame/${params.frameid}/ont`;
    const ontResponse = await fetch(ontEndpoint);
    const onts = await ontResponse.json();

    /**
     * @type {any[]}
     */
    const output = [];

    for(let key in onts.ont_lists) {
        for(let ontId in onts.ont_lists[key].onts) {
            let ont = onts.ont_lists[key].onts[ontId];
            ont.pon = key;
            ont.ont_id = ontId;
            ont.id = `${key}/${ontId}`;
            ont.services = serviceToArray(ont.services);
            output.push(ont);
        }
    }

    console.log(output);

    return json(output);
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