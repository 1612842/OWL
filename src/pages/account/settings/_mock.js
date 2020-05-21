// eslint-disable-next-line import/no-extraneous-dependencies
import city from './geographic/city.json';
import province from './geographic/province.json';

function getProvince(_, res) {
  return res.json(province);
}

function getCity(req, res) {
  return res.json(city[req.params.province]);
} // 代码中会兼容本地 service mock 以及部署站点的静态数据

export default {
  // 支持值为 Object 和 Array
  'GET  /api/currentUser': {
        name: 'Serati Ma',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: 'Hundreds of rivers, there is capacity but greatness',
        title: 'Interaction Expert',
        group: 'Ant Financial Services-XYZ Business Group-XX Platform Department-XY Technology Department-UED',
        tags: [
          {
            key: '0',
            label: 'Very thoughtful',
          },
          {
            key: '1',
            label: 'Focus on design',
          },
          {
            key: '2',
            label: 'Spicy ~',
          },
          {
            key: '3',
            label: 'Long legs',
          },
          {
            key: '4',
            label: 'Chuanmeizi',
          },
          {
            key: '5',
            label: 'Haina River',
          },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',
        geographic: {
          province: {
            label: 'Zhejiang Province',
            key: '330000',
          },
          city: {
            label: 'Hangzhou City',
            key: '330100',
          },
        },
        address: 'No. 77 Gongzhuan Road, West Lake District',
        phone: '0752-268888888',
      },
  'GET  /api/geographic/province': getProvince,
  'GET  /api/geographic/city/:province': getCity,
};
