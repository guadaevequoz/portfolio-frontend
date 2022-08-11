import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private dialog: MatDialog,
    public auth: AuthService,
    private flash: FlashMessagesService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '25%',
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  logout(): void {
    this.auth.logout();
    this.flash.show('Sesión cerrada', {
      cssClass: 'alert-success',
      timeout: 3000,
    });
  }
}

@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.html',
  styleUrls: ['./login.component.css'],
})
export class LoginDialogComponent implements OnInit {
  form: FormGroup;
  loginError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private flash: FlashMessagesService
  ) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      deviceInfo: this.formBuilder.group({
        deviceId: '',
        deviceType: '',
        notificationToken: '',
      }),
    });
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  get Username() {
    return this.form.get('username');
  }

  get Password() {
    return this.form.get('password');
  }

  onSubmit(event: Event) {
    event.preventDefault;
    let appUser = new Usuario(
      this.form.value.username,
      this.form.value.password
    );
    this.auth.login(appUser).subscribe(
      (data) => {
        this.dialogRef.close();
        this.flash.show('Sesión iniciada', {
          cssClass: 'alert-success',
          timeout: 3000,
        });
      },
      (error) => {
        this.loginError = true;
      }
    );
  }
}
