import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../services/server.service';
@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  trip = {};
  id: string;
  constructor(private _route: ActivatedRoute,
              private server: ServerService
              ) {
    _route.params.subscribe(params => {
      const { id } = params;
      this.id = id;
    });
  }

  ngOnInit() {
    this.server.api('post', `http://localhost:3000/trips/findById`, {id: this.id})
      .subscribe(trip => {
        this.trip = trip;
      });
  }
}
