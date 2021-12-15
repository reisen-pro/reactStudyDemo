import React, {Component} from 'react';
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {

  state = {
    users: [],
    isFirst: true,// 是否为第一次打开页面
    isLoading: false,// 标识是否处于加载中
    err: ''// 请求存储相关错误信息
  } // 初始化状态

  // 更新App的state
  updateAppState = (users) => {
    this.setState(users)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    );
  }
}
