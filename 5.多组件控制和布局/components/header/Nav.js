function Nav(){
    const arr = [
        {
            text:'hahaha',
            style:{
                background: "pink",
            },
        },
        {
            text:'杀戮都市',
            style:{
                background: "red",
            },
        },
        {
            text:'怕所得税',
            style:{
                background: "#ac23",
            },
        },
    ];
    const rarr = [1,2,3]
    return (
        <div className='flex justBetween bag wcor ' >
            <div className="flex">
                <Content className="border nei"  arr={arr} ></Content>
            </div>
            <div className="flex">
                <Content className="border nei"  arr={rarr}></Content>
            </div> 
        </div>
    )
}