/*
 * @Author: yangshilin
 * @Date: 2023-07-04 13:18:57
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-04 13:19:12
 * @FilePath: src\utils\request.js
 * @Description: 请添加文件描述
 */
const BASE_URL = '/api';

function request({url, params, data, method = 'GET', headers}) {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
  };

  let fetchUrl = `${BASE_URL}${url}`;
  if (params) {
    fetchUrl += '?' + new URLSearchParams(params).toString();
  }
  if (data) {
    options.body = JSON.stringify(data);
  }
  return fetch(fetchUrl, options).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    if (options.headers["Content-Type"] == "application/octet-stream") {
      return response.blob();
    }
    return response.json();
  });
}

export default request;
