/**
 * @description 路由信息
 */

export default [
    {
        name: "threeScene",
        path: "/",
        component: () => import("@/views/index"),
        meta: {
            name: "首页",
        },
    },
]
