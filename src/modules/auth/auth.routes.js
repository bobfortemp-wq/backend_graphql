import { Router } from 'express';
import * as controller from './auth.controller.js';

const router = Router();

router.get('/hello', controller.sayHello);
router.post('/signup', controller.signup);
router.post('/login', controller.login);

export default router;