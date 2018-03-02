import { AbstractControl } from '@angular/forms';
import { SignupService } from '../signup.service';

export class ValidateEmailNotTaken {
    static createValidator(signupService: SignupService) {
        return (control: AbstractControl) => {
            return signupService.checkEmailNotTaken(control.value).map(res => {
                return res ? null : { emailTaken: true };
            });
        };
    }
}