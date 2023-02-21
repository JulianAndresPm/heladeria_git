module.exports = {
    isloLoggeedIn(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        return res.redirect('/twist/login');
    }
}