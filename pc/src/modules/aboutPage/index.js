/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react'
import {Card,Row,Col,Spin } from 'antd'

export default class HomePage extends React.Component{


    render(){
        return <Row>
            <Col push={8} span={8}>
                <Card style={{ width: "100%",height:300 }} bodyStyle={{ paddingTop: 140,textAlign:"center",fontSize:"18px"}}>
                    努力工作中！<Spin/>
                </Card>
            </Col>

            </Row>

    }
}