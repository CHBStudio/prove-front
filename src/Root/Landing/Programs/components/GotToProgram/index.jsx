import Button from 'components/Button';
import history from 'utils/history';
import urls from 'config/urls';

import styles from './styles.scss';


export default ({ courseId }) => <Button
  className={styles.root}
  onClick={() => history.push(urls.internalCoursesPage(courseId))}
>Перейти к курсу</Button>