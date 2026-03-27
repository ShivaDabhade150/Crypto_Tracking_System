
const userModule = require('../model/createUser.js')

const createUser = (req, res) => {

    const { userName, email, password } = req.body
    console.log(userName)
    userModule.createUser({ userName, email, password }, (err, result) => {

        if (err) {
            console.log(err, "erro   ")
            return res.send(err);
        }
        else {
            console.log(result)
            return res.send(result)
        }
    })
}

const getUser = (req, res) => {

    const { email, password } = req.body

    userModule.getUserModule({ email, password }, (err, result) => {

        if (err) {
            if (err) {
                console.log("error")
                return res.status(500).json({ message: 'Server error' })
            }
        }
        if ( result.length == 0) {
            console.log("not found")
            return res.status(400).json({ message: 'Invaid Credencials' })

        }

          if (result[0].userPaSS !== password) {
            return res.status(401).json({ message: 'Invalid Credentials' })
        }

         return res.status(200).json({ message: 'Login successful!' })
    })

}


module.exports = { createUser, getUser }