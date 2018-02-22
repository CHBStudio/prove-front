import connect from 'utils/connect';
import { landing, user } from "store";
import ProgramRight from 'root/Landing/Programs/ProgramRight';

import styles from './styles.scss';


@connect({ landing, user })
export default class extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { courses } = this.props.store.landing.data;
    const userCourse = this.props.store.user.data.courses;
    return <div className={styles.root}>
      { courses.map((course, index) => userCourse.indexOf(course.id) >= 0 &&
        <ProgramRight
          key={index}
          className={styles.program}
          isLoggedIn={true}
          data={course}
          userHasThisProgram={ true }
          classNamePhotoSide={styles.photoSide}
          classNameDescriptionSide={styles.descriptionSide}
        />)
      }
      { courses.length === 0 && <p className={styles.emptyText}>
        Вы пока не приобрели ни одного курса
      </p> }
    </div>;
  }
}