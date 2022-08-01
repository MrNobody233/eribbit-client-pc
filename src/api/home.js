// 提供首页相关API函数

import request from "@/uilts/request";

/**
 * 获取品牌
 * @param {Integer} limit 品牌个数
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
    return request('/home/brand', 'get', {limit})
}

/**
 * 获取广告区域轮播图
 * @returns {*}
 */
export const findBanner = ((distributionSite = 1) => {
    return request('/home/banner', 'get', {distributionSite: distributionSite})
})

/**
 * 获取新鲜好物
 */

export const findNew = (limit = 4) => {
    return request('/home/new', 'get', {limit: limit})
}

/**
 *  获取热门推荐
 */
export const findHot = () => {
    return request('/home/hot', 'get')
}