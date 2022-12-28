import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicioDateService } from '../../shared/servicio-date.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit, OnDestroy{
  public suma = 0;
  suma$ : Subscription;

  constructor(private servicio: ServicioDateService) { }
  ngOnDestroy(): void {
    this.suma$.unsubscribe();
  }


  ngOnInit(): void {
   this.suma$ = this.servicio.getFecha().subscribe(_ => {
    this.suma++;
   });
  }

}
