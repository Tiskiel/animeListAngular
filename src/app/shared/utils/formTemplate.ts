import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AgeValidator } from "../validators/AgeValidator.validators";

export function FormTemplate(formList: FormGroup, builder: FormBuilder): FormArray {
    formList = builder.group({
        lastname: ["", Validators.required],
        firstname: ["", Validators.required],
        email: ["", [Validators.email, Validators.required]],
        password: ["", [Validators.required, Validators.max(25), Validators.min(8)]],
        birthdate: ["", [Validators.required, AgeValidator]],
        animeList: builder.array([])
    })
    let array = formList.controls['animeList'] as FormArray
    return array
}
