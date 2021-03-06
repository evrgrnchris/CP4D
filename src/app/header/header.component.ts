import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:string=null;
  constructor(private authService:AuthService) {
    
   }

  ngOnInit() {
    //this.user = this.authService.getUser();
  }

  

  logout(){
    this.authService.logout();
  }

}
