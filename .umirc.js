// ref: https://umijs.org/config/
export default {
  history: 'hash',
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/about', component: '../pages/About' },
        { path: '/examples', component: '../pages/Examples' },
        { component: '../pages/404/index' },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true }, // 按需加载
        title: 'react-umi',
        dll: true,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  proxy: {
    '/api': {
      target: 'https://zuowen.api.juhe.cn',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
      secure: false, // 不进行证书验证
    },
  }
};
