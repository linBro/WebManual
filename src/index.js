import _ from 'lodash';
import './style.css';
import img from "./icon1.png";
import Data from './data.xml';
import Notes from './data.csv';
import printMe from "./print";

function component() {
    const element = document.createElement('div');
  
    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们已经存在的 div 中。
    const myIcon = new Image();
    myIcon.src = img;
    element.appendChild(myIcon);
    
    console.log(Data);
    console.log(Notes);
  
    return element;
  }
  
  document.body.appendChild(component());

  printMe();


  //https://webpack.docschina.org/guides/asset-management/