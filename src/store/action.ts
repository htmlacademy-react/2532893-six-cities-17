
import {RoutePath} from '../data/routes.ts';
import {createAction} from '@reduxjs/toolkit';

export const redirectToRoute = createAction<RoutePath>('app/redirectToRoute');

