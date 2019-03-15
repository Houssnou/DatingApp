import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {} ;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /* login method */
  login () {
    console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      console.log('Successfully Logged in!');
    }, error => {
      console.log('Failed to log in!');
    });
  }

  /* logged in */
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token ;
  }

  /* lougout */
  logout() {
    localStorage.removeItem('token');
    console.log('logout!');
  }

}
