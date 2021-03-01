import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-actualizar-autos',
  templateUrl: './actualizar-autos.component.html',
  styleUrls: ['./actualizar-autos.component.css']
})
export class ActualizarAutosComponent implements OnInit {

  constructor(
    private router: Router, 
    private auto: AutosService,
    private route: ActivatedRoute
  ) { }

  actualizarAuto: any = {
    marca: '',
    modelo: 0,
    color: '',
    precio: 0
  }

  ngOnInit(): void {
    this.consultaAuto()
  }

  consultaAuto(){
    let id = this.route.snapshot.params.id
    this.auto.listaAuto(id).subscribe(
      (res) => {
        this.actualizarAuto = res
      },
      (err)=>{ 
        console.log(err)
      }
    )
  }

  actualizar(){
    //console.log("Nuevo auto ",this.nuevoAuto)
    this.auto.editarAuto(this.actualizarAuto).subscribe(
      (res) => {
        console.log(res)
        this.router.navigate(['/listar'])
      },
      (err) => {
        console.log(err)
      }
    )
  }



}
