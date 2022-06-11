import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import {useNavigate, useParams} from "react-router";
import Form from "../../components/Form";
import {useEffect, useState} from "react";

const EditPersonPage = () =>  {

    const navigate = useNavigate();
    const {id} = useParams();
    const handleSubmit = (data) =>{
        axios.put(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}`,data).then(res => {
            if (res){
                navigate(-1)
            }
        })
    }
    return (
        <>
            <h1 className="header__text">Add New Person</h1>
            <div>
                <Form
                    handleSubmit={handleSubmit}
                    personId={id}
                />
            </div>
        </>
    )
}

export default EditPersonPage
