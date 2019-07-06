  // 添加内容
  function Main (props={}){
    return (
        <main>
            <ul>
                {
                    props.list.map(((item,index)=>{
                        return <li key={index}>
                        {`${index+1}， ${item}`}
                            <button onClick={()=>{props.removeClick(index)}}>删除</button>
                        </li>
                    }))
                }
            </ul>
        </main>
    )
}