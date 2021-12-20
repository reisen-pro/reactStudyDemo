import React, {Component} from 'react';
import {Route, Routes,Navigate} from 'react-router-dom';
import About from "./pages/About"; // Home是路由组件
import Home from "./pages/Home"; // About是路由组件
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/*<a className="list-group-item active" href="./about.html">About</a>
                 <a className="list-group-item" href="./home.html">Home</a>*/}

              {/* 在React中靠路由链接实现切换组件 编写路由链接*/}
              {/* v5中支持 activeClassname = "reisen" */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*注册路由*/}
                {/* 使用Routes替换曾经的Switch */}
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/home" element={<Home/>}/>
                  {/* v6 移除了 Redirect 组件，改用 Navigate 组件。 */}
                  <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
