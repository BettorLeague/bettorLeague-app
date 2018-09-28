import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { SignupRequestModel } from './registerRequest.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  registerFormErrors: any;

  registerRequest: SignupRequestModel;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
  ) {

    this.registerFormErrors = {
      username: {},
      email: {},
      password: {},
      passwordConfirm: {}
    };
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, confirmPassword]]
    });

    this.registerForm.valueChanges.subscribe(() => {
      this.onRegisterFormValuesChanged();
    });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Votre compte à été crée',
      duration: 2000
    });
    toast.present();
  }

  onRegisterFormValuesChanged() {
    for (const field in this.registerFormErrors) {
      if (!this.registerFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.registerFormErrors[field] = {};

      // Get the control
      const control = this.registerForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.registerFormErrors[field] = control.errors;
      }
    }
  }
  onSubmit() {
    this.registerRequest = new SignupRequestModel();
    this.registerRequest.password = this.registerForm.value.password;
    this.registerRequest.username = this.registerForm.value.username;
    this.registerRequest.email = this.registerForm.value.email;

    this.authService.attemptSignUp(this.registerRequest)
      .subscribe(() => {
        this.presentToast().then(() => {
          this.router.navigate(['app']);
        });
      },
        error => {
          // afficher une popup d'erreur
        });

  }
}

function confirmPassword(control: AbstractControl) {
  if (!control.parent || !control) {
    return;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('passwordConfirm');

  if (!password || !passwordConfirm) {
    return;
  }

  if (passwordConfirm.value === '') {
    return;
  }

  if (password.value !== passwordConfirm.value) {
    return {
      passwordsNotMatch: true
    };
  }

}
