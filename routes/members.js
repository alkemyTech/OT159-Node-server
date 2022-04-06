const { Router } = require('express')
const { postMembers, deleteMember}=require('../controllers/membersController');
const  {validateMember} = require('../middlewares/memberMidldlewar');
const router = Router();





router.post('/', 
   [ validateMember,
],
postMembers
)

router.delete('/:id', deleteMember);

module.exports = router;