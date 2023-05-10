import { PUBLIC_API_URL } from '$env/static/public';

export const loadOntPort = async (ont: any) => {
    let url = `${PUBLIC_API_URL}/olt/frame/${ont.id}/ports`;

    let response = await fetch(url);
    let data = await response.json();

    return data;
};