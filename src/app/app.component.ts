import { Component, VERSION } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Rado', 'radrabik@gmail.com', 11122333, '', 'morning', true)
}
