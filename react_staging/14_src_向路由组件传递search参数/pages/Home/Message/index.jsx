import React from 'react';
import {Detail} from "./Detail";
import {Link, Route, Routes} from "react-router-dom";


export function Message() {
  const state = {
    messageArr: [
      {id: '01', title: '消息1'},
      {id: '02', title: '消息2'},
      {id: '03', title: '消息3'},
    ]
  }
  const {messageArr} = state
  return (
    <ul>
      {
        messageArr.map((msgObj) => {
          return (
            <li key={msgObj.id}>
              {/* 向路由组件传递params参数 */}
              {/*<Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>*/}

              {/* 向路由组件传递search参数 */}
              <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
            </li>
          )
        })
      }
      <hr/>
      <Routes>
        {/* 声明接收params参数 */}
        {/*<Route path="detail/:id/:title" element={<Detail/>}/>*/}

        {/* 声明接受search参数 */}
        <Route path="detail/*" element={<Detail/>}/>
      </Routes>
    </ul>
  );
}
