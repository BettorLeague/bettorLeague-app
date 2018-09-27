import { Component, OnInit } from '@angular/core';
import { LoadingController} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationRequestModel } from './authenticationRequest.model';
import { AuthService } from '../../../services/auth/auth.service';
import { TokenStorage } from '../../../services/auth/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginRequest: AuthenticationRequestModel;
  loginForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorage,
    private loadingController: LoadingController
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Connexion en cours...',
      duration: 1000
    });
    return await loading.present();
  }

  onSubmit() {
    this.loginRequest = new AuthenticationRequestModel();
    this.loginRequest.username = this.loginForm.value.email;
    this.loginRequest.password = this.loginForm.value.password;

    this.authService.attemptAuth(this.loginRequest)
      .subscribe(data => {
        this.presentLoading().then(() => {
          this.tokenStorage.saveToken(data.token);
          this.router.navigate(['home']);
        });
      });
  }
}
