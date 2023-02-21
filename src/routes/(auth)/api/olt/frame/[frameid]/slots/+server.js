import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private'


/**
 * @param {{ params: { frameid: string; }; }} d
 */
export async function GET({ params }) {
    let slotEndpoint = `${env.OLT_API_URL}/frame/${params.frameid}/slots`;
    const slotResponse = await fetch(slotEndpoint);
    const boards = await slotResponse.json();

    for (let i = 0; i < boards.total_board_count; i++) {
        let board = boards.board_list_output[i];
        let ponEndpoint = `${env.OLT_API_URL}/slot/${params.frameid}/${board.slot_id}/pon`;
        const ponResponse = await fetch(ponEndpoint);
        const ponData = await ponResponse.json();
        board.pon_ports = ponData.pon_ports;
        board.has_pon = ponData.total_pon_count > 0;
    }

    return json(boards);
}

