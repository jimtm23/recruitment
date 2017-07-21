import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {

	isLoggedin = this.authenticationService.isLoggedIn();

	constructor(
        private authenticationService: AuthenticationService,
        private router: Router) { }

	ngOnInit() {
        // reset login status
        this.authenticationService.validate()
    }
}
