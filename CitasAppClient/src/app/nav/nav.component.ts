import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { IUser } from '../_models/iuser';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model: any = {}

  constructor(public accountService: AccountService, 
    private router: Router, 
    private toastr: ToastrService) {}

  ngOnInit(): void {
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login(): void {
    this.accountService.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl("/members"),
      error: error => this.toastr.error(error.error)
    })
  }

  logout(): void{
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }
}
