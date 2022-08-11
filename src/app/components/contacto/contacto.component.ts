import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Contacto } from 'src/app/models/contacto';
import { AuthService } from 'src/app/services/auth.service';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  contactoItems: Array<Contacto> = [];

  constructor(
    private service: ContactoService,
    public auth: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.service
      .getContacto()
      .subscribe((data: Array<Contacto>) => (this.contactoItems = data));
  }

  add() {
    const dialogRef = this.dialog.open(ContactoCreate, {
      width: '35%',
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  edit(item: Contacto) {
    const dialogRef = this.dialog.open(ContactoCreate, {
      width: '35%',
      data: item,
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  delete(item: Contacto) {
    this.service
      .deleteContacto(item.id)
      .subscribe(() => window.location.reload());
  }
}

@Component({
  selector: 'contacto-item',
  templateUrl: './contacto-item.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoItem implements OnInit {
  @Input() data?: Contacto;

  ngOnInit(): void {}

  getLink(): string {
    if (this.data?.descripcion.includes('@')) {
      return `mailto:${this.data.descripcion}`;
    } else return this.data?.descripcion ?? '';
  }
}

@Component({
  selector: 'contacto-create',
  templateUrl: './contacto-create.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoCreate {
  contacto: Contacto = new Contacto(0, '', '', '');
  titulo: string = 'Agregar contacto';

  constructor(
    private service: ContactoService,
    private dialogRef: MatDialogRef<ContactoCreate>,
    @Inject(MAT_DIALOG_DATA) private data?: Contacto
  ) {
    if (data) {
      this.contacto = data;
      this.titulo = 'Editar contacto';
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.data) {
      this.service.editContacto(this.contacto).subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
      });
    } else
      this.service.addContacto(this.contacto).subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
      });
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
