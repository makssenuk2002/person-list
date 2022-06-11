import styles from './PersonInfo.module.css';

const PersonInfo = ({ personInfo }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.item__title}>biography: {personInfo.biography}</div>
                <div className={styles.item__title}>birth date: {personInfo.birth_date}</div>
                <div className={styles.item__title}>first name: {personInfo.first_name}</div>
                <div className={styles.item__title}>last name: {personInfo.last_name}</div>
                <div className={styles.item__title}>job: {personInfo.job}</div>
                <div className={styles.item__title}>gender: {personInfo.gender}</div>
            </div>
        </>
    )
}



export default PersonInfo;
