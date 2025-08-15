import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerService } from 'ngx-spinner';
import { ILog } from '../../core/interface/i-log';
import { UserDataService } from '../../core/services/user-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    ToastModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['../../../styles/shared-forms-style.css'],
  providers: [MessageService],
})
export class LoginComponent {
  constructor(
    private _authservice: AuthService,
    private _messageService: MessageService,
    private _ngxSpinnerService: NgxSpinnerService,
    private router: Router,
    private _userData: UserDataService
  ) {
    this.InitFormControls();
    this.InitFormGroupe();
  }
  // ###########
  email!: FormControl;
  password!: FormControl;
  loginForm!: FormGroup;
  // ###########
  InitFormControls(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }
  // ###########
  InitFormGroupe(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }
  // ###########
  sumbit() {
    if (this.loginForm.valid) {
      this.registrionAPI(this.loginForm.value);
      this.loginForm.reset();
      Object.keys(this.loginForm.controls).forEach((key) => {
        this.loginForm.get(key)?.markAsPristine();
        this.loginForm.get(key)?.markAsUntouched();
        this.loginForm.get(key)?.updateValueAndValidity();
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  // ###########
  registrionAPI(data: ILog): void {
    this._ngxSpinnerService.show();

    this._authservice.logIn(data).subscribe({
      next: (response) => {
        this.show(
          'success',
          'loged in Successful',
          'Your account has been Login successfully!'
        );
        this._userData.userName.next(response.name);
        localStorage.setItem('username', response.name);
        localStorage.setItem('token', response._id);
        this.router.navigate(['home']);
        this._ngxSpinnerService.hide();
      },
      error: (err) => {
        this.show('error', 'Login Failed', 'User Not Found');
        this._ngxSpinnerService.hide();
      },
    });
  }
  // ###########
  show(severity?: string, summary?: string, detail?: string) {
    this._messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }
}
