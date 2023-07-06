/*
 * @Author: yangshilin
 * @Date: 2023-07-04 13:16:59
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-04 13:16:59
 * @FilePath: src\api\resume.js
 * @Description: 请添加文件描述
 */
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

