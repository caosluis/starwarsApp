import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-crud',
  templateUrl: './test-crud.page.html',
  styleUrls: ['./test-crud.page.scss'],
})
export class TestCrudPage implements OnInit {

  titulo: string = ''
  descripcion: string = ''
  done: boolean = false
  registerList: any[] = []

  constructor(private http: HttpClient) { }

  enviar() {
    this.http.post<any>(`https://uee1uk2o7k.execute-api.us-east-1.amazonaws.com/StarWars`, {
      "titulo": this.titulo,
      "descripcion": this.descripcion,
      "done": this.done
    }).subscribe(res => {
      this.titulo = ''
      this.descripcion = ''
      this.done = false
      this.getRegister()
    })
  }

  deleteRegister(id: string) {
    this.http.delete<any>(`https://uee1uk2o7k.execute-api.us-east-1.amazonaws.com/StarWars/${id}`).subscribe(res => {
      this.registerList = res.body.StarWars;
      this.getRegister()
    })
  }

  getRegister() {
    this.http.get<any>(`https://uee1uk2o7k.execute-api.us-east-1.amazonaws.com/StarWars`).subscribe(res => {
      this.registerList = res.body.StarWars;
    })
  }

  ngOnInit() {
    this.getRegister()
  }

}
