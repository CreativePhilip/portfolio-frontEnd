import {environment} from '../../../environments/environment';


export class DatabaseEndpoints {
  public static root = environment.apiUrl;
  public static apiRoot = `${DatabaseEndpoints.root}/api/`;

  public static articles = `${DatabaseEndpoints.apiRoot}articles/`;
  public static categories = `${DatabaseEndpoints.apiRoot}categories/`;
}
