import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/global-services/global.service';
import { UserDetails } from '../Genaral-Models/UserDetails.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private GlobleServic: GlobalService) { }

  Register(data: UserDetails){
    return this.GlobleServic.PostRequest(data, `${this.GlobleServic.primaryAPI}User/Insert`);
  }

}
