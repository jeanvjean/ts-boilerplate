import { UserInterface } from './../../modules/interfaces/interface.users';
import {Response, Request, RequestHandler} from 'express';
import Ctrl from '../ctrl';
import User from '../../modules/users';
import enums from '@src/configs/enums';
import { user } from '@src/modules';

const UserModule = user

class UserController extends Ctrl {
    private module: User;
    constructor(module: User) {
      super();
      this.module = module;
    }

    create(): RequestHandler {
      return async (req: Request, res: Response) => {
        try {
          const data: UserInterface | undefined = await UserModule.create({...req.body});
          this.ok(res, enums.RESOURCE_CREATED('user'), data);
        } catch (error) {
          // @ts-ignore
          this.handleError(error, req, res);
        }
      };
    }
}

export default UserController;
