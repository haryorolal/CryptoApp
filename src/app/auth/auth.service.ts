import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icomment } from '../comment/comment.model';
import { environment } from 'src/environments/environment';
import { Isubmit } from '../submit/submit.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) { }

  getAllComments():Observable<Icomment>{
    return this.http.get<Icomment>(`${environment.api}/getcomments`);
  }

  postComment(comment){
    //return this.http.post<Icomment>(`${environment.api}/postcomments`, comment);
    //return this.http.post(`https://www.ovitfleet.com.ng/api/ovitfleet.php`, comment, {responseType: 'text'} )
    return this.http.post(`https://localhost:8012/api/comment.php`, comment, {responseType: 'text'});
  }

  postSubmit(submit){
    //return this.http.post<Isubmit>(`${environment.api}/postback`, submit);
    return this.http.post(`https://www.ovitfleet.com.ng/api/ovitfleet.php`, submit, {responseType: 'text'} )
  }

  postCandidate(candidate){
    //return this.http.post(`http://localhost:8012/api/fleetbackend.php`, candidate, {responseType: 'text'});
    return this.http.post(`https://www.ovitfleet.com.ng/api/ovitfleet.php`, candidate, {responseType: 'text'} )
    
  }

  postcontact(contact){
    //return this.http.post(`http://localhost:8012/api/contact.php`, contact, {responseType: 'text'});
    return this.http.post(`https://www.ovitfleet.com.ng/api/contact.php`, contact, {responseType: 'text'});
  }

  










}
