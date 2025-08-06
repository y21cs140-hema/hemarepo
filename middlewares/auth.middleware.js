export function authMiddleware(req,res,next){
    const token=123;
    if(token=123){
        next();
    }else{
        res.status(401).json({status:'error', message: 'Unauthorized access'});
    }
}