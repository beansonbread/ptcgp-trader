'use client'

import {
    HomeOutlined,
    UserOutlined,
    VerticalLeftOutlined,
    VerticalRightOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Button, Menu } from 'antd';

  type MenuItem = Required<MenuProps>['items'][number];

  const items: MenuItem[] = [
    { key: '1', icon: <HomeOutlined />, label: 'Home' },
    { key: '2', icon: <UserOutlined />, label: 'Profile' }
  ];

  interface SidebarNavProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
  }
  
  export default function SidebarNav({ collapsed, setCollapsed }: SidebarNavProps) {
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <div style={{ 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#001529'
      }}>
        
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{ 
            flex: 1,
            borderRight: 0
          }}
        /><Button 
          type="default"
          onClick={toggleCollapsed} 
          style={{ margin: 16, width: collapsed ? 48 : 'auto' }}
        >
          {collapsed ? <VerticalLeftOutlined /> : <VerticalRightOutlined />}
          {!collapsed && <span style={{ marginLeft: 8 }}>Collapse Menu</span>}
        </Button>
      </div>
    );
  };