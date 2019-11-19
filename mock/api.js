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
  // '/api/zuowen/typeList': (req, res) => {
  //   res.send([
  //     {
  //       name: '看图',
  //       id: 34,
  //     },
  //     {
  //       name: '游记',
  //       id: 31,
  //     },
  //     {
  //       name: '叙事',
  //       id: 12,
  //     },
  //     {
  //       name: '其他',
  //       id: 40,
  //     },
  //     {
  //       name: '状物',
  //       id: 14,
  //     },
  //     {
  //       name: '诗歌',
  //       id: 29,
  //     },
  //     {
  //       name: '写人',
  //       id: 11,
  //     },
  //     {
  //       name: '写景',
  //       id: 13,
  //     },
  //     {
  //       name: '童话',
  //       id: 25,
  //     },
  //     {
  //       name: '散文',
  //       id: 26,
  //     },
  //     {
  //       name: '议论文',
  //       id: 15,
  //     },
  //     {
  //       name: '读后感',
  //       id: 21,
  //     },
  //     {
  //       name: '日记',
  //       id: 18,
  //     },
  //     {
  //       name: '寓言',
  //       id: 28,
  //     },
  //     {
  //       name: '说明文',
  //       id: 16,
  //     },
  //     {
  //       name: '读书笔记',
  //       id: 32,
  //     },
  //     {
  //       name: '话题',
  //       id: 36,
  //     },
  //     {
  //       name: '想象',
  //       id: 35,
  //     },
  //     {
  //       name: '演讲稿',
  //       id: 22,
  //     },
  //     {
  //       name: '应用文',
  //       id: 50,
  //     },
  //     {
  //       name: '书信',
  //       id: 17,
  //     },
  //     {
  //       name: '小说',
  //       id: 24,
  //     },
  //   ]);
  // },
};
