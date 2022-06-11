import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
    return (
        <ul className={styles.list__container}>
            {people.map((el) =>
                <li className={styles.list__item} key={el.id}>
                    <Link to={`/people/${el.id}`}>
                        <p>{el.first_name} {el.last_name}</p>
                    </Link>
                </li>
            )}
        </ul> 
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;
