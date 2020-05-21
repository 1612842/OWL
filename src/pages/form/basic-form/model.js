import { message } from 'antd';
import { fakeSubmitForm } from './service';

const Model = {
  namespace: 'formAndbasicForm',
  state: {},
  effects: {
    *submitRegularForm({ payload }, { call }) {
      yield call(fakeSubmitForm, payload);
      message.success('Submitted successfully');
    },
  },
};
export default Model;
