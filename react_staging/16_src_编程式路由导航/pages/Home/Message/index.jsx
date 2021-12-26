import React from 'react';
import {Detail} from "./Detail";
import {Link, Route, Routes, useNavigate} from "react-router-dom";

function ReplaceShow(props) {
  // 拿到历史记录
  const navigate = useNavigate();
  // 拿到跳转路径
  const url = props.to;
  // 拿到state
  const state = props.state

  function handleClick(url, state) {
    navigate(url, {state: state, replace: true})
  }

  return <button onClick={() => handleClick(url, state)} className={'btn btn-default'}>replace查看</button>
}

function PushShow(props) {
  // 拿到历史记录
  const navigate = useNavigate();
  const url = props.to;
  const state = props.state

  function handleClick(url) {
    navigate(url, {state: state})
  }

  return <button onClick={() => handleClick(url)} className={'btn btn-default'}>push查看</button>
}

function Back() {
  const navigate = useNavigate();

  function toBack() {
    navigate(-1)
  }

  return <button onClick={toBack}>回退</button>
}

function Forward() {
  const navigate = useNavigate();

  function toForward() {
    navigate(1)
  }

  return <button onClick={toForward}>前进</button>
}

function Go() {
  const navigate = useNavigate();

  function toGo() {
    navigate(2)
  }

  return <button onClick={toGo}>Go</button>
}

export function Message() {
  const state = {
    messageArr: [
      {id: '01', title: '消息1'},
      {id: '02', title: '消息2'},
      {id: '03', title: '消息3'},
    ]
  }


  const {messageArr} = state;
  return (
    <ul>
      {
        messageArr.map((msgObj) => {
          return (
            <li key={msgObj.id}>
              {/* 向路由组件传递params参数 */}
              {/*<Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>*/}

              {/* 向路由组件传递search参数 */}
              {/*<Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>*/}

              {/* 向路由组件传递state参数 */}
              {/* replace模式 */}
              <Link to={"detail"} state={{id: msgObj.id, title: msgObj.title}}>{msgObj.title}</Link>
              &nbsp;
              <PushShow to={`detail/${msgObj.id}/${msgObj.title}`} state={{id: msgObj.id, title: msgObj.title}}/>
              &nbsp;
              <ReplaceShow to={`detail/${msgObj.id}/${msgObj.title}`} state={{id: msgObj.id, title: msgObj.title}}/>
            </li>
          )
        })
      }
      <hr/>
      <Routes>
        {/* 声明接收params参数 */}
        {/*<Route path="detail/:id/:title" element={<Detail/>}/>*/}

        {/* 声明接受search参数，无需声明接收，正常注册即可 */}
        {/*<Route path="detail/*" element={<Detail/>}/>*/}

        {/* 声明接受state参数，无需声明接收，正常注册即可 */}
        <Route path="detail/*" element={<Detail/>}/>
      </Routes>
      <Back/>&nbsp;
      <Forward/>&nbsp;
      <Go/>
    </ul>
  )
}
