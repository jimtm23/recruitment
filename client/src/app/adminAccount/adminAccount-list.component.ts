import {Component, OnInit} from '@angular/core';
import {AdminAccountService} from './adminAccount.service';
import {AdminAccount} from './adminAccount';

@Component({
  selector: 'adminAccount-list',
  templateUrl: './adminAccount-list.component.html'
})
export class AdminAccountListComponent implements OnInit {

  adminAccountList: AdminAccount[] = [];

  constructor(private adminAccountService: AdminAccountService) { }

  ngOnInit() {
    this.adminAccountService.list().subscribe((adminAccountList: AdminAccount[]) => {
      this.adminAccountList = adminAccountList;
    });
  }
}
