import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import * as qs from "qs"
import {cleanObject, useDebounce, useMount} from "../../utils";
 
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const [users,setUsers] = useState([])
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const debouncedParam = useDebounce(param,200)
    const [list,setList] = useState([])
    useMount(()=>{
        fetch(`${apiUrl}/users`).then(async response =>{
            if (response.ok){
                setUsers(await response.json())
            }
        })
    })

    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response =>{
            if (response.ok){
                setList(await response.json())
            }
        })
    },[debouncedParam])

    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}/>
        <List users={users}  list={list}/>
    </div>
}