const getNotices = (req, res) => {
  res.json([
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'You received 14 new weekly newspapers',
      datetime: '2017-08-09',
      type: 'notification',
    },
    {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: 'Your recommended Qu Ni Ni has passed the third round of interview',
      datetime: '2017-08-08',
      type: 'notification',
    },
    {
      id: '000000003',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
      title: 'This template can distinguish multiple notification types',
      datetime: '2017-08-07',
      read: true,
      type: 'notification',
    },
    {
      id: '000000004',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
      title: 'The icon on the left is used to distinguish different types',
      datetime: '2017-08-07',
      type: 'notification',
    },
    {
      id: '000000005',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'The content should not exceed two lines, it will be automatically truncated when it exceeds',
      datetime: '2017-08-07',
      type: 'notification',
    },
    {
      id: '000000006',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'Qu Lili commented on you',
      description: 'Description informationDescription informationDescription information',
      datetime: '2017-08-07',
      type: 'message',
      clickClose: true,
    },
    {
      id: '000000007',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'Zhu Biyou replied to you',
      description: 'This template is used to remind who has interacted with you, and put a picture of "who" on the left',
      datetime: '2017-08-07',
      type: 'message',
      clickClose: true,
    },
    {
      id: '000000008',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'title',
      description: 'This template is used to remind who has interacted with you, and put a picture of "who" on the left',
      datetime: '2017-08-07',
      type: 'message',
      clickClose: true,
    },
    {
      id: '000000009',
      title: 'mission name',
      description: 'The task needs to be started before 2017-01-12 20:00',
      extra: 'has not started',
      status: 'todo',
      type: 'event',
    },
    {
      id: '000000010',
      title: 'Third-party emergency code changes',
      description: 'Guan Lin submitted it on 2017-01-06, and must complete the code change task before 2017-01-07',
      extra: 'Expiry soon',
      status: 'urgent',
      type: 'event',
    },
    {
      id: '000000011',
      title: 'Information Security Exam',
      description: 'Assign Zhuer to complete the update and release before 2017-01-09',
      extra: '8 days',
      status: 'doing',
      type: 'event',
    },
    {
      id: '000000012',
      title: 'ABCD release',
      description: 'Guan Lin submitted it on 2017-01-06, and must complete the code change task before 2017-01-07',
      extra: 'processing',
      status: 'processing',
      type: 'event',
    },
  ]);
};

export default {
  'GET /api/notices': getNotices,
};