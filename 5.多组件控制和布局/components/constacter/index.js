function Constructor (){
    const arr = [1,2,3]
    const arrimg = [
        {
            src:"https://img.alicdn.com/imgextra/i3/31676741/O1CN01DI4eKT1zfQQ0TLNxI_!!0-saturn_solar.jpg_220x220.jpg_.webp"
        },
        {
            src:"https://img.alicdn.com/imgextra/i3/31676741/O1CN01DI4eKT1zfQQ0TLNxI_!!0-saturn_solar.jpg_220x220.jpg_.webp"
        },
        {
            src:"https://img.alicdn.com/imgextra/i3/31676741/O1CN01DI4eKT1zfQQ0TLNxI_!!0-saturn_solar.jpg_220x220.jpg_.webp"
        },
        {
            src:'https://img.alicdn.com/imgextra/i3/128056392/O1CN01Ijosbt1x5aBoe48p5_!!0-saturn_solar.jpg_220x220.jpg_.webp'
        }
    ]
    return (
        <div className="bag top wcor">
            {/* 内容头部区域 */}

            <div className="ctor-top flex justBetween">
                <ul className='flex'>
                    <Content type="li" className="border center nei " arr={arr}></Content>
                </ul>
                <ul className='flex'>
                    <Content type="li" className="border center nei " arr={arr}></Content>
                </ul>
            </div>
            
            {/* 图片区域 */}
            <div className="ctor-box">
                <ul className='flex justBetween center'>
                {arrimg.map((item,index)=>{
                    return (
                        <Content type="li" key={index} className="border center nei ">
                        <img src={item.src}/>
                        <p>$3</p>
                    </Content>
                    )
                   
                }) 
                }
                 
                </ul>
            </div>
        </div>
    )
}