import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import * as qs from "qs"
import {cleanObject, useMount} from "../../utils";
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const [users,setUsers] = useState([])
    const [users1,setUsers1] = useState([])
    const [param,setParam] = useState({
        name:'',
        personId:''
    })

    const [list,setList] = useState([])
    useMount(()=>{
        fetch(`${apiUrl}/users`).then(async response =>{
            if (response.ok){
                setUsers1(await response.json())
            }
        })
    })

    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response =>{
            if (response.ok){
                setList(await response.json())
            }
        })
    },[param])

    return <div>
        <SearchPanel param={param} setParam={setParam} users={users1}/>
        <List users={users1}  list={list}/>
    </div>
}