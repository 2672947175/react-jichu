//  信息组件
function Xinxi(props) {
    
    var list =0
    if(!props.list){
        list=0
    }
    else{
        list=props.list.length
    }

    return (
        <div className={props.className}>
            <div className="itembox">{props.children}</div>
            {
                list == 0 ? <div></div> : <Button buttonName={props.buttonName} haodlClick={props.haodlClick} text={props.text} />
            }
        </div>
    )
}