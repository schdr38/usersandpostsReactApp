
import {FETCH_POSTS} from './types';
export const fetchPosts =(users) =>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then((posts)=>{
            dispatch({  type:FETCH_POSTS,
                payload :posts,
            users:users});
        });
}