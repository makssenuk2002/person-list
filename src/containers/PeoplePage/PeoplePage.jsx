import { useState, useEffect } from 'react';
import PeopleList from "../../components/PeoplePage/PeopleList";
import {getPeople} from "../../services/api";

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const getResource = async () => {
        const res = await getPeople();
        if (res) {
            setPeople(res);
        }
        console.log(await getPeople())
    }

    useEffect(() => {
        getResource()
    }, []);

    return (
        <>
            {people && <PeopleList people={people} />}
        </>
    )
}

export default   PeoplePage
