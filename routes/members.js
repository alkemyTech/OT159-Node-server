const { Router } = require('express')
const { postMembers}=require('../controllers/membersController');
const  {validateMember} = require('../middlewares/memberMidldlewar');
const router = Router();





router.post('/', 
   [ validateMember,
],
postMembers
)

module.exports = router;