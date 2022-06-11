import PropTypes from 'prop-types';
import React,{ useState, useEffect,Suspense } from 'react';


import styles from './PersonPage.module.css';
import {useNavigate, useParams} from "react-router";
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack";
import {Link} from "react-router-dom";
import {deletePerson, editPerson, getPerson} from "../../services/api";

const PersonPage = ( ) => {
    const [personInfo, setPersonInfo] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const res = await getPerson(id)
            if (res) {
                setPersonInfo(res);
            }
        })();
    }, []);
    function onDelete( e) {
        e.preventDefault();
        deletePerson(id)
        navigate(-1)
    }

    return (
        <>
            <PersonLinkBack/>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    <button onClick={onDelete}>Delete</button>
                    <button>
                        <Link to={`/people/edit${id}`}>
                            <p>Edit</p>
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    match: PropTypes.object,
    setErrorApi: PropTypes.func,
}

export default PersonPage
