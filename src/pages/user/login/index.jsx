import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert, Checkbox } from 'antd';
import React, { useState } from 'react';
import { Link, connect } from 'umi';
import styles from './style.less';
import LoginFrom from './components/Login';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginFrom;

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = props => {
  const { userAndlogin = {}, submitting } = props;
  const { status, type: loginType } = userAndlogin;
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState('account');

  const handleSubmit = values => {
    const { dispatch } = props;
    dispatch({
      type: 'userAndlogin/login',
      payload: { ...values, type },
    });
  };

  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="Account password login">
          {status === 'error' && loginType === 'account' && !submitting && (
            <LoginMessage content="Wrong account or password (admin/ant.design）" />
          )}

          <UserName
            name="userName"
            placeholder="username: admin or user"
            rules={[
              {
                required: true,
                message: 'please enter user name!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="password: ant.design"
            rules={[
              {
                required: true,
                message: 'Please enter the password!',
              },
            ]}
          />
        </Tab>
        <Tab key="mobile" tab="Phone number login">
          {status === 'error' && loginType === 'mobile' && !submitting && (
            <LoginMessage content="Verification code error" />
          )}
          <Mobile
            name="mobile"
            placeholder="phone number"
            rules={[
              {
                required: true,
                message: 'Please enter phone number!',
              },
              {
                pattern: /^1\d{10}$/,
                message: 'Malformed phone number!',
              },
            ]}
          />
          <Captcha
            name="captcha"
            placeholder="Captcha"
            countDown={120}
            getCaptchaButtonText=""
            getCaptchaSecondText="second"
            rules={[
              {
                required: true,
                message: 'please enter verification code!',
              },
            ]}
          />
        </Tab>
        <div>
          <Checkbox checked={autoLogin} onChange={e => setAutoLogin(e.target.checked)}>
          auto login
          </Checkbox>
          <a
            style={{
              float: 'right',
            }}
          >
            forget password
          </a>
        </div>
        <Submit loading={submitting}>log in</Submit>
        <div className={styles.other}>
        Other login methods
          <AlipayCircleOutlined className={styles.icon} />
          <TaobaoCircleOutlined className={styles.icon} />
          <WeiboCircleOutlined className={styles.icon} />
          <Link className={styles.register} to="/user/register">
          register account
          </Link>
        </div>
      </LoginFrom>
    </div>
  );
};

export default connect(({ userAndlogin, loading }) => ({
  userAndlogin,
  submitting: loading.effects['userAndlogin/login'],
}))(Login);
