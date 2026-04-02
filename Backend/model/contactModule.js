const DB = require('../DB/db.js')

const putContactInfo = (data,callback)=>{
       console.log(data,'module')
       const sql = 'insert into FeedBack(FirstName,LastName,Email,Message) value (?,?,?,?)'
       const{firstName,lastName,email,message} = data 
      DB.query(sql,[firstName,lastName,email,message],callback)
      
}

module.exports = {putContactInfo}