import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServicioDateService } from '../../shared/servicio-date.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit, OnDestroy{
  public visible = true;
  public fecha = new Date()
  public fechaObservable: Observable<Date>;
  private suscripcion: Subscription;

  constructor(public servicio: ServicioDateService) { }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  };


  ngOnInit(): void { 
  this.suscripcion = this.servicio.getFecha().subscribe(valor => {
    console.log("metodo next ejecutado");
    this.fecha = valor;
  });
  this.fechaObservable = this.servicio.getFecha();
}
}



