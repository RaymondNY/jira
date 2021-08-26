import {useEffect, useState} from "react";

export interface User {
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string;
}
interface SearchPanelProps{
    users:User[],
    param:{
        name:string;
        personId:string;
    },
    setParam:(param:SearchPanelProps['param']) => void;
}
export const SearchPanel = ({param,setParam,users}:SearchPanelProps) => {

    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={event => setParam({
                ...param,
                name:event.target.value
            })}/>
            <select value={param.personId} onChange={event => setParam({
                ...param,
                personId:event.target.value
            })}>
                <option value={''}>principal</option>
                {
                    users.map(users => <option key={users.id} value={users.id}>{users.name}</option>)
                }
            </select>
        </div>
    </form>
}