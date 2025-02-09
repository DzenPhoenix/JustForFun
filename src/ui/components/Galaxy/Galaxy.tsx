import { Star } from '../Star/Star';
import styles from './styles.module.scss';

export const Galaxy = () => {
    return <div className={styles.galaxy}>
        <Star position={{ top: 50, left: 50 }}></Star>
        <Star position={{ top: 100, left: 600 }}></Star>
    </div>
}