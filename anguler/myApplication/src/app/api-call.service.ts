import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
 

  constructor(private httpClient : HttpClient) { }

  postApiCall(formData:any){
    return this.httpClient.post("http://localhost:3000/admin",formData);
   }

   getUserData() {
    return this.httpClient.get("http://localhost:3000/admin");
  }
}
