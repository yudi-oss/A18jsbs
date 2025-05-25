const userdata=[
    {id: 1, name: 'Alice', age:35, gender:"female", hasPassedOut: true, occupation:undefined},
      {id: 2, name: 'Sefina', age:23, gender:"female", hasPassedOut: true, occupation:undefined},
      {id: 3, name: 'Jalan', age:45, gender:"male", hasPassedOut: true, occupation:"intern"},
      {id: 4, name: 'Nirpa', age:33, gender:"others", hasPassedOut: false, occupation:"animator"},
      {id: 5, name: 'Shrijana', age:35, gender:"female", hasPassedOut: true, occupation:"be god"},
      {id: 6, name: 'Safalta', age:24, gender:"male", hasPassedOut: false, occupation:undefined},
      {id: 7, name: 'Bimal', age:35, gender:"male", hasPassedOut: true, occupation:"SSWE"}
    ]

      const response={
        status: 200,
        message: 'Data fetched successfully',
        data: userdata
      }

      const getUserName=()=>{
        const APIStatus = response.status
        if(APIStatus===200){
            const result=response.data
            
            .map((user)=> user.occupation ?? user.name);
            return result;

        }
      }
      console.log(getUserName());