      // 5.入口模板
      function Html(){
        return (
            // [<Header key='1'/>,
            // <Main key='2'/>]
            // 解决组件与组相邻的报错和多余的div
            <React.Fragment>
                <Header />
                <Main />
                <Footer>
                    <Footer1 text="已收到" />
                    <Footer1 text="撒大声地所多" />
                </Footer>,
            </React.Fragment>

        )
    }