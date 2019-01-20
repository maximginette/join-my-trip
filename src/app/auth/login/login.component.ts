import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) { }
  ngOnInit() {
  }
  handleLogin(form) {
    if (form.invalid) {
      return;
    }
    this.auth.login(form.value.email, form.value.password);
  }
}
