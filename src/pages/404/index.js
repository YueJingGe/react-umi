import Helmet from 'react-helmet';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.notfound}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>没有找到该页面</title>
      </Helmet>
      I am a customized 404 page
    </div>
  );
}
