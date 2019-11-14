import router from 'umi/router';
import withRouter from 'umi/withRouter';
import React, { useState, useEffect, useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Layout, Menu, Icon } from 'antd';
// 面包屑
import Breakcrumbs from '../components/Breakcrumbs';
import styles from './index.css';

const { Header, Sider, Content } = Layout;

function BasicLayout({ location, children }) {
  const [collapsed, toggleCollapsed] = useState(false);
  const [currentKey, toggleKey] = useState('/');
  const content = useRef(null);

  /**
   * componentDidMount 根据当前路由初始化菜单
   */
  useEffect(() => {
    toggleKey(location.pathname);
  });
  /**
   * componentWillUpdate 当路由发生改变时，右侧内容执行回到顶部
   */
  useEffect(() => {
    content.current.scrollTo(0, 0);
  }, [location]);

  const handleClick = item => {
    router.push(item.key);
    toggleKey(item.key);
  };

  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[currentKey]}
          onClick={item => handleClick(item)}
        >
          <Menu.Item key="/">
            <Icon type="mail" />
            <span>home</span>
          </Menu.Item>
          <Menu.Item key="/examples">
            <Icon type="appstore" />
            <span>examples</span>
          </Menu.Item>
          <Menu.Item key="/about">
            <Icon type="setting" />
            <span>about</span>
          </Menu.Item>
          <Menu.Item key="/notfound">
            <Icon type="setting" />
            <span>notfound</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className={styles.trigger}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => {
              toggleCollapsed(!collapsed);
            }}
          />
        </Header>
        <div ref={content}>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: '100%',
            }}
          >
            <Breakcrumbs />
            <TransitionGroup>
              <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                {children}
              </CSSTransition>
            </TransitionGroup>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
}

export default withRouter(BasicLayout);
