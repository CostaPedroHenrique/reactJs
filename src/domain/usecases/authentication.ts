import {AccountModel} from '../models/accountModel';
type authenticationParams = {
  email: string
  password: string
}
export interface Authentication{
  auth (params: authenticationParams): Promise<AccountModel>
}