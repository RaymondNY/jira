import {User} from "screens/project-list/search-panel";

interface Project{
    id:string;
    name:string;
    personId:string;
    pin:boolean;
    organization:string;
}
interface ListProps{
    list:Project[],
    users:User[]
}
export const List = ({users,list}:ListProps) => {
    return <table>
        <thead>
        <tr>
            <th>name</th>
            <th>principal</th>
        </tr>
        </thead>
        <tbody>
        {
            list.map(project =>
            <tr key={project.id}>
                <td>{project.name}</td>
                <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
            </tr>
            )
        }
        </tbody>
    </table>
}