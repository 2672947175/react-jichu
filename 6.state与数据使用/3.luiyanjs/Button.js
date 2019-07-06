  // 按钮组件
  function Button(props){
    return ( 
         <div className={props.className}>
             <button className={props.buttonName} onClick={props.haodlClick}>{props.text}</button>
         </div>
     )
 }