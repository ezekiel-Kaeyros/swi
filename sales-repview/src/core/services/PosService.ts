// import DatabaseService from '@/core/config/DatabaseService';
// // export default class AuthService extends DataService {
// //   login = (data: { email: string; password: string }) =>
// //     this.post('/auth/login', data);

// //   register = (data: any, config: any) => {
// //     return this.post('/auth/register', data);
// //   };

// //   forgottenPassword = (data: any) => {
// //     return this.post('/auth/forgottenPassword', data);
// //   };
// // }
// class PointOfSaleService {
//   private prefix: string;
//   constructor() {
//     this.prefix = '';
//   }

//   public async get(data: Record<string, unknown>) {
//     return DatabaseService.fetchData<AuthUser | undefined>({
//       url: `signin`,
//       method: 'post',
//       data,
//     });
//   }

// }

// export default new PointOfSaleService();
