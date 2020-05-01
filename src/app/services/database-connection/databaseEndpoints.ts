import { environment } from '../../../environments/environment';

export class DatabaseEndpoints {
  public static rootURL = `/${environment.apiUrl}api/`;

  public static articles = `${DatabaseEndpoints.rootURL}articles/`;
  public static categories = `${DatabaseEndpoints.rootURL}categories/`
}
