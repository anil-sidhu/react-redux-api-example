

     
  // export const addTodo = ()  => ({

  //           type: "ADD_TODO",
  //           id: 7+3,
            
  // }   )   


  export const addTodo =()=>(dispach:any)=>{

    let url= "https://facebook.github.io/react-native/movies.json"
let result =fetch(url).then((data)=>{
  data.json().then((dataJson)=>{
   
    return dispach({
            type: "ADD_TODO",
            id: dataJson,
    })

  })
})

  }