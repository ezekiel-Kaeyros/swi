import DatabaseService from '@/core/config/DatabaseService';
import DataService from './dataService';
import { IApiResponse } from '@/core/config/ApiResponse';
import { AuthUser } from '@/core/models/Auth';

// export default class AuthService extends DataService {
//   login = (data: { email: string; password: string }) =>
//     this.post('/auth/login', data);

//   register = (data: any, config: any) => {
//     return this.post('/auth/register', data);
//   };

//   forgottenPassword = (data: any) => {
//     return this.post('/auth/forgottenPassword', data);
//   };
// }
class AuthenticationService {
  private prefix: string;
  constructor() {
    this.prefix = '';
  }

  public async login(data: Record<string, unknown>) {
    return DatabaseService.fetchData<AuthUser | undefined>({
      url: `signin`,
      method: 'post',
      data,
    });
  }
}

export default new AuthenticationService();
