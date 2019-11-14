import mockjs from 'mockjs';
export default {
  '/api/user': (req, res) => {
    setTimeout(() => {
      res.send({
        name: 'yjg',
        sex: '女',
        mobile: '144****2222',
        address: 'hangzhou',
      });
    }, 2000);
  },
  '/api/examples': (req, res) => {
    //   添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(
      mockjs.mock({
        'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
      }),
    );
  },
};
