import InputRange from 'react-input-range';
import moment from 'moment';

import styles from './styles.scss';


export default ({ value=0, onChange=()=>{}, duration, isFullscreen }) => {
  return <div className={cn(styles.root, isFullscreen && styles.rootFullScreen)}>
    <InputRange
      step={.1}
      maxValue={100}
      minValue={0}
      value={value}
      onChange={onChange}
      formatLabel={(value, type) => {

        if(type === 'min') {
          return '';
        }

        if(type === 'max'){
          return moment().startOf('day')
            .seconds(duration)
            .format('mm:ss');
        }

        return moment().startOf('day')
          .seconds(duration * value / 100)
          .format('mm:ss');
      }}
    />
  </div>
}