import ProgramLeft from 'root/Landing/Programs/ProgramLeft';
import connect from 'utils/connect';
import { landing, user } from 'store';

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
      { courses.map((course, index) => <ProgramLeft
          key={index}
          className={styles.program}
          isLoggedIn={true}
          data={course}
          userHasThisProgram={ userCourse.indexOf(course.id) >= 0 }
          classNamePhotoSide={styles.photoSide}
          classNameDescriptionSide={styles.descriptionSide}
        />)
      }
    </div>;
  }
}