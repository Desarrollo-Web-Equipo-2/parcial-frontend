import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

    hidePassword: boolean = true;
    formRegister = new FormGroup({
            name: new FormControl('', Validators.required),
            surname: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.email, Validators.required]),
            password: new FormControl('', Validators.required),
            confirmPass: new FormControl('', Validators.required)
        }, {
            validators: [this.matchPasswords('password', 'confirmPass')]
        }
    );

    constructor(private userService: UserService,
                private router: Router,
                private loadingCtrl: LoadingController,
                private alert: AlertController) {
    }

    async register() {
        const loading = await this.loadingCtrl.create({
            message: 'Creando cuenta...',
        });

        loading.present();
        this.userService.register(this.formRegister.value.email!, this.formRegister.value.password!).subscribe({
            next: async () => {
                loading.dismiss();
                this.formRegister.reset();
                this.router.navigate(['/login']);
                (await this.alert.create({
                    header: '¡Bienvenido!',
                    message: 'Se ha registrado exitosamente.',
                    buttons: ['Cerrar']
                })).present();
            },
            error: async (error) => {
                loading.dismiss();
                console.log(error);
                (await this.alert.create({
                    header: 'Error',
                    message: error.error.msg,
                    buttons: ['Cerrar']
                })).present();
            }
        })
    };

    matchPasswords(pass: string, confirmPass: string) {
        return (formGroup: AbstractControl): ValidationErrors | null => {

            const pass1 = formGroup.get(pass)?.value;
            const pass2 = formGroup.get(confirmPass)?.value;

            if (pass1 !== pass2) {
                formGroup.get(confirmPass)?.setErrors({noMatch: true})
                return {noMatch: true};
            }

            formGroup.get(confirmPass)?.setErrors(null)
            return null;
        }
    }

}
