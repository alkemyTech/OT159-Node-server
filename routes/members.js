const { Router } = require('express')
const { postMembers, listMembers }=require('../controllers/membersController');
const  {validateMember} = require('../middlewares/memberMidldlewar');
const router = Router();





router.post('/', 
   [ validateMember,
],
postMembers
)

router.get('/', listMembers.list)

module.exports = router;