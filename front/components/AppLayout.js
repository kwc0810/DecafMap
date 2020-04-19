import React from 'react';
import { Col, Input, Menu, Row } from 'antd';
import Link from 'next/link';
import {FullscreenExitOutlined } from '@ant-design/icons'

const AppLayout = ({children}) => {
    
    return (
            <div>
                <div style={{display: 'inline-block' , width:'100%' , textAlign: 'center'}}>
                   
                   
                    <Row gutter={8}>
                        <Col xs={24} md={6}>
                            <Menu>
                                <Menu.Item>
                                     <FullscreenExitOutlined></FullscreenExitOutlined>
                                </Menu.Item>  
                            </Menu>
        
                        </Col>

                        <Col xs={24} md={6} >
                            <Menu mode="horizontal" style={{width:'100%'}}>
                                <Menu.Item key="home"><Link href="/"><a>디카페인</a></Link></Menu.Item>
                                <Menu.Item key="profile">프로필</Menu.Item>
                            </Menu>
                        </Col>

                        <Col xs={24} md={6}>
                             <Menu>
                                <Menu.Item>
                                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                                </Menu.Item>  
                            </Menu>
                        </Col>         
                    </Row>

                </div>
                <Row gutter={8}>
                    <Col xs={24} md={12}>
                     {children}
                    </Col>
                </Row>
            </div>
    )

};

export default AppLayout;