import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AdminAccount} from './adminAccount';
import {AdminAccountService} from './adminAccount.service';

@Component({
  selector: 'adminAccount-persist',
  templateUrl: './adminAccount-show.component.html'
})
export class AdminAccountShowComponent implements OnInit {

  adminAccount = new AdminAccount();

  constructor(private route: ActivatedRoute, private adminAccountService: AdminAccountService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.adminAccountService.get(+params['id']).subscribe((adminAccount: AdminAccount) => {
        this.adminAccount = adminAccount;
      });
    });
  }

  destroy() {
    if (confirm("Are you sure?")) {
      this.adminAccountService.destroy(this.adminAccount).subscribe((success: boolean) => {
        if (success) {
          this.router.navigate(['/adminAccount','list']);
        } else {
          alert("Error occurred during delete");
        }
      });
    }
  }

}
