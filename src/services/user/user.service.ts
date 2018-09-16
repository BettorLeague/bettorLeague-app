import { environment } from '../../environments/environment';
import { UserModel } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ContestModel } from '../../models/bettor/contest.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  currentUser: UserModel = null;
  currentUserPublicContests: ContestModel[] = null;
  currentUserPrivateContests: ContestModel[] = null;

  currentFilteredPublicContests: ContestModel[] = null;
  currentFilteredPrivateContests: ContestModel[] = null;

  constructor(private http: HttpClient) { }

  public getUser(): Observable<any> {
    return this.http.get(this.baseUrl + `/api/auth/user`);
  }

  public getUserContests(type): Observable<any> {
    return this.http.get(this.baseUrl + `/api/user/contest` + (type ? `?type=` + type : ``));
  }

  public contestSubscribe(contestId): Observable<any> {
    return this.http.post(this.baseUrl + `/api/user/contest/` + contestId, null);
  }

  public contestUnSubscribe(contestId): Observable<any> {
    return this.http.patch(this.baseUrl + `/api/user/contest/` + contestId, null);
  }


  public initUser() {
    let promise1 = this.getUser().toPromise().then(res => { this.currentUser = res });
    let promise2 = this.getUserContests("PUBLIC").toPromise().then(res => { this.currentUserPublicContests = this.currentFilteredPublicContests = res; });
    let promise3 = this.getUserContests("PRIVATE").toPromise().then(res => { this.currentUserPrivateContests = this.currentFilteredPrivateContests = res; });
    return Promise.all([promise1, promise2, promise3]);
  }
}
