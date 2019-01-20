import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;
  isAuth: boolean;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isAuth = this.auth.getIsAuth();
    this.authSubscription = this.auth.getAuthStatusListener().subscribe(isAuth => {
        this.isAuth = isAuth;
    });
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
  logout() {
    this.auth.logout();
  }
}
