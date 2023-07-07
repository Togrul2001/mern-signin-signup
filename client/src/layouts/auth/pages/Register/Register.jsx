import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Register = () => (
  <div className='flex justify-center h-screen items-center' id='register'>
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
    <Form.Item name={'fullname'} label="Fullname" rules={[{ type: 'text' },{
          required: false
        }]}>
      <Input />
    </Form.Item>
    <Form.Item name={'email'} label="Email" rules={[{ type: 'email' },{
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

    <Form.Item
      label="Repassword"
      name="repassword"
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
          Register
        </Button>
        <Link to={'/auth/login'}>
          <Button type="link">
          Login
        </Button>
        </Link>
      </div>
    </Form.Item>
  </Form>
  </div>
);
export default Register;