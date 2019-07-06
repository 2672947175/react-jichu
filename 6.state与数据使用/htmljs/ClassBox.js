   // class 容器组件,所有的方法和操作倒在这里
   class Header extends React.Component {
    constructor() {
        super()
        this.state={
            text:'',
            list:[]
        }
    }
    hendleChange=({target})=>{
        //e就是event对象 target 值得是元素自身
        // console.log(target.value)
        this.setState({
            text:target.value
        })
    }
    // 添加留言板消息到列表
    handleClick=()=>{
        if(this.state.text){
            this.setState({
                list:[[this.state.text],...this.state.list],
                text:''
            })
        }

    }
    removeClick=(idx)=>{
        this.setState({
            list:this.state.list.filter((item,index)=>index!=idx)
        })
    }

    render(){
        return <div>
                <Headerbox text={this.state.text} hendleChange={this.hendleChange} handleClick={this.handleClick} />
                <Main list={this.state.list} removeClick={this.removeClick} />
               
            </div>
    }
}