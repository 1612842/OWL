const advancedOperation1 = [{
    key: 'op1',
    type: 'Subscription relationship is in effect',
    name: 'Qu Lili',
    status: 'agree',
    updatedAt: '2017-10-03 19:23:12',
    memo: '-',
  },
  {
    key: 'op2',
    type: 'Financial review',
    name: '付 小小',
    status: 'reject',
    updatedAt: '2017-10-03 19:23:12',
    memo: 'Reject reason',
  },
  {
    key: 'op3',
    type: 'Department first review',
    name: '周 毛毛',
    status: 'agree',
    updatedAt: '2017-10-03 19:23:12',
    memo: '-',
  },
  {
    key: 'op4',
    type: 'Submit order',
    name: 'Lin Dongdong',
    status: 'agree',
    updatedAt: '2017-10-03 19:23:12',
    memo: 'Excellent',
  },
  {
    key: 'op5',
    type: 'Create order',
    name: 'Khantooth',
    status: 'agree',
    updatedAt: '2017-10-03 19:23:12',
    memo: '-',
  },
];
const advancedOperation2 = [{
  key: 'op1',
  type: 'Subscription relationship is in effect',
  name: 'Qu Lili',
  status: 'agree',
  updatedAt: '2017-10-03 19:23:12',
  memo: '-',
}, ];
const advancedOperation3 = [{
  key: 'op1',
  type: 'Create order',
  name: 'Khantooth',
  status: 'agree',
  updatedAt: '2017-10-03 19:23:12',
  memo: '-',
}, ];
const getProfileAdvancedData = {
  advancedOperation1,
  advancedOperation2,
  advancedOperation3,
};
export default {
  'GET /api/profile/advanced': getProfileAdvancedData,
};
