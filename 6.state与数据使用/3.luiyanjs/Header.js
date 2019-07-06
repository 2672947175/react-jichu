// input 输入框组件
function Header(props) {
    return (
        <div className='inputbox'>
            <input type="text" placeholder="请在这里输入留言信息" value={props.text} onChange={(e) => { props.Change(e) }} />
        </div>
    )
}