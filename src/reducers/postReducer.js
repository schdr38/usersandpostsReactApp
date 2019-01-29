import { FETCH_POSTS } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};
//kullanıcıların attığı postları düzenleyip
const countPostsOfUsers = (posts,users)=> {
  if(typeof posts != "undefined" && posts != null && posts.length != null && posts.length > 0){
    //seçilen kullanıcı postlarını diziden çek
      const userPostsNumber = posts.reduce((catsSoFar, { userId,name, title }) => {
          if (!catsSoFar[userId]) catsSoFar[userId] = [];
          catsSoFar[userId].push(title);
          return catsSoFar;
        }, {});
      posts = [];
      //seçilen kullanıcı id ve post sayısını döndür
        for (let [key, value] of Object.entries(userPostsNumber)) {
          posts.push([key,value.length])
      }
      //kullanıcı idlerinin yanına kullanıcı isimlerinide ekle
      var result = posts.map( (p) => {
          var user = users.filter((u)=>{
            if(u.id == p[0])
                return true;
          })
          return [user[0].name,p[1]]
        })
      return result;
  
    }

}






export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
    let userIds = action.users.map(u=>u.id);
      var posts = action.payload.filter(r=> userIds.indexOf(r.userId) >= 0)
      
      let items = countPostsOfUsers(posts,action.users);
      return {
        ...state,
        items: items
      };
    default:
      return state;
  }
}