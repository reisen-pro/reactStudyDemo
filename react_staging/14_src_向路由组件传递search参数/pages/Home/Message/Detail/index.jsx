import {useLocation, useParams} from "react-router-dom";
import qs from 'query-string'

export function Detail() {
  const DetailData = [
    {
      id: '01',
      title: "第一篇博客文章",
      description: "Hello React"
    },
    {
      id: '02',
      title: "第二篇博客文章",
      description: "Hello React Router v6"
    },
    {
      id: '03',
      title: "第三篇博客文章",
      description: "Hello Vue"
    }
  ]
  /* v6使用 useLocation接收search参数 */
  const {search} = useLocation();
  console.log('useLocation:',useLocation());
  console.log('useParams:',useParams());
  // 处理参数 拿到id=01&title=消息1
  const {id} = qs.parse(search);
  const findResult = DetailData.find((detailObj) => {
    return detailObj.id === id;
  })
  return (
    <div>
      <li>ID:{id}</li>
      <li>TITLE:{findResult.title}</li>
      <li>CONTENT:{findResult.description}</li>
    </div>
  );
}
