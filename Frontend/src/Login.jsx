import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Login.css'



 function Login () {
  const navigate = useNavigate()
  const onFinish = values => {
    console.log('Received values of form: ', values)
    const {username, password} = values
    axios.post('http://localhost:3001/validatePassword', {username, password})
    .then(res => {
      if(res.data.validation){
        alert('Helyes jelszó és felhasználónév')
        navigate('/App')
      }
      else{
        alert('Helytelen jelszó és felhasználónév')
      }
    })
  }

  return(
    <div className="Login">
      <div>
        <h1>LiquidMasters</h1>
        <h2>Bejelentkezés</h2>
      </div>
  <Form onFinish={onFinish}>
  <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Bejelentkezés
          </Button>
        </Form.Item>
  </Form>
</div>
  )
}


export default Login