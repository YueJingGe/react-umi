// import { useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'dva';
import { Skeleton } from 'antd';
import styles from './index.css';

function About({ dispatch, loading, userInfo }) {
  // useEffect(() => {
  //   dispatch({
  //     type: 'user/getUser',
  //   });
  // }, [userInfo]);

  const { name, mobile, address, sex } = userInfo;

  return (
    <div className={styles.about}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>关于我</title>
      </Helmet>
      <h1>[我是从mock里面获取的数据]</h1>
      <Skeleton active={true} loading={loading}>
        <main>
          <div>姓名： {name}</div>
          <div>性别: {sex}</div>
          <div>地址： {address}</div>
          <div>电话： {mobile}</div>
        </main>
      </Skeleton>
    </div>
  );
}

function mapStateToProps(state) {
  const { userInfo, loading } = state.user;
  return {
    userInfo,
    loading,
  };
}

export default connect(mapStateToProps)(About);
