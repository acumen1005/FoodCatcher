import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const defaultFoods = [
  '馄饨', '拉面', '烩面', '热干面', '刀削面',
   '油泼面', '炸酱面', '炒面', '米线', '土豆粉',
    '螺狮粉', '凉皮儿', '麻辣烫', '肉夹馍', '羊肉汤',
     '炒饭', '卤肉饭', '烤肉饭', '黄焖鸡米饭', '驴肉火烧',
      '川菜', '火锅', '烤串', '披萨', '烤鸭', '汉堡', '炸鸡',
       '沙县小吃', '粥', '生煎', '肯德基', '麦当劳', '煎饼果子',
        '花甲粉', '小龙虾', '串串', '韭菜盒子', '麻辣拌', '煲仔饭',
         '烧鸭饭', '意大利海鲜饭', '老鸭粉丝汤', '干锅牛蛙', '鱼香肉丝盖浇饭',
          '牛肉米线', '撒尿牛丸', '潮汕牛肉面', '咖喱牛腩盖浇饭', '辣炒腰花面',
           '意面', '法式大餐', '日式料理', '酸辣粉', '酸菜鱼', '糖醋排骨', '椒盐排条',
            '葱爆大虾', '麻辣香锅', '大盘鸡', '凉粉', '韩式石锅拌饭', '部队锅', '水煎肉', '水盆羊肉', '火鸡面', '韩式炒年糕', '蛋包饭',
             '芝士猪排蛋包饭', '蒸鸡', '胡辣汤', '炭烤大鱿鱼', '烤冷面', '韩式凉面', '花甲', '蛏子', '八爪鱼', '梅干菜饼'
]

function FoodContent(props) {
  const items = props.items;
  const content = items.map(function (item) {
    const spanStyle = {
      top: item.top,
      left: item.left, 
      fontSize: item.size + "px",
      color: "rgba(0,0,0," + Math.random() + ")",
    };
    return (
      <span className="food" style={spanStyle}>{item.food}</span>
    ) 
  });
  return (
    <div id="content">{content}</div>
  )
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      run: false,
      items: [],
      selectedFood: null
    };
  }

  componentDidMount() {
  }

  handleStart() {
    if (!this.state.run) {
      this.timer = setInterval(() => {
        var list = defaultFoods,
            windowHeight = window.innerHeight,
            windowWidth = window.innerWidth,
            r = Math.ceil(Math.random() * list.length),
            food = defaultFoods[r - 1]
  
        var rTop = Math.ceil(Math.random() * windowHeight),
            rLeft = Math.ceil(Math.random() * (windowWidth - 50)),
            rSize = Math.ceil(Math.random() * ((44 - 14) + 14));
        
        var items = this.state.items;
        items.push({
          'food': food,
          'top': rTop,
          'left': rLeft,
          'size': rSize
        })
        this.setState({ 
          items: items,
          selectedFood: food
        });
      }, 60);
      this.setState({ run: true });
    } else {
      this.state.items = [];
      clearInterval(this.timer);
      this.setState({ run: false })
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>这顿吃什么?</h1>
          <h2 id='selected'>{this.state.selectedFood}</h2>
          <button id='start' onClick={this.handleStart.bind(this)}>
            {this.state.run ? '停止' : (this.state.selectedFood === null ? '开始' : '换一个')}
          </button>
        </div>
        <FoodContent items={this.state.items} />
      </div>
    );
  }
}

export default App;
