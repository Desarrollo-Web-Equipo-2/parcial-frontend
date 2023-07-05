import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {


  hidePassword: boolean = true;

  formLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

  login() {
    const {email, password} = this.formLogin.value;
    this.userService.login(email, password).subscribe({
      next: async (resp: any) => {
        if (resp.token) {
          console.log("token!")
          // await this.userService.setCurrentUser(resp.user);
          this.router.navigateByUrl('/home');
        }
      },
      error: (err: any) => {
        alert(err.error.msg);
        console.log(err);
      }
    });

  }

}
