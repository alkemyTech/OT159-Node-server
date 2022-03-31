function authorize() {
    return ( (req,res,next) => {
        let isAdmin = true;
        if(isAdmin) {next()}
        
    }) 
}
module.exports = {
    authorize,
}