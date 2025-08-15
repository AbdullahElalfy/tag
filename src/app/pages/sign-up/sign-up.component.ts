import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { IRege } from '../../core/interface/i-rege';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDataService } from '../../core/services/user-data.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    ReactiveFormsModule,
    ToastModule,
    NgxSpinnerModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../../styles/shared-forms-style.css'],
  providers: [MessageService],
})
export class SignUpComponent {
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
  name!: FormControl;
  email!: FormControl;
  password!: FormControl;
  rePassword!: FormControl;
  signUpForm!: FormGroup;
  // ###########
  passwordMatchValidator: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    return password === rePassword ? null : { passwordMismatch: true };
  };
  // ###########
  InitFormControls(): void {
    this.name = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]);
    this.rePassword = new FormControl('', [Validators.required]);
  }
  // ###########
  InitFormGroupe(): void {
    this.signUpForm = new FormGroup(
      {
        name: this.name,
        email: this.email,
        password: this.password,
        rePassword: this.rePassword,
      },
      { validators: this.passwordMatchValidator }
    );
  }
  // ###########
  sumbit() {
    if (this.signUpForm.valid) {
      this.registrionAPI(this.signUpForm.value);
      this.signUpForm.reset();
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
  // ###########
  registrionAPI(data: IRege): void {
    this._ngxSpinnerService.show();

    this._authservice.signUp(data).subscribe({
      next: (response) => {
        this.show(
          'success',
          'Registration Successful',
          'Your account has been created successfully!'
        );
        this._userData.userName.next(response.name);
        localStorage.setItem('username', response.name);
        localStorage.setItem('token', response._id);
        this.router.navigate(['home']);
        this._ngxSpinnerService.hide();
      },
      error: (err) => {
        this.show(
          'error',
          'Registration Failed',
          'An error occurred while creating your account. Please try again.'
        );
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
