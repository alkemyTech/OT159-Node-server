const { Router } = require('express')
const { postMembers, listMembers, deleteMember }=require('../controllers/membersController');
const { validateMember } = require('../middlewares/validations/members');
const  { isAdminRole } = require('../middlewares/validateRoles');

const router = Router();

router.post('/', [validateMember], postMembers);

router.delete('/:id', deleteMember);

router.get('/', isAdminRole, listMembers.list)

module.exports = router;
