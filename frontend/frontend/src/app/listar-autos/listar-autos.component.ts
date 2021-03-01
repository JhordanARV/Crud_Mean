import { Component, OnInit } from '@angular/core';

import { AutosService } from '../autos.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  constructor(
    private router: Router, 
    private auto: AutosService
  ) { }

  listaInit:any = []
  lista:any = []
  autoMarca:any = ''

  ngOnInit(): void {
    this.auto.listarAutos().subscribe(
      (res) => {
        this.lista = res
        this.listaInit = res
      },
      (err)=>{ 
        console.log(err)
      }
    )
  }

  filtrar(){
    if(!this.autoMarca.length){ 
      this.lista = this.listaInit
    }else{
      this.lista = this.listaInit.filter(
        (list: { marca: String | any[]; }) => list.marca.includes(this.autoMarca)
      )
    }
  }

  eliminar(autoSelect:any){
    this.auto.eliminarAuto(autoSelect).subscribe(
      (res)=>{
        const index = this.lista.indexOf(autoSelect)
        if(index > -1){
          this.lista.splice(index,1)
        }
      },
      (err)=>{
      console.log(err)
      }
    )
  }

  



}
