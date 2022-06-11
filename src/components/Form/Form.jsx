import React, {useEffect, useState} from 'react';
import styles from "../Form/Form.module.css";
import DatePicker from "react-datepicker";
import * as moment from "moment";
import axios from "axios";
import {useParams} from "react-router";

function Form({handleSubmit}) {
    const {id} = useParams();

    const [birthDate, setBirthDate] = useState(new Date());
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [job, setJob] = useState("");
    const [biography, setBiography] = useState("");
    const [gender, setGender] = useState("");
    useEffect(() => {
        console.log(id)
       if (id){
           axios.get(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}/ `).then(res => {
               if (res){
                   const personInfo = res.data
                   setFirstName(personInfo.first_name)
                   setLastName(personInfo.last_name)
                   setJob(personInfo.job)
                   setBiography(personInfo.biography)
                   setGender(personInfo.gender)
               }
           })
       }

    }, []);
    const onSubmit = (event) => {
        event.preventDefault();
        const data = {
            biography: biography,
            birth_date: moment(birthDate).format('YYYY-MM-DD'),
            gender: gender,
            job: job,
            first_name: firstName,
            last_name: lastName,
        }
        handleSubmit(data)
    }
    return (
        <>
        <form className={styles.form} onSubmit={onSubmit}>
                <div>
                    <input
                        placeholder="Input person's first name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        maxLength={256}
                    />
                </div>
                <div>
                    <input
                        placeholder="Input person's last name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        maxLength={256}
                    />
                </div>
                <div>
                    <DatePicker
                        className={styles.datapicker}
                        selected={birthDate}
                        onChange={(date: Date) => setBirthDate(date)}
                        dateFormat="yyyy/MM/dd"
                    />

                </div>
                <div>
                    <select
                        name="select"
                        className={styles.select}
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                    >
                        <option value="1" disabled selected="selected">Select gender</option>
                        <option value="female">Female</option>
                        <option value="male" selected>Male</option>
                    </select>
                </div>
                <div>
                    <input
                        placeholder="Input person's job"
                        type="text"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        maxLength={256}
                    />
                </div>
                <div>
                        <textarea
                            placeholder='Biography'
                            type="text"
                            value={biography}
                            onChange={(e) => setBiography(e.target.value)}
                            maxLength={1024}
                        />
                </div>
                <div>
                    <button>submit</button>
                </div>
            </form>
        </>
    );
}

export default Form;