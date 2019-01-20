import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { mimeType } from '../../services/mime-type.validator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  imagePreview: string;
  constructor(private server: ServerService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3) ]
      }),
      author: new FormControl(null, {
        validators: [Validators.required]
      }),
      date: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }
  createTrip() {
    this.server.api('post', 'http://localhost:3000/trips', this.form.value)
      .subscribe(resp => {
        if (resp) {
          this.router.navigate(['/']);
        }
      });
    this.form.reset();
  }
  // createTrip(form) {
  //   this.server.api('post', 'http://localhost:3000/trips', form.value)
  //     .subscribe(resp => {
  //     console.log(resp);
  //   });
  // }
  handleImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      // console.log(reader)
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
    // console.log(file);
    // console.log(this.form);
  }
}
