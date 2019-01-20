import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from './services/server.service';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private server: ServerService,
    private auth: AuthService,
  ) {
  }
  ngOnInit() {
    this.auth.autoAuthUser();
  }

  goToProfile() {
    this.router.navigate(['/profile']);
    // this.router.navigate(['/profile'], {relativeTo: this.route});
    console.log(this.route);
  }
  // sendServers() {
  //   this.server.storeServers(this.servers)
  //     .subscribe(
  //       (response) => console.log(response),
  //       (error) => console.log(error),
  //     );
  // }
  // getServers() {
  //   this.server.getServers()
  //     .subscribe(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => console.log(error),
  //     );
  // }
}
