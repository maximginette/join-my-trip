import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { UserService } from '../../services/user-service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  title = 'join-my-trip';
  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {
  }
  ngOnInit(): void {
    // const myObservable = Observable.create(() => {
    //
    // })
    const numbers = interval(1000);
    numbers.subscribe((number) => {
        console.log(number);
    });
    this.fetchId();
    this.userService.userActivated.next('heallo');
  }
  fetchId() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
  }
}
