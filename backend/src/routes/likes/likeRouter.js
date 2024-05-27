const router = require('express').Router();
const { postValidatorCollection } = require('../../../validators/likesValidators')
const { get_posts_controller, add_posts_controller, like_post_controller, delete_post_controller,update_user_controller } = require('../../controllers/likescontrollers');

router.get('/get-all', get_posts_controller);
router.post('/add', postValidatorCollection.addValidator ,add_posts_controller);
router.put('/:id/like', postValidatorCollection.updateValidator, like_post_controller); // Ruta para manejar la solicitud de like
router.delete('/:id', delete_post_controller);

module.exports = router;