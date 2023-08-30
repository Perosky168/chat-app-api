import { IAuthDocument } from 'src/features/auth/interfaces/auth.interface';
import { UserModel } from 'src/features/user/models/user.schema';

class UserService {
  public async addUserData(data: IAuthDocument): Promise<void> {
    await UserModel.create(data);
  }
}

export const userService: UserService = new UserService();
