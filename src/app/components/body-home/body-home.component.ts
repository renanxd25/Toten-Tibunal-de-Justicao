import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InicioComponent } from '../inicio/inicio.component';


@Component({
  selector: 'app-body-home',
  templateUrl: './body-home.component.html',
  styleUrls: ['./body-home.component.scss']
})
export class BodyHomeComponent implements OnInit {



  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }
  openModal() {
     this.dialogRef.open(InicioComponent);
  }
 


 

}
