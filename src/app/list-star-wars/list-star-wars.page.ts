import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-star-wars',
  templateUrl: './list-star-wars.page.html',
  styleUrls: ['./list-star-wars.page.scss'],
})
export class ListStarWarsPage implements OnInit {

  characterList: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(`https://uee1uk2o7k.execute-api.us-east-1.amazonaws.com/translationStarWars_people`).subscribe(res => {
      this.characterList = res
    })
  }
}
