module.exports = {
    lintOnSave: false,
    publicPath: process.env.VUE_APP_BASE_ASSETS,
    // assetsDir: 'static',
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/design/var.scss";`,
            }
        }
    },
    devServer:{
        open:true,
        port:80
        // proxy:{
            // "/api":{
                // target:'http://36.154.242.166:19388',
                // pathRewrite: { "^/api": "" }, 
                // ws: true, 
                // changeOrigin: true 
            // }
        // }
    }
}

