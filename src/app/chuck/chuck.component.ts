import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  joke:any = "cargando ..."
  constructor(private http: Http) { }

  ngOnInit() {

   this.refresh()
  }

  refresh(){

    this.http.get("http://api.icndb.com/jokes/random/")
    .subscribe( (res:any) =>{
      this.joke = res.json().value.joke;
    })
  }

}
