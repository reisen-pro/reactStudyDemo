import React, {Component} from 'react';
import {Button, DatePicker} from "antd";
import {WechatOutlined, SearchOutlined} from '@ant-design/icons';
import moment from 'moment';

const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD';

class App extends Component {
  render() {
    function onChange(date, dateString) {
      console.log(date, dateString);
    }

    return (
      <div>
        App...
        <Button type="ghost">按钮一</Button>
        <Button>按钮二</Button>
        <WechatOutlined/>
        <Button type="primary" icon={<SearchOutlined/>}>
          Search
        </Button>
        <DatePicker onChange={onChange}/>

        <RangePicker
          defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
          format={dateFormat}
        />
      </div>
    );
  }
}

export default App;
