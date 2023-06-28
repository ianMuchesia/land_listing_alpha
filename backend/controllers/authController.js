


const register = async(req, res)=>{
    res.send("register")
}


const login = async(req, res)=>{
    res.send("login")
}


const logout = async(req, res)=>{
    res.send("logout")
}


const showUser = async(req, res)=>{
    res.send("showUser")
}


module.exports =  {
    register,
    login,
    logout,
    showUser
}