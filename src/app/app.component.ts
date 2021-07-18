import { Component, VERSION } from '@angular/core';
import { User } from './user';
import { DataService } from './data.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = false;

  userModel = new User('Rado', 'radrabik@gmail.com', 1112223334, 'I am interested in', 'morning', true)

  constructor(private dataService: DataService) {}

  validateTopic(value) {
    // ..
    console.log(value);
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }

  }

  onSubmit() {
    console.log(this.userModel);

    this.dataService.postAPI(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)

      )
  }
}
