import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'Bui Trong Hieu',
        email : 'bthieu@gmail.com',
        password : bcrypt.hashSync('hieu2002',12),
        isAdmin : true
    },
    {
        name : 'Huy Tran',
        email : 'huytran@gmail.com',
        password : bcrypt.hashSync('huytran2002',12),
        isAdmin : false
    },

]
export default Users