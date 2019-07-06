function Nav(){
    const style={
        padding: '10px 20px',
        margin: '5px',
    }
    const arr = 4
    return (
        <div className='clear'>
            <div className="fleft">
            <Content className="fleft border center"  style={style}>{1}</Content>
            <Content className="fleft border center" style={style}>{2}</Content>
            <Content className="fleft border center" style={style}>{3}</Content>
            </div>
            <div className="fright">
            <Content className="fleft border center" style={style}>{1}</Content>
            <Content className="fleft border center" style={style}>{2}</Content>
            <Content className="fleft border center" style={style}>{3}</Content>
        </div>
      </div>
    )
}