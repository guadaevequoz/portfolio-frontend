import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Habilidad } from 'src/app/models/habilidad';
import { AuthService } from 'src/app/services/auth.service';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  habilidadItems: Array<Habilidad> = [];

  constructor(
    private service: HabilidadesService,
    public auth: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.service.getHabilidades().subscribe(
      (data: Array<Habilidad>) =>
        (this.habilidadItems = data.sort((a: Habilidad, b: Habilidad) => {
          return b.porcentaje - a.porcentaje;
        }))
    );
  }

  add() {
    const dialogRef = this.dialog.open(HabilidadesCreate, {
      width: '35%',
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  delete(item: Habilidad) {
    this.service
      .deleteHabilidad(item.id)
      .subscribe(() => window.location.reload());
  }

  edit(item: Habilidad) {
    const dialogRef = this.dialog.open(HabilidadesCreate, {
      width: '35%',
      data: item,
    });

    dialogRef.afterClosed().subscribe(() => {});
  }
}

@Component({
  selector: 'habilidad-item',
  templateUrl: './habilidades-item.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesItem implements OnInit {
  @Input() item?: any;

  constructor() {}

  ngOnInit(): void {}
}

@Component({
  selector: 'habilidades-create',
  templateUrl: './habilidades-create.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesCreate {
  skill: Habilidad = new Habilidad(0, '', 0, '', '');
  titulo: String = 'Agregar habilidad';
  constructor(
    private service: HabilidadesService,
    public dialogRef: MatDialogRef<HabilidadesCreate>,
    @Inject(MAT_DIALOG_DATA) private data?: Habilidad
  ) {
    if (data) {
      this.skill = data;
      this.titulo = 'Editar habilidad';
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.data) {
      this.service.editHabilidad(this.skill).subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
      });
    } else {
      this.service.addHabilidad(this.skill).subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
      });
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
