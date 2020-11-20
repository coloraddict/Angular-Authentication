import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(private http: HttpClient){

    }

    getAllBooks(){
        return this.http.get("http://localhost:5000/api/v1/resources/books/all");
    }

}
