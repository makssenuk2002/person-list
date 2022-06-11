import axios from "axios";

export async function  getPeople(){
    const res = axios.get(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/`).then(res => {
        const {data} = res
        return data
    })
    return await res
}
export  function getPerson(id){
    const res = axios.get(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}/`).then(res => {
        return res.data
    })
    return res
}
export  function deletePerson(id){
    axios.delete(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}`).then(res => {
        return res.data
    })
}
export  function editPerson(id){
    axios.put(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}/`).then(res => {
        return res.data
    })
}