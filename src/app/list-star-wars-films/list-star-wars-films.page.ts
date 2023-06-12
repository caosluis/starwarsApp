import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-star-wars-films',
  templateUrl: './list-star-wars-films.page.html',
  styleUrls: ['./list-star-wars-films.page.scss'],
})
export class ListStarWarsFilmsPage implements OnInit {

  filmsList: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(`https://uee1uk2o7k.execute-api.us-east-1.amazonaws.com/translationStarWars_films`).subscribe(res => {
      this.filmsList = res
    })
  }

}
