function Content (props={arr:[]}){
    const render = (props) =>{
        if(props.type){
            return props.arr!=undefined?props.arr.map((item,index)=>{
                return (
                    // jsx 允许我们使用点组件-->对象点属性的这种方式
                    // 前提是，这个属性值必须是原生html 标签或者是我们自定义的名字
                    // hoc 模式：传入的props 进行加工，然后放回一个行的组件
                    <props.type {...props} key={index} style={item.style}>
                        {item.text||item}
                    </props.type>
                )
            }):(
                <props.type {...props} style={props.style}>
                    {props.children}
                </props.type>
            )
           
        }else{
            return props.arr!=undefined?props.arr.map((item,index)=>{
                return (
                    <p {...props} key={index} style={item.style}>
                        {item.text||item}
                    </p>
                )
            }):(
                <p {...props} style={props.style}>
                    {props.children}
                </p>
            )
        };
    };
    
    return (
        render(props)
    )
    
}
