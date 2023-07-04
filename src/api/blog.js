/*
 * @Author: yangshilin
 * @Date: 2023-05-18 10:27:17
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-05-18 10:27:17
 * @FilePath: src\api\blog.js
 * @Description: 请添加文件描述
 */
import request from "../utils/request";

export async function getBlog(params,data) {
    return request(
        {
            url:"/blog/list",
            method: "post",
            params: params,
            data: data,
        }
    );
}

