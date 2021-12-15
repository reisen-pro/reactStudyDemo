import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import axios from "axios";

export default class Search extends Component {
  search = () => {
    // 获取用户的输入
    const {keyWordElement: {value: keyword}} = this

    // 发布消息
    PubSub.publish('reisen', {isFirst: false, isLoading: true})

    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      response => {
        // 请求成功后通知App更新状态
        PubSub.publish('reisen', {isLoading: false, users: response.data.items})
      },
      error => {
        // 请求失败后通知App更新状态
        PubSub.publish('reisen', {isLoading: false, err: error.message})
      }
    )
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索github用户</h3>
          <div>
            <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
            <button onClick={this.search}>搜索</button>
          </div>
        </section>
      </div>
    );
  }
}
