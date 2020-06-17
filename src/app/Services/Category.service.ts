import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {

    constructor(private http: HttpClient) { }
    getallmovie() {

        return this.http.get('http://localhost:9000/api/movies')
    }
    create(data) {

        return this.http.post('http://localhost:9000/api/create-category', data)
    }
    update(data) {

        return this.http.put('http://localhost:8000/api/update', data)
    }
    delete(data) {

        return this.http.delete('http://localhost:8000/api/delete/' + data.id)
    }

}