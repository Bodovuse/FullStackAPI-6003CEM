import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { status, json } from '../utilities/requestHandlers'
const {Header, Content, Footer} =Layout;

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
    }
    onFinish = (values)=>{
        console.log('Recieved values from login form: ',values);
        const { confirm, ...data } = values;
        fetch('http://localhost:3030/api/v1/users/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(status)
        .then(json)
        .then(data => {
            console.log(data);
            alert("user added")
        })
        .catch(errorResponse => {
            console.error(errorResponse);
            alert(`Error: ${errorResponse}`);
        });
    };

    render(){
    return(
        
        <Layout>
            <Content>
                
        <Form
        name="login"
        className='login-form'
        initialValues={{remember: true,}}
        onFinish={this.onFinish}>
            <Form.Item
            name="username"
            label = "Username"
            rules={[{required: true, message: 'Input your username',},]}>
                <Input  /> 
            </Form.Item>
            <Form.Item
            name="password"
            label = "password"
            rules={[{required: true, message: 'Input your password',},]} >
                <Input />
            </Form.Item>
            <Form.Item
            name="email"
            label = "email"
            rules={[{required: true, message: 'Input your email',},]}>
                <Input />
            </Form.Item>
            <Form.Item>
                
                <a className="login-form-forgot" href="">Forgot Password</a>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType='submit' className='login-form-button'>Log in</Button>
                Or <a href="">Register</a>
            </Form.Item>
        </Form>
        </Content>
        </Layout>
        
    );
};
};

export default Login;