import React from 'react';
import styled from "styled-components";
import { Col, Input, Menu, Row } from 'antd';
import Link from 'next/link';
import {FullscreenExitOutlined } from '@ant-design/icons'


const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const AppLayout = ({children}) => {
    
    return (
        <>
            <div>
                <Header>
                    <HeaderWrapper>
                        
                    </HeaderWrapper>
                </Header>
                {children}
            </div>
        </>
    )

};

export default AppLayout;