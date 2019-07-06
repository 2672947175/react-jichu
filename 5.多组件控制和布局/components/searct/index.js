function Searct (){
    const arr =[
        {
            text:1,
            style:{
            background: 'orangered'

            }
        }
       ,2,3,4
    ]
    return (
        <div className='flex justBetween bag wcor top'>
           <div className="seract-left">
                <p>
                    <input type='text'></input>
                    <button>搜索</button>
                </p>
           </div>
           <div className="seract-right border">
                <ul className="flex">
                    <Content type="li" className="border center nei" arr = {arr} ></Content>
                </ul>
           </div>
        </div>
    )
}