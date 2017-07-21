import {Component} from '@angular/core';
import {NavService} from './nav.service';
import {OnInit} from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  applicationData: any;

  constructor(
    private navService: NavService,
    private authenticationService: AuthenticationService ) { }

  ngOnInit(): void {
    this.navService.getNavData().subscribe(res => this.applicationData = res);
  }

  /*logout() {
    this.loading = true;
    this.authenticationService.logout()
        .subscribe(result => {
            console.log(result);
            if (result === true) {
                // login successful
                this.router.navigate(['index']);
            } else {
                // login failed
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        }, error => {
          this.loading = false;
          this.error = error;
          console.log("ERROR");
        });
  }*/
}
