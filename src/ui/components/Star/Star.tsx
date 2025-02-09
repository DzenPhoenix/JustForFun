import styles from './styles.module.scss';

type Position = {
    top: number;
    left: number;
}

type StarProps = {
    position: Position;
}

export const Star = ({ position }: StarProps) => {
    return <div className={styles.star} style={{ top: position.top, left: position.left }}></div>
}