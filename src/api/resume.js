import request from "../utils/request";

export async function getResume() {
    return request(
        "/resume",
        {},
        "GET",
        true
    );
}

export function getRes() {
    return request(
        "/resume/tes",
    );
}