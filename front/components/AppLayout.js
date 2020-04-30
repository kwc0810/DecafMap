import React from 'react';
import styled from "styled-components";
import { Col, Input, Menu, Row } from 'antd';
import Link from 'next/link';
import Logo from "../Styles/images/Logo.png"



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
const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  verticalAlign: middle;
  &:first-child {
    margin-right: auto;
    text-align: center;
  }

  
  &:last-child {
    margin-left: auto;
    text-align: center;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
  width: 70%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const LogoImage = styled.a`
  background-image: url(${props => props.image});
  z-index:1;
  width: 100%;
`;


const AppLayout = ({children}) => {
    
    return (
        <>
            <div>
                <Header>
                    <HeaderWrapper>
                        <HeaderColumn>
                         <Link href="/"><LogoImage image={Logo}>로고자리
                         </LogoImage></Link>
                        </HeaderColumn>

                        <HeaderColumn>
                          <form >
                              <SearchInput 
                          
                              placeholder="검색" 
                              />
                          </form>
                        </HeaderColumn>

                        <HeaderColumn>
                            <span style={{marginRight: "10px", borderRight: 'solid 1px #F0F0F3', padding: '10px'}}>
                                로그인
                            </span>
                            <span>
                                회원가입 
                            </span>
                        </HeaderColumn>
                    </HeaderWrapper>
                </Header>
                {children}
            </div>
        </>
    )

};

export default AppLayout;