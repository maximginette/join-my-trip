import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import trips from '../helpObjects/trips';
import { ServerService } from '../../services/server.service';
import { UserService } from '../../services/user-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trips = [];
  slideCount = 1;
  constructor(
    private server: ServerService,
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.server.api('get', 'http://localhost:3000/trips')
      .subscribe((trips: string[]) => {
        console.log(trips)
        this.trips = trips;
      });
    this.userService.userActivated.subscribe((string) => {
    });
  }
  handleTrip(id) {
    this.route.navigate([`/trip/${id}`]);
  }
  handleSlide(value) {
    if (value === 'next') {
      if (this.slideCount === 4) {
        return;
      }
      this.slideCount += 1;
    } else if (value === 'prev') {
      if (this.slideCount === 1) {
        return;
      }
      this.slideCount -= 1;
    }
  }
}
