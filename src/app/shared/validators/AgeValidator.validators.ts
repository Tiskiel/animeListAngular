import { AbstractControl, ValidatorFn } from "@angular/forms";

export function AgeValidator(): ValidatorFn {

    return (control: AbstractControl) => {

        let today: Date = new Date()
        let date: Date = new Date(control.value)
        if (date === null) return null
        if (today.getFullYear() - date.getFullYear() < 13) return { error: 'Votre âge doit être suppérieur ou égal à 13ans' }
        return null
    }
}
