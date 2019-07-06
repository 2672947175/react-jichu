
    // 头部组件
    function Headerbox (props={}){
        // 无状态组件加ui组件，功能只有一个，就是开发纯dom 结构
        // {/*(e)=>this.hendleChange(e) 使用匿名函数*/}
    console.log(props.text)
        return <header>
                <input type="text" 
                value={props.text} 
                onChange={(e)=>props.hendleChange(e)}
                 />

                <button onClick={props.handleClick}>提交</button>
            </header>
    }