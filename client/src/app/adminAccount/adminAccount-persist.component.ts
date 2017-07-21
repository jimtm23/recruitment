import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AdminAccount} from './adminAccount';
import {AdminAccountService} from './adminAccount.service';
import {Response} from "@angular/http";


@Component({
  selector: 'adminAccount-persist',
  templateUrl: './adminAccount-persist.component.html'
})
export class AdminAccountPersistComponent implements OnInit {

  adminAccount = new AdminAccount();
  create = true;
  errors: any[];
  

  constructor(private route: ActivatedRoute, private adminAccountService: AdminAccountService, private router: Router) {}

  ngOnInit() {
    this.adminAccount.accountLocked = false;
    this.adminAccount.accountExpired = false;
    this.adminAccount.passwordExpired = false;
    this.adminAccount.enabled = false;
    this.route.params.subscribe((params: Params) => {
      if (params.hasOwnProperty('id')) {
        this.adminAccountService.get(+params['id']).subscribe((adminAccount: AdminAccount) => {
          this.create = false;
          this.adminAccount = adminAccount;
        });
      }
    });
  }

  save() {
    this.adminAccountService.save(this.adminAccount).subscribe((adminAccount: AdminAccount) => {
      this.router.navigate(['/adminAccount', 'show', adminAccount.id]);
    }, (res: Response) => {
      const json = res.json();
      if (json.hasOwnProperty('message')) {
        this.errors = [json];
      } else {
        this.errors = json._embedded.errors;
      }
    });
  }
}
