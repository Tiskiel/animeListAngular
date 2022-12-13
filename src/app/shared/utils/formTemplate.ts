import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Fan } from "../models/fan.model";
import { AgeValidator } from "../validators/AgeValidator.validators";

export function FormTemplate(builder: FormBuilder, objet: Fan | null): FormGroup {
    console.log(objet);

    return builder.group({
        lastname: [(objet) ? objet.lastname : "", Validators.required],
        firstname: ["", Validators.required],
        email: ["", [Validators.email, Validators.required]],
        password: ["", [Validators.required, Validators.max(25), Validators.min(8)]],
        birthdate: ["", [Validators.required, AgeValidator()]],
        animeList: builder.array([])
    })
}
