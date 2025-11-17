'use client'
import React, { useState } from 'react'
import { Flex, Layout } from 'antd'
import SidebarNav from '@/src/components/sidebar/sidebar'
import { Header, Footer, Content } from 'antd/es/layout/layout'
import DisplayCard from '@/src/components/carddisplay/card'

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };
  
  const contentStyle: React.CSSProperties = {
    minHeight: 120,
    color: '#fff',
    backgroundColor: '#0958d9',
    padding: '20px'
  };
  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };
  
  const layoutStyle: React.CSSProperties = {
    borderRadius: 0,
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    height: '100vh',
    margin: 0,
    padding: 0,
  };

export default function HomePage() {
    const [collapsed, setCollapsed] = useState(false);
    
    return (
        <Flex style={layoutStyle}>
          <div style={{ 
            width: collapsed ? 80 : 256, 
            transition: 'width 0.2s',
            overflow: 'hidden',
            flexShrink: 0
          }}>
            <SidebarNav collapsed={collapsed} setCollapsed={setCollapsed} />
          </div>
          <Layout style={{ 
            flex: 1, 
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Header style={headerStyle}>Header</Header>
            <Content style={{ ...contentStyle, flex: 1, overflowY: 'scroll'}}>Content
                <DisplayCard />
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Flex>
    )
}