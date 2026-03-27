const db = require('../DB/db.js')


const createUser = (data,callback)=>{
     
    console.log('creatuser')
    
    const sql = "insert into userInfo(userName,email,userPaSS) values(?,?,?)"
     db.query(sql,[data.userName,data.email,data.password],callback)
}


const getUserModule = (data,callback )=>{
            
    const sql = 'select * from userInfo where email = ? '

    db.query(sql,[data.email],callback)
}
module.exports=  {createUser,getUserModule}