import DatabaseService from '@/core/config/DatabaseService';
import DataService from './dataService';
import { IApiResponse } from '@/core/config/ApiResponse';
import { AuthUser } from '@/core/models/Auth';
import Road from '../models/Roads';

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
class RoadsService {
  private prefix: string;
  constructor() {
    this.prefix = '';
  }

  public async get(id: string) {
    console.log(id);
    return DatabaseService.fetchData<IApiResponse<Road[]>>({
      url: `/roads/${id}`,
      method: 'get',
    });
  }

  public async updateActivityItemStatus(data: Record<string, any>) {
    return DatabaseService.fetchData<IApiResponse<Road[]>>({
      url: `/updateActivityItemStatus`,
      method: 'put',
      data,
    });
  }
  public async updateActivityItemStartTime(data: Record<string, any>) {
    return DatabaseService.fetchData<IApiResponse<Road[]>>({
      url: `/updateActivityItemStartTime`,
      method: 'put',
      data,
    });
  }

  public async updateActivityItemEndTime(data: Record<string, any>) {
    return DatabaseService.fetchData<IApiResponse<Road[]>>({
      url: `/updateActivityItemEndTime`,
      method: 'put',
      data,
    });
  }
}

export default new RoadsService();
