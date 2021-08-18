import {useEffect, useState} from "react";

export const SearchPanel = ({param,setParam,users}) => {

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