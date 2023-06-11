import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-register',
  templateUrl: './update-register.page.html',
  styleUrls: ['./update-register.page.scss'],
})
export class UpdateRegisterPage implements OnInit {

  registerId: string | null = ''
  titulo: string = ''
  descripcion: string = ''
  done: boolean = false
  constructor(private activatedroute: ActivatedRoute, private http: HttpClient) { }

  async ngOnInit() {
    this.registerId = this.activatedroute.snapshot.paramMap.get('id')
    this.getRegister()
  }

  getRegister() {
    this.http.get<any>(`https://uee1uk2o7k.execute-api.us-east-1.amazonaws.com/StarWars/${this.registerId}`).subscribe(res => {
      const { titulo, descripcion, done } = res.body;
      this.titulo = titulo
      this.descripcion = descripcion
      this.done = done
    })
  }

  guardar() {
    this.http.patch<any>(`https://uee1uk2o7k.execute-api.us-east-1.amazonaws.com/StarWars/${this.registerId}`, {
      "titulo": this.titulo,
      "descripcion": this.descripcion,
      "done": this.done
    }).subscribe(res => {
      this.titulo = ''
      this.descripcion = ''
      this.done = false
    })
  }
}
