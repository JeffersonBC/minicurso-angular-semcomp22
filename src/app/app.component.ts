import { Component, OnInit, OnDestroy } from '@angular/core';
import { TesteService } from './teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  valor = 42;

  tabela = [
    {nome: 'teste1', dia: '02/03', hora: '12h45'},
    {nome: 'teste2', dia: '03/03', hora: '13h00'},
    {nome: 'teste1', dia: '02/03', hora: '12h45'},
    {nome: 'teste2', dia: '03/03', hora: '13h00'},
    {nome: 'teste1', dia: '02/03', hora: '12h45'},
    {nome: 'teste2', dia: '03/03', hora: '13h00'},
    {nome: 'teste1', dia: '02/03', hora: '12h45'},
    {nome: 'teste2', dia: '03/03', hora: '13h00'},
  ];


  constructor(
    private readonly testeService: TesteService,
  ) { }

  ngOnInit() {
    this.valor = 34;
  }

  ngOnDestroy() {
    // unsubscibe()
  }

  readValue(val: number) {
    this.valor = val;
  }

}
