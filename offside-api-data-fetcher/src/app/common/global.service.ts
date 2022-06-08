import { SportmonksApi } from 'sportmonks';

export class GlobalService {
  static sportmonks: SportmonksApi;
  constructor() {
    GlobalService.sportmonks = new SportmonksApi(
      process.env.SPORTMONKS_API_TOKEN,
    );
    console.log(GlobalService.sportmonks);
  }
}
