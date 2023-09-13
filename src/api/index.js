import axios from "@/lib/axios";

/**
 * 首页数据
 */
export const test = () => {
  return axios.request({
    url: "/test",
  });
};

