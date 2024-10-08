import Router from 'koa-router';
import { login, register } from './auth.ctrl.js'; // auth.ctrl 모듈 경로에 맞게 변경

const auth = new Router();

auth.post('/register', register);
auth.post('/login', login);
// auth.post('/logout', logout);

export default auth;
