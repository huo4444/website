/**
 * Created by Administrator on 2017/7/11 0011.
 */
import React from 'react'
import {WhiteSpace,Flex} from 'antd-mobile'

export default class Home extends React.Component{
    render(){
        return <div>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <Flex justify="center"   >

                    <div style={{
                        // backgroundColor: '#ebebef',
                        // color: '#bbb',
                        textAlign: 'center',
                        height: '0.6rem',
                        lineHeight: '0.6rem',
                        width: '100%',
                    }}
                    >
                        <i className="iconfont icon-huo" style={{fontSize:"0.42rem"}}></i>即将为您服务！
                    </div>
                </Flex>
            </div>
    }
}