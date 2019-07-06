class Footer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return (
            // 在react里面如果在实际的标签中使用js 要使用对象包起来
            // React.Fragment 解决组件与组相邻的报错和多余的div
            <React.Fragment>
            {
                // this.props.children 是隐式渲染子元素
            }
            {
                //this.props.children
            }
            {
                // 显示渲染子元素 reacte 顶级
                React.Children.map(this.props.children,(item,index)=>{
                    // React.cloneElement() 顶级API 用来克隆一个元素
                    /*
                         React.cloneElement(el,props,child)
                         第一个参数是元素，也可以是react元素，也可以是原生dom元素
                         第二个参数是属性，也就是Props
                         第三个参数可选，一般增加节点
                    */ 
                    console.log(item)
                    const dom = React.cloneElement(item,{
                        key:999,
                        text:'我是新的',
                        style:{color:'red'},
                        onClick:()=>{
                            console.log(index)
                        }
                    })
                    console.log(dom)

                    return  dom
                })
            }
            </React.Fragment>

        )
    }
}