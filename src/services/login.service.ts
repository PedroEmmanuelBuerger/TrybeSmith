import bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwt.util';

import UserModel, {
} from '../database/models/user.model';

import { ServiceResponse } from '../types/ServiceResponse';

import { Token } from '../types/token';
import { Login } from '../types/User';

async function login(user: Login): Promise<ServiceResponse<Token>> {
  const userUsername = user.username;
  const foundUser = await UserModel.findOne({ where: { username: userUsername } });
  if (!foundUser || !bcrypt.compareSync(user.password, foundUser.dataValues.password)) {
    return { type: 'UNAUTHORIZED', message: 'Username or password invalid' };
  }
  const { id, username } = foundUser.dataValues;
  const token = jwtUtil.sign({ id, username });
  return { type: 'SUCCESSFUL', message: { token } };
}

export default {
  login,
};
