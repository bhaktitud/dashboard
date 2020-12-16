import { Avatar, Col, Divider, Image, Layout, Menu, notification, Row, Typography } from 'antd';
import { FolderOpenOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setMenuList } from '../store/actions';
import menuJson from '../files/dummy-menu.json'


const { SubMenu } = Menu;
const { Sider } = Layout;

export default function MenuDrawer() {

    const [dummyMenuList, setDummyMenuList] = useState([])

    const listMenu = useSelector(state => state.listMenu)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setMenuList(menuJson))
    }, [dispatch])

    useEffect(() => {
        if(listMenu){
            setDummyMenuList(listMenu)
        }
    }, [listMenu])

    const handleMenuClick = (menu) => {
        if(menu.isAllowed){
            notification.success({
                message: 'Access Allowed',
                description:
                  `${menu.id.toUpperCase()} menu has been clicked.`,
                onClick: () => {
                  console.log('Notification Clicked!');
                },
            });
        } else {
            notification.error({
                message: 'Access Denied',
                description:
                  `Sorry, you are not allowed to access this menu.`,
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });
        }
    }

    return (
        <Sider width={350} style={{height: '93vh', overflowY: 'scroll'}} >
            <div>
                <Row span={12} justify='center' align='center' style={{margin: 25}} >
                    <Image
                        width={200}
                        src="https://www.avana.id/assets/images/logo.png"
                    />
                </Row>
                <Row span={12} justify='center' align='center' >
                    <Avatar size={80} icon={<UserOutlined />} />
                </Row>
                <Row span={12} justify='center' align='center' >
                    <Typography.Title style={{color: '#fff', margin: 20}} level={5}>Hi, Bhakti Budiman</Typography.Title>
                </Row>
            <Divider style={{backgroundColor: '#535353'}} />
            </div>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              theme='dark'
            >
                {
                    dummyMenuList.map((parentMenu, i) => {
                        if(parentMenu.isShowed){
                            if(parentMenu.childs){
                                return <>
                                    <SubMenu key={parentMenu.id} icon={<FolderOpenOutlined key={parentMenu.id} />} title={parentMenu.id.toUpperCase()}>
                                        {
                                            parentMenu.childs.map((childDeep1, j) => {
                                                if(childDeep1.isShowed){
                                                    if(childDeep1.childs){
                                                        return <>
                                                            <SubMenu key={childDeep1.id} icon={<FolderOpenOutlined key={childDeep1.id} />} title={childDeep1.id.toUpperCase()}>
                                                                {
                                                                    childDeep1.childs.map((childDeep2, k) => {
                                                                        if(childDeep2.isShowed){
                                                                            if(childDeep2.childs){
                                                                                return <>
                                                                                    <SubMenu key={childDeep2.id} icon={<FolderOpenOutlined key={childDeep2.id} />} title={childDeep2.id.toUpperCase()}>
                                                                                        {
                                                                                            childDeep2.childs.map((childDeep3, l) => {
                                                                                                if(childDeep3.isShowed){
                                                                                                    if(childDeep3.childs){
                                                                                                        return <>
                                                                                                            <SubMenu key={childDeep3.id} icon={<FolderOpenOutlined key={childDeep3.id} />} title={childDeep3.id.toUpperCase()}>
                                                                                                                <Menu.Item key={childDeep3.id} onClick={() => handleMenuClick(childDeep3)}>{childDeep3.id.toUpperCase()}</Menu.Item>
                                                                                                            </SubMenu>
                                                                                                        </>
                                                                                                    }else{
                                                                                                        return <Menu.Item key={childDeep3.id} onClick={() => handleMenuClick(childDeep3)}>{childDeep3.id.toUpperCase()}</Menu.Item>
                                                                                                    }
                                                                                                }
                                                                                            })
                                                                                        }
                                                                                    </SubMenu>
                                                                                </>
                                                                            } else {
                                                                                return <Menu.Item key={childDeep2.id} onClick={() => handleMenuClick(childDeep2)}>{childDeep2.id.toUpperCase()}</Menu.Item>
                                                                            }
                                                                        }
                                                                    })
                                                                }
                                                            </SubMenu>
                                                        </>
                                                    } else {
                                                        return <Menu.Item key={childDeep1.id} onClick={() => handleMenuClick(childDeep1)}>{childDeep1.id.toUpperCase()}</Menu.Item>
                                                    }
                                                }
                                            })
                                        }
                                    </SubMenu>
                                </>
                            } else {
                                    return <Menu.Item key={parentMenu.id} onClick={() => handleMenuClick(parentMenu)}>{parentMenu.id.toUpperCase()}</Menu.Item>
                            }

                        }
                    })
                }
            </Menu>
          </Sider>
    )
}
