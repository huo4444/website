/**
 * Created by Administrator on 2017/7/11 0011.
 */
import React from 'react'
import {TabBar} from 'antd-mobile';
import {Icon} from 'antd-mobile';
import './root.less'
import AsyncComponent from "./AsyncComponent";

/* eslint global-require: 0 */

export  default  class Root extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
        };
    }

    renderContent(key) {
        if(key==='home'){
            return <AsyncComponent isChunk={true} render={()=>System.import(/* webpackChunkName: "home" */ './modules/homePage')} />

        }else if(key==='about'){
            return <AsyncComponent isChunk={true} render={()=>System.import(/* webpackChunkName: "about" */ './modules/aboutPage')} />
        }else {
            return null;
        }
    }

    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    title="首页"
                    key="home"
                    icon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                    }}
                    ><i className="iconfont icon-huo" style={{fontSize:'0.42rem'}}></i></div>
                    }
                    selectedIcon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',}}
                    ><i className="iconfont icon-huo" style={{fontSize:'0.42rem'}}></i></div>
                    }
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                    }}
                    data-seed="logId"
                >
                    {this.renderContent('home')}
                </TabBar.Item>
                <TabBar.Item
                    icon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                    }}
                    ><i className="iconfont icon-gerenxinxi2" style={{fontSize:'0.42rem'}}></i></div>}
                    selectedIcon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                    }}
                    ><i className="iconfont icon-gerenxinxi2" style={{fontSize:'0.42rem'}}></i></div>}
                    title="关于我"
                    key="about"
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                    }}
                    data-seed="logId1"
                >
                    {this.renderContent('about')}
                </TabBar.Item>
            </TabBar>
        );
    }
}
