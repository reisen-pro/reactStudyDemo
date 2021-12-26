import React from 'react';
import {useNavigate} from "react-router-dom";

export function News() {
  const navigate = useNavigate();

  const goto = () => {
    setTimeout(() => {
      console.log('123')
      // 这边使用navigate是跳转news下面的/home/message
      // useNavigate()需要定义在最上方才能实现这个跳转。
      window.location = '/home/message'
    }, 3000)
  }


  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
      {
        goto()
      }
    </ul>
  )
}
