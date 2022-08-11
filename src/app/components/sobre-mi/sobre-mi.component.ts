import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Informacion } from 'src/app/models/informacion';
import { AuthService } from 'src/app/services/auth.service';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
})
export class SobreMiComponent implements OnInit {
  data: Informacion = new Informacion(0, '', '', '');

  constructor(
    private service: InformacionService,
    private dialog: MatDialog,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.service
      .getInformacion()
      .subscribe((data: Informacion) => (this.data = data));
  }

  onClick() {
    const dialogRef = this.dialog.open(SobreMiCreate, {
      width: '45%',
      data: this.data,
    });

    dialogRef.afterClosed().subscribe(() => {});
  }
}

@Component({
  selector: 'sobre-mi-create',
  templateUrl: './sobre-mi-create.html',
  styleUrls: ['./sobre-mi.component.css'],
})
export class SobreMiCreate {
  info: Informacion = new Informacion(0, '', '', '');

  constructor(
    private service: InformacionService,
    @Inject(MAT_DIALOG_DATA) private data: Informacion,
    public dialogRef: MatDialogRef<SobreMiCreate>
  ) {
    this.info = data;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.service.editInformacion(this.info.id, this.info).subscribe(() => {
      this.dialogRef.close();
      window.location.reload();
    });
  }
}
