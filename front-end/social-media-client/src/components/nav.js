import {Menu} from 'antd';
import{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './home';
import Post from './post';
import Login from './login';
import Account from './account';
import Register from './register';


function Nav(props) {
    return (
      <>
        <Router>
            <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Link to ='/'>
                    <Menu.Item key="1">Home</Menu.Item>
                </Link>
                <Link to='/login'>
                    <Menu.Item key="2">Login</Menu.Item>
                </Link>
                <Link to='/register'>
                    <Menu.Item key="3">Register</Menu.Item>
                </Link>
                <Link to ='/account'>
                    <Menu.Item key="4">Account</Menu.Item>   
                </Link>     
                </Menu>
            <Routes>
                <Route path ='/' element={<Home />}/>
                <Route path ='/account' element={<Account />}/>
                
                <Route path ='/post' >
                    <Route path=":id" element={<Post />}/>
                </Route>
                <Route path ='/login' element={<Login />}/>
                <Route path ='/register' element={<Register />}/>
        
            </Routes>
            
        </Router>
      </>
    );
}

export default Nav;
