import { Layout, Menu, Breadcrumb, notification} from 'antd';
import React, { useEffect } from 'react';
import MenuDrawer from './MenuDrawer';
import MainContent from './MainContent';

const { Header, Footer } = Layout;

export default function MainContainer() {


    useEffect(() => {
        notification.info({
            message: 'How To Use It?',
            description: 'Hi Bhakti, simply just turn on/off the switch to hide or show the sidebar menu ^_^',
            placement: 'bottomRight',
            duration: 25
        })
    }, [])

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
                <MenuDrawer />

                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Avana Menu</Breadcrumb.Item>
                        <Breadcrumb.Item>Menu Controller</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{width: '100%', maxHeight: window.innerHeight - 145, overflowY: 'scroll'}}>
                        <MainContent />
                        <Footer style={{ textAlign: 'center' }}>Avana Dashboard Controller ©2020 Created by Bhakti Budiman Novanda</Footer>
                    </div>
                </Layout>
            </Layout>
        </Layout>
    )
}
