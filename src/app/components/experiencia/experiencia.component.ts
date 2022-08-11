import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormatterService } from 'src/app/services/formatter.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/models/experiencia';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  experienciaItems: Array<Experiencia> = [];

  constructor(
    public auth: AuthService,
    private service: ExperienciaService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.service
      .getExperiencia()
      .subscribe((data: Array<Experiencia>) => (this.experienciaItems = data));
  }

  add() {
    const dialogRef = this.dialog.open(ExperienciaCreate, {
      width: '35%',
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  edit(item: Experiencia) {
    const dialogRef = this.dialog.open(ExperienciaCreate, {
      width: '35%',
      data: item,
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  delete(item: Experiencia) {
    this.service
      .deleteExperiencia(item.id)
      .subscribe(() => window.location.reload());
  }
}

@Component({
  selector: 'experiencia-item',
  templateUrl: './experiencia-item.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaItem implements OnInit {
  @Input() data?: any;

  constructor(private dialog: MatDialog, public formatter: FormatterService) {}

  ngOnInit(): void {}
}

@Component({
  selector: 'experiencia-create',
  templateUrl: './experiencia-create.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaCreate {
  titulo: string = 'Agregar experiencia laboral';
  exp: Experiencia = new Experiencia(
    0,
    '',
    '',
    '',
    false,
    [],
    '',
    new Date(),
    new Date()
  );
  competencias: string = '';

  constructor(
    private service: ExperienciaService,
    private dialogRef: MatDialogRef<ExperienciaCreate>,
    @Inject(MAT_DIALOG_DATA) private data?: Experiencia
  ) {
    if (data) {
      this.titulo = 'Editar experiencia laboral';
      this.exp = data;
      this.competencias = data.competencias.join('. ');
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.exp.competencias = this.competencias.replace('. ', '.').split('.');
    if (this.data) {
      this.service.editExperiencia(this.exp).subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
      });
    } else
      this.service.addExperiencia(this.exp).subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
      });
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
