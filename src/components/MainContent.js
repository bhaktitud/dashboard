import { Layout, Switch, List, Avatar, Collapse, Typography } from 'antd';
import { RightOutlined, DoubleRightOutlined, FastForwardOutlined } from '@ant-design/icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuList } from '../store/actions';
import menuJson from '../files/dummy-menu.json'

const { Content } = Layout;

export default function MainContent() {

    const listMenu = useSelector(state => state.listMenu)

    const dispatch = useDispatch()

    const { Panel } = Collapse;

    const handleParentController = (menu) => {

        listMenu.map(parentMenu => (
            menu.id === parentMenu.id ? parentMenu.isShowed = !parentMenu.isShowed : parentMenu.isShowed
        ))

        dispatch(setMenuList(listMenu))
    }

    const handleChildMenuFirstLevel = (menu) => {
        listMenu.map(parentMenu => {
            if(parentMenu.childs){
                parentMenu.childs.map((child) => {
                    if(child.id === menu.id){
                        return child.isShowed = !child.isShowed
                    }
                })
            }
        })

        dispatch(setMenuList(listMenu))
    }

    const handleChildMenuSecondLevel = (menu) => {
        listMenu.map(parentMenu => {
            if(parentMenu.childs){
                parentMenu.childs.map((child) => {
                    if(child.childs){
                        child.childs.map((secondChild) => {
                            if(secondChild.id === menu.id){
                                return secondChild.isShowed = !secondChild.isShowed
                            }
                        })
                    }
                })
            }
        })

        dispatch(setMenuList(listMenu))
    }

    const handleChildMenuThirdLevel = (menu) => {
        listMenu.map(parentMenu => {
            if(parentMenu.childs){
                parentMenu.childs.map((child) => {
                    if(child.childs){
                        child.childs.map((secondChild) => {
                            if(secondChild.childs){
                                secondChild.childs.map(thirdChild => {
                                    if(thirdChild.id === menu.id){
                                        return thirdChild.isShowed = !thirdChild.isShowed
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })

        dispatch(setMenuList(listMenu))
    }

    return (
        <Content
              style={{
                padding: 20,
                margin: 0,
                minHeight: window.innerHeight - 250,
              }}
              
            >
                <Collapse>
                    {
                        menuJson.map((menuCard, i) => (
                            <Panel  header={<Typography.Text strong>{menuCard.id.toUpperCase()}</Typography.Text>} key={menuCard.id} extra={<Switch key={menuCard.id} checked={menuCard.isShowed} onChange={() => handleParentController(menuCard)} />}>
                                {
                                    menuCard.childs ?
                                        <List
                                            dataSource={menuCard.childs}
                                            renderItem={item => (
                                            <List.Item key={item.id}>
                                                <List.Item.Meta
                                                    avatar={
                                                        <Avatar icon={<RightOutlined />} />
                                                    }
                                                    title={
                                                        <div style={{display: "flex", flexDirection: "row"}}>
                                                            <Typography.Text strong>{item.id.toUpperCase()}</Typography.Text>
                                                            <Switch key={item.id} style={{marginLeft: 20}} checked={item.isShowed} onChange={() => handleChildMenuFirstLevel(item)} />
                                                        </div>
                                                    }
                                                    description=
                                                        {
                                                            item.childs ?
                                                            <List
                                                                dataSource={item.childs}
                                                                renderItem={item2 => (
                                                                <List.Item>
                                                                    <List.Item.Meta
                                                                            avatar={
                                                                                <Avatar icon={<DoubleRightOutlined />} />
                                                                            }
                                                                            title={
                                                                                <div style={{display: "flex", flexDirection: "row"}}>
                                                                                    <Typography.Text strong>{item2.id.toUpperCase()}</Typography.Text>
                                                                                    <Switch key={item2.id} style={{marginLeft: 20}} checked={item2.isShowed} onChange={() => handleChildMenuSecondLevel(item2)} />
                                                                                </div>
                                                                            }
                                                                            description=
                                                                                {
                                                                                    item2.childs ?
                                                                                    <List
                                                                                        dataSource={item2.childs}
                                                                                        renderItem={item3 => (
                                                                                        <List.Item>
                                                                                            <List.Item.Meta
                                                                                                avatar={
                                                                                                    <Avatar icon={<FastForwardOutlined />} />
                                                                                                }
                                                                                                title={
                                                                                                    <div style={{display: "flex", flexDirection: "row"}}>
                                                                                                        <Typography.Text strong>{item3.id.toUpperCase()}</Typography.Text>
                                                                                                        <Switch key={item3.id} style={{marginLeft: 20}} checked={item3.isShowed} onChange={() => handleChildMenuThirdLevel(item3)} />
                                                                                                    </div>
                                                                                                }
                                                                                            />
                                                                                        </List.Item>
                                                                                        )}
                                                                                    />
                                                                                    :
                                                                                    null
                                                                                }    
                                                                            
                                                                        />
                                                                </List.Item>
                                                                )}
                                                            />
                                                            :
                                                            null
                                                        }    
                                                />
                                            </List.Item>
                                            )}
                                        />
                                    :
                                    null
                                }
                            </Panel>
                        ))
                    }
                </Collapse>
        </Content>
    )
}
