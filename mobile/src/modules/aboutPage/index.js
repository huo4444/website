/**
 * Created by Administrator on 2017/7/11 0011.
 */
import React from 'react'
import WhiteSpace from 'antd-mobile/lib/white-space'
import Flex from 'antd-mobile/lib/flex'
import ActivityIndicator from 'antd-mobile/lib/activity-indicator'

export default class About extends React.Component{
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
            </div>
            <div style={{
                    // backgroundColor: '#ebebef',
                    // color: '#bbb',
                    textAlign: 'center',
                    height: '0.6rem',
                    lineHeight: '0.6rem',
                    width: '100%',
                }}
            >
                <ActivityIndicator text="努力工作中..."/>
            </div>
            <div style={{
                // backgroundColor: '#ebebef',
                // color: '#bbb',
                textAlign: 'center',
                height: '0.6rem',
                lineHeight: '0.6rem',
                width: '100%',
            }}
            >
            </div>
            </Flex>
        </div>
    }
}