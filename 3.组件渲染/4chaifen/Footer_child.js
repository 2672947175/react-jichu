// 4.新添加一个footer组件
const {Component} = React
function Footer1(props={}) {
    return (
        // *默认克隆添加到这里的props 是浅层合并，需要我们处理成深层的
        React.createElement('li',{...props},props.text)
    )
}