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
  let spanStyle = {}
  const content = items.map(function (item) {
    spanStyle = {
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

  _getRandomNumber(baseNumber) {
    return Math.ceil(Math.random() * baseNumber)
  }

  handleStart() {
    if (!this.state.run) {
      this.timer = setInterval(() => {
        const list = defaultFoods,
            windowHeight = window.innerHeight,
            windowWidth = window.innerWidth,
            r = this._getRandomNumber(list.length),
            food = defaultFoods[r - 1]
  
        const rTop = this._getRandomNumber(windowHeight),
            rLeft = this._getRandomNumber(windowWidth - 50),
            rSize = this._getRandomNumber((44 - 14) + 14);
        
        this.setState({ 
          items: [...items, {
            'food': food,
            'top': rTop,
            'left': rLeft,
            'size': rSize
          }],
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
