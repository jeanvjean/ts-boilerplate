import {Module} from '../module';
import {UserService} from 'services/index';
import { UserInterface } from '../../modules/interfaces/interface.users';

export type userPropInterface = {
  service: UserService;
}

type UserResponse = {
    data: UserInterface;
    status: string;
}


class userModule extends Module {
    private service: UserService;

    constructor(props: userPropInterface) {
      super();
      this.service = props.service;
    }

    public async create(data: UserInterface): Promise<UserInterface | undefined> {
      try {
        const { first_name, last_name, email, password } = data;
        const user = {
          first_name, 
          last_name,
          email,
          password
        };
        const userData = await this.service.createUser(user);
        return  userData;
      } catch (error) {
        // @ts-ignore
        this.handleException(error);
      }
    }
}

export default userModule;
