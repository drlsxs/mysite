import request from "../utils/request";

export async function getResume() {
    return request(
        {
            url: "/resume",
            headers: {
                'Content-Type': 'application/octet-stream',
            },
        }
    );
}

