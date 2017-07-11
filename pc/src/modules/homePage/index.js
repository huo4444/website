/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react'
import {Card,Row,Col } from 'antd'
import './index.less'
export default class HomePage extends React.Component{
    render(){
        return <Row>
                <Col push={8} span={8}>
                    <Card style={{ width: "100%",height:300 }} bodyStyle={{ paddingTop: 140,textAlign:"center",fontSize:"24px"}}>
                        <i className="iconfont">&#xe601;</i>为您服务！
                    </Card>
                </Col>

            </Row>
    }
}