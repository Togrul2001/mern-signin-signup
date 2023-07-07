import { Button, Checkbox, Form, Input } from 'antd';
import './Login.scss'
import { Link } from 'react-router-dom';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <div className='flex justify-center items-center' id='login'>
    <Form
    name="basic"
    layout='vertical'
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item name={'email'} label="Email" rules={[{ type: 'email' },         {
          required: true,
          message: 'Please input your email!',
        }]}>
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>


    <Form.Item>
      <div className='flex flex-row justify-between'>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Link to={'/auth/register'}>
          <Button type="link">
          Register
        </Button>
        </Link>
      </div>
    </Form.Item>
  </Form>
  </div>
);
export default Login;