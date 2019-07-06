  // 2.内容展示容器 React.Component 顶级API 
  class Main extends React.Component {
    // constructor & props 是es6 class 自带的
    constructor(props){
        super(props)
    }
    // render 方法是react封装的不可以该
    render(){
        return React.createElement('main',{className:'main'},[
            <Child key='1' class="leftBox" content='左边区域' />,
            <Child key='2' class="rightBox" content='右边区域' />,
        ])
    }
}
