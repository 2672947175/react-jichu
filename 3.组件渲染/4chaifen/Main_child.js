 // 2.1 内容区里的子组件
 function Child(props={}) {
    return (
        React.createElement('div',{className:props.class},props.content)
    )
}