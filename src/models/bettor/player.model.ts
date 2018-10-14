import { UserModel } from '../user.model';

export class PlayerModel {
  id: number;
  user: UserModel;
  points: number;
  goodPronostic: number;
  exactPronostic: number;
  totalPronostic: number;
}
