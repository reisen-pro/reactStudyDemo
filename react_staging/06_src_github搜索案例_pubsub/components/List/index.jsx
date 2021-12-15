import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import './index.css';

export default class List extends Component {

  state = {
    users: [],
    isFirst: true,// 是否为第一次打开页面
    isLoading: false,// 标识是否处于加载中
    err: ''// 请求存储相关错误信息
  } // 初始化状态

  componentDidMount() {
    // 订阅消息
    this.token = PubSub.subscribe('reisen', (_, state) => {
      this.setState(state);
    })
  }

  componentWillMount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users, isFirst, isLoading, err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
            isLoading ? <h2>Loading......</h2> :
              err ? <h2 style={{color: 'red'}}>{err}</h2> :
                users.map(user => {
                  return (
                    <div key={user.id} className="card">
                      <a rel="noreferrer" href={user.html_url} target="_blank">
                        <img alt="head_portrait" src={user.avatar_url} style={{width: '100px'}}/>
                      </a>
                      <p className="card-text">{user.login}</p>
                    </div>
                  )
                })
        }
      </div>
    );
  }
}
