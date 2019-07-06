class Message extends React.Component {
    constructor() {
        super()
        this.state = {
            text: '',
            list: ['sdsdsd', '辅导费'],
            huishouList:['说的就是']
        }
    }
    // input 实现数据绑定
    Change = ({ target }) => {
        this.setState({
            text: target.value
        })
    }
    // 提交事件
    haodlClick = () => {
        if (this.state.text) {
            this.setState({
                list: [[this.state.text], ...this.state.list],
                text: ''
            })
        }

    }
    // 删除事件
    shanbtn = (idx) => {
        console.log(idx)
        const huifulis =this.state.list.filter((item, index) => index == idx)
        console.log(huifulis)
        this.setState({
            huishouList: [huifulis, ...this.state.huishouList],
            list: this.state.list.filter((item, index) => index != idx),
        })
    }
    // 清空事件
    quanshanbtn = () => {
        this.setState({
            huishouList: [...this.state.list, ...this.state.huishouList],
            list: []
        })
    }
    // 回复事件
    huifubtn=(idx)=>{
        const lists = this.state.huishouList.filter((item, index) => index == idx)
        this.setState({
            list: [lists, ...this.state.list],
            huishouList: this.state.huishouList.filter((item, index) => index != idx)
        })
    }

    // 渲染监听事件
    render() {
        return <div className="const">
            <Header text={this.state.text} Change={this.Change} />
            <Button haodlClick={this.haodlClick}
                className='buttonbox' text='提交'/>

            <div className="neibox">
                <Xinxi className="textbox flex justBetween"
                    list={this.state.list}
                    buttonName='shang'
                    text='全部删除'
                    haodlClick={this.quanshanbtn}
                >
                    当前留言共信息：<span>{this.state.list.length} </span> 条
                    </Xinxi>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <Xinxi
                                className="textbox flex justBetween"
                                list={this.state.list}
                                buttonName='shang'
                                key={index}
                                haodlClick={() => { this.shanbtn(index) }}
                                text='删除'
                            >
                                <span>{index+1}</span> {item}
                            </Xinxi>
                        )
                    })
                }
            </div>

            <div className="neibox">
                <Xinxi className="textbox center">
                        回收站 
                </Xinxi>
                {
                    this.state.huishouList.map((item, index) => {
                        return (
                            <Xinxi
                                className="textbox flex justBetween"
                                list='1'
                                buttonName='shang'
                                key={index}
                                haodlClick={() => { this.huifubtn(index) }}
                                text='恢复文件'
                            >
                                <span>{index+1}</span> {item}
                            </Xinxi>
                        )
                    })
                }
            </div>
        </div>
    }
}