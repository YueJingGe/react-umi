import Helmet from 'react-helmet';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.examples}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>案例</title>
      </Helmet>
      examples
    </div>
  );
}
