import { Layout, Menu, Breadcrumb, notification} from 'antd';
import React from 'react';
import MenuDrawer from './MenuDrawer';
import MainContent from './MainContent';

const { Header, Footer } = Layout;

export default function MainContainer() {

    const handleRouteToHome = () => {
        notification.info({
            message: 'Redirecting to /home'
        })
    }

    const handleRouteToAbout = () => {
        notification.info({
            message: 'Redirecting to /about-us'
        })
    }

    const handleRouteToMenuDashboard = () => {
        notification.success({
            message: 'You are currently in this page'
        })
    }


    return (
        <Layout >
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
                    <Menu.Item key="1" onClick={() => handleRouteToHome()}>HOME</Menu.Item>
                    <Menu.Item key="2" onClick={() => handleRouteToAbout()}>ABOUT US</Menu.Item>
                    <Menu.Item key="3" onClick={() => handleRouteToMenuDashboard()}>AVANA MENU</Menu.Item>
                </Menu>
            </Header>
            
            <Layout hasSider>
                {/* <div style={{width: 375, overflowY: 'scroll'}}> */}
                    <MenuDrawer />
                {/* </div> */}

                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>Menu Controller</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{width: '100%', maxHeight: window.innerHeight - 145, overflowY: 'scroll'}}>
                        <MainContent />
                    </div>
                </Layout>
            </Layout>
        </Layout>
    )
}
