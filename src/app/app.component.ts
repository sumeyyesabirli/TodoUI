import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoUI';
  flag:boolean = true


  apply(value:string){
    this.flag = value == "login"?true : false;
  }
}
