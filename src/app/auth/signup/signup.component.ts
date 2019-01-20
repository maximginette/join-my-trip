import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  handleSignUp(form) {
    if (form.invalid) {
      return;
    }
    this.auth.createUser(form.value.email, form.value.password);
  }
}
