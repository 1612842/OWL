// eslint-disable-next-line import/no-extraneous-dependencies
const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];
const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  'It ’s an inner thing, they can’t reach it, they can’t touch it.',
  'Hope is a good thing, maybe the best, good things will not die',
  'Life is like a box of chocolates, the results are often unexpected',
  'There are so many taverns in the town, but she just walked into my tavern',
  'At that time, I only wanted to think about what I wanted and never wanted to own',
];
const user = [
  'Fu Xiaoxiao',
    'Qu Lili',
    'Lin Dongdong',
    'Zhou Xingxing',
    'Wu Jiahao',
    'Zhu Bi right',
    'Fish sauce',
    'Le Brother',
    'Tan Xiaoyi',
    'Zhongni',
];

function fakeList(count) {
  const list = [];

  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3],
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      subDescription: desc[i % 5],
      description:
        'In the R & D process of mid-stage products, different design specifications and implementation methods will appear, but there are often many similar pages and components. These similar components will be separated into a set of standard specifications.',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        'Paragraph: Ant Financial Design Platform ant.design, with minimal workload, seamlessly connects to Ant Financials ecology, and provides experience solutions that span design and development. Ant Financial Design Platform ant.design, with minimal workload, seamlessly connects to Ant Financials ecology, providing experience solutions that span design and development.',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: 'Qu Lili',
          id: 'member1',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: 'Wang Zhaojun',
          id: 'member2',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: 'Dong Nana',
          id: 'member3',
        },
      ],
    });
  }

  return list;
}

function getFakeList(req, res) {
  const params = req.query;
  const count = params.count * 1 || 5;
  const result = fakeList(count);
  return res.json(result);
}

export default {
  'GET  /api/fake_list': getFakeList,
  // 支持值为 Object 和 Array
  'GET  /api/currentUser': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: 'Be tolerant to diversity, tolerance is a virtue',
    title: 'Interaction expert',
    group: 'Ant Financial-XX business group-XY platform department-XY technology department-UED',
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
    notice: [
      {
        id: 'xxx1',
        title: titles[0],
        logo: avatars[0],
        description: 'It ’s an inner thing, they can’t reach it, they can’t touch it.',
        updatedAt: new Date(),
        member: 'Scientific brick moving group',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx2',
        title: titles [1],
        logo: avatars [1],
        description: 'Hope is a good thing, maybe the best, good things will not die out',
        updatedAt: new Date ('2017-07-24'),
        member: 'The whole group is Wu Yanzu',
        href: '',
        memberLink: '',
      }
      ,
      {
        id: 'xxx3',
        title: titles [2],
        logo: avatars [2],
        description: 'There are so many taverns in the town, but she just walked into my tavern',
        updatedAt: new Date (),
        member: 'Secondary 2 Girls Group',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx4',
        title: titles[3],
        logo: avatars[3],
        description: 'At that time, I only wanted to think about what I wanted and never wanted to own',
        updatedAt: new Date('2017-07-23'),
        member: 'Programmer daily',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx5',
        title: titles [4],
        logo: avatars [4],
        description: 'Winter is coming',
        updatedAt: new Date ('2017-07-23'),
        member: 'High Forced Design Sky Group',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx6',
        title: titles [5],
        logo: avatars [5],
        description: 'Life is like a box of chocolates, the results are often unexpected',
        updatedAt: new Date ('2017-07-23'),
        member: 'Trick you to learn computer',
        href: '',
        memberLink: '',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic:
    {
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
};
