import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListeFanService } from 'src/app/services/liste-fan.service';
// import { FormTemplate } from 'src/app/shared/utils/formTemplate';
import { AgeValidator } from 'src/app/shared/validators/AgeValidator.validators';


@Component({
  selector: 'app-form-fan',
  templateUrl: './form-fan.component.html',
  styleUrls: ['./form-fan.component.scss']
})
export class FormFanComponent {

  fanForm!: FormGroup

  constructor(
    private builder: FormBuilder,
    private fanlist: ListeFanService
  ) { }


  ngOnInit(): void {
    // FormTemplate(this.fanForm, this.builder)
    // let animeArray = FormTemplate(this.fanForm, this.builder)
    this.fanForm = this.builder.group({
      lastname: ["", Validators.required],
      firstname: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, Validators.max(25), Validators.min(8)]],
      birthdate: ["", [Validators.required, AgeValidator]],
      animeList: this.builder.array([])
    })
    let animeArray = this.fanForm.controls["animeList"] as FormArray
    animeArray.push(new FormControl(null, Validators.required))
  }

  getAnimeFanList(): FormArray {
    return this.fanForm.controls['animeList'] as FormArray
  }

  addAnime() {
    this.getAnimeFanList().push(new FormControl(null, Validators.required))
  }

  submitForm() {
    this.fanlist.addFan(this.fanForm.value)
    console.log(this.fanForm.value);

  }
}
