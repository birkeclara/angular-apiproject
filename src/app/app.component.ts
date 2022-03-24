import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apiproject';

  constructor(private userService: UserService) {}

 ngOnInit (): void {
   this.onGetUsers();
 }


  onGetUsers (): void {
    this.userService.getUsers().subscribe(
      function (response): void {
        return console.log(response);
      },
      (error: any) => console.log(error),
      () => console.log('Done getting users')

    );
  }

  onGetUser (): void {
    this.userService.getUser().subscribe(
      (response): void => {
        return console.log(response);
      },
      (error: any) => console.log(error),
      () => console.log('Done getting users')

    );
  }


}
