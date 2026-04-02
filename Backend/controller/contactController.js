
const contactModule= require('../model/contactModule.js')


const setcontactController = async(req,res)=>{

       const data = req.body
       console.log(data,'contactcontroller');
       contactModule.putContactInfo(data,(err,result)=>{
            
            if(result.length == 0)
            {
                console.log(err)
                res.status(500).send('server Error')
            }
            else
            {    
                 console.log(result)
                  res.status(200).send('ok')
            }

            
      })
}

module.exports = {setcontactController}