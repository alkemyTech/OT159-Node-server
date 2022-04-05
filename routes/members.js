const { Router } = require('express')
const { postMembers, listMembers }=require('../controllers/membersController');
const  {validateMember} = require('../middlewares/memberMidldlewar');
const  { isAdminRole } = require('../middlewares/validateRoles');
const router = Router();





router.post('/', 
   [ validateMember,
],
postMembers
)

router.get('/', isAdminRole, listMembers.list)

module.exports = router;