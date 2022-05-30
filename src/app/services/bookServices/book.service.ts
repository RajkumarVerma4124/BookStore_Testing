import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private httpService: HttpService) { 
    this.token = localStorage.getItem('token')
  }

  getallbooks() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.getService('/Book/GetAll', true, header)
  }

  getbook(bookId: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.getService('/Book/Get?bookId=' + bookId, true, header)
  }

  addFeedback(reqData: any) {
    console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postService('/Feedback/Add', reqData, true, header);
  }

  getAllFeedback(bookId: any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // 'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.getService('/Feedback/GetAll?bookId=' + bookId, false, header)
  }
}
