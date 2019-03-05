import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course';

  public name: string;

  public greeter() {
    alert('Hello ' + this.name);
  }
}
