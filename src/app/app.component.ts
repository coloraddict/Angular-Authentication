import { Component } from '@angular/core';
import { DataService } from './data.service';
import { AuthenticationService } from './authentication.service'

@Component({
    selector: 'app-root',
    templateUrl: "./app.component.html"
})
export class AppComponent {

    constructor(private dataService: DataService, public auth: AuthenticationService) { }

    // getAllBooks(){
    //     this.dataService.getAllBooks().subscribe(books => {
    //         console.log(books);            
    //     })
    // }

}