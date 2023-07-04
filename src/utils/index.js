/*
 * @Author: yangshilin
 * @Date: 2023-05-18 10:17:40
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-05-18 10:19:26
 * @FilePath: src\utils\index.js
 * @Description: 请添加文件描述
 */
//日期工具
function DateUtils() {
    /**
     * 返回字符串 "yyyy-MM-dd HH:mm:ss"的日期字符串
     * @param date
     * @returns {string}
     * @constructor
     */
    function Date2Str(date) {
        const now = new Date(date);
        return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    }


    return{
        Date2Str,
    }

}

export {
    DateUtils
}
