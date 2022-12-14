import {Router} from 'express';
import patchTask from './tasks/update.js';
import logon from './auth/logon.js';
import logoff from './auth/logoff.js';
import exportTasks from './export.js';

const router = Router();

router.patch('/tasks/:id', patchTask);

router.get('/export', exportTasks);

router.post('/auth/logon', logon);

router.get('/auth/logoff', logoff);

export default router;
