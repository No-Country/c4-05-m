import { FormGroup } from '@angular/forms';

export function passwordMatchValidator(g: FormGroup) {
    g = new FormGroup;
    return this.form.get('newPassword').value === this.form.get('confirmNewPassword').value
        ? null : { 'mismatch': true };
}