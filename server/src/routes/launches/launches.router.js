import { Router } from 'express';
import {
  httpAddNewlauch,
  httpGetAllLaunches,
  httpAbortLaunch,
} from './launches.controller.js';

const launchesRouter = Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewlauch);
launchesRouter.delete('/:id', httpAbortLaunch);

export { launchesRouter };
