import { Component } from '@angular/core';
import { HttpClientService } from './services/http-client.service';
import { RegisterModel } from './auth/Model/registerModel';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoUI';
  flag: boolean = true;

  constructor() {
  }

  apply(value: string) {
    this.flag = value == "login" ? true : false;
  }
}
