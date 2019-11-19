import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'dva';
import { Skeleton, Tabs } from 'antd';
import styles from './index.css';
const { TabPane } = Tabs;

function Examples({ dispatch, typeList, loading }) {
  const [currentKey, changeKey] = useState(null);
  return (
    <div className={styles.examples}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>案例</title>
      </Helmet>
      <Skeleton active={true} loading={loading}>
        <div>
          {typeList.length > 0 && (
            <Tabs
              tabPosition="right"
              activeKey={currentKey || typeList[0].id.toString()}
              onChange={key => {
                changeKey(key);
              }}
            >
              {typeList.map(item => {
                return (
                  <TabPane tab={item.name} key={item.id}>
                    {item.name}
                  </TabPane>
                );
              })}
            </Tabs>
          )}
        </div>
      </Skeleton>
    </div>
  );
}

function mapStateToProps(state) {
  const { typeList, loading } = state.examples;
  return {
    typeList,
    loading,
  };
}

export default connect(mapStateToProps)(Examples);
