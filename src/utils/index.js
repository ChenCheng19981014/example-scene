import Cookies from "js-cookie";


/**
 * @description 公用工具类
 */

/**
 * @description 获取token
 * @returns {String} token值 
 */
export const getToken = () => localStorage.getItem("token");

/**
 * @description 设置token
 * @param {String} token token值 
 */
export const setToken = (token = "") => localStorage.setItem("token", token);


/**
 * @description 获取本地cookie
 * @param {String} name  Cookie key
 * @returns {String} Cookie值
 */
export const getCookie = (name) => Cookies.get(name);


/**
 * @description 数字千分位转换
 * @param {Number|String} num 被转换的数字
 * @param {String} separator 千分位转换替代符
 * @returns {String} 数字千分位转换值
 */
export const numberTranslateThousandth = (num,separator = ",") => {
  num+=""
  return num.replace(/\d/g,function(){
    if((num.length-arguments[1]-1)%3===0&&num.length-1!==arguments[1]){
        return arguments[0]+separator
    }else{
        return arguments[0]
    }
})

}

/**
 * 16进制颜色转换rgb
 * @param {a} hex 16进制颜色 
 * @returns {{r:Number,g:Number,a:Number}|{bb:Number}} rgb颜色对象
 */

export const hexToRgb = (hex) => {

  //判断是否是字符串
  if (hex.constructor !== String) throw new Error("颜色必须是字符串")

  //替换#号
  hex = hex.replaceAll("#", "")

  if (hex.length !== 6) throw new Error("参数不合法，请输入六位的hex颜色")

  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  }

}

