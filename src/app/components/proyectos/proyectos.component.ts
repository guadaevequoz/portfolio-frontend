import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Proyecto } from 'src/app/models/proyecto';
import { AuthService } from 'src/app/services/auth.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectosItems: Array<Proyecto> = [];

  constructor(
    private service: ProyectosService,
    public auth: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.service
      .getProyectos()
      .subscribe((data: Array<Proyecto>) => (this.proyectosItems = data));
  }

  add() {
    const dialogRef = this.dialog.open(ProyectosCreate, {
      width: '35%',
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  edit(item: Proyecto) {
    const dialogRef = this.dialog.open(ProyectosCreate, {
      width: '35%',
      data: item,
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  delete(item: Proyecto) {
    this.service
      .deleteProyecto(item.id)
      .subscribe(() => window.location.reload());
  }
}

@Component({
  selector: 'proyectos-item',
  templateUrl: './proyectos-item.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosItem implements OnInit {
  @Input() data?: any;

  constructor() {}

  ngOnInit(): void {}
}

@Component({
  selector: 'proyectos-create',
  templateUrl: './proyectos-create.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosCreate {
  titulo: string = 'Agregar proyecto';
  proyecto: Proyecto = new Proyecto(0, '', '', '');

  constructor(
    private dialogRef: MatDialogRef<ProyectosCreate>,
    private service: ProyectosService,
    @Inject(MAT_DIALOG_DATA) private data?: Proyecto
  ) {
    if (data) {
      this.proyecto = data;
      this.titulo = 'Editar proyecto';
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.data) {
      this.service.editProyecto(this.proyecto).subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
      });
    } else
      this.service.addProyecto(this.proyecto).subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
      });
  }
}
