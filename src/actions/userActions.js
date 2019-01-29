
import {FETCH_USERS,SEND_USERSLOCATİON} from './types';


export const fetchUsers = () =>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then((users)=>{
            users.forEach(element => {
                element.company = element.company.name
                element.location = element.address.geo;
                element.address = element.address.suite +' ' +element.address.street +' '+element.address.city +' '+element.address.zipcode
            });
            console.log('users',users)




            dispatch({  type:FETCH_USERS,
                payload :users
            });
        });
}





export const sendUsersLocation = (usersLocation)=>dispatch=>{
    dispatch({type:SEND_USERSLOCATİON,payload:usersLocation})

}