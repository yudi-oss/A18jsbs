// const userdata=[
//     {id: 1, name: 'Alice', age:35, gender:"female", hasPassedOut: true, occupation:undefined},
//       {id: 2, name: 'Sefina', age:23, gender:"female", hasPassedOut: true, occupation:undefined},
//       {id: 3, name: 'Jalan', age:45, gender:"male", hasPassedOut: true, occupation:"intern"},
//       {id: 4, name: 'Nirpa', age:33, gender:"others", hasPassedOut: false, occupation:"animator"},
//       {id: 5, name: 'Shrijana', age:35, gender:"female", hasPassedOut: true, occupation:"be god"},
//       {id: 6, name: 'Safalta', age:24, gender:"male", hasPassedOut: false, occupation:undefined},
//       {id: 7, name: 'Bimal', age:35, gender:"male", hasPassedOut: true, occupation:"SSWE"}
//     ]

//       const response={
//         status: 200,
//         message: 'Data fetched successfully',
//         data: userdata
//       }

//       const getUserName=()=>{
//         const APIStatus = response.status
//         if(APIStatus===200){
//             const result=response.data
            
//             // .map((user)=> user.occupation ?? user.name);   
//             .filter((user)=> user.age > 22  && user.occupation)
//             .map((user)=>user.name);            
        
//             return result;


//         }
//         else{

//         }
//       }
//       console.log(getUserName());

      const customers = [
        {id: 1, name: 'Ashaj', bought:[{id: 2, name: "biscuit"}, {id: 45, name: "macbook"}]},
        {id: 2, name: 'dikcya', bought:[{id: 45, name: "macbook"}, {id: 405, name: "chowmein"}]},
        {id: 3, name: 'Bimal', bought:[{id:120 , name: "T-shirt"}, {id: 200, name: "Ferari"}]},
        {id: 4, name: 'simple', bought:[{id: 220, name: "Momo and coke"}, {id: 2, name: "biscuit"}]},

      ];
      const CustomerResponse = {
        status:200,
        message:"Data fetched Successfully",
        data: customers
      };

      const getProductName=()=>{
        if (CustomerResponse.status === 200 ){
          let boughtProduct = [];
          CustomerResponse.data.forEach((customer) => {
            customer.bought.map((item)=>{
              boughtProduct.unshift(item.name);
            });
          });
          return boughtProduct;
      }

      }
      // console.log(getProductName());

      const getProductNumbers=()=>{
        if (CustomerResponse === 200 ){
          let productNumber={};
          CustomerResponse.data.forEach((customer) => {
            customer.bought.forEach(
              (item)=>{
                if(productNumber[item.id]){
                  productNumber[item.id] += 1;
                }else{
                  productNumber[item.id]=1;
                }
              }
            )
          })
       
          }
          }


      