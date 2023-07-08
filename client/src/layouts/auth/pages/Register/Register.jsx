import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AlertModal from '../../../components/AlertModal';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
function Register(){
  const [error, setError] = useState(false)
  const [alert, setAlert] = useState({})
  const navigate = useNavigate()
  const onFinish = async ({fullname, email, password, repassword}) => {
    if (password !== repassword) {
      setError(false)
      setError(true)
      return setAlert({type:"error", message:"Parollar eyni deyil"})
    }

    const body = {fullname,email,password}
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers:{
          'Content-Type':'application/json',
          'Origin':"http://localhost:3000/auth/register"
        },
        body: JSON.stringify(body),
      })
      if(!response.ok) {
        setError(false)
        setError(true)
        return setAlert({type:"error", message:"Bir xeta oldu"})
      }
      setError(true)
      setAlert({ type: "success", message: "Istifadeci ugurla yaradildi" }); //submitden sonra home sehifesine atir deye bu alert gorunmur. Nece ede bileremki home sehifesine burdakilari props kimi gonderim home sehifesinde gorunsun bu alert
      navigate("/home")

    } catch (error) {
      console.log("catcherror", error);
      setError(false)
      setError(true);
      setAlert({ type: "error", message: error });
    }
    

  };
  
  return (
    <>
    {error ? <AlertModal type={alert.type} message={alert.message}/> : null}
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
    </>
)};
export default Register;