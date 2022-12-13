import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListeFanService } from 'src/app/services/liste-fan.service';
import { FormTemplate } from 'src/app/shared/utils/formTemplate';



@Component({
  selector: 'app-form-fan',
  templateUrl: './form-fan.component.html',
  styleUrls: ['./form-fan.component.scss']
})
export class FormFanComponent {

  fanForm!: FormGroup

  constructor(
    private builder: FormBuilder,
    private fanlist: ListeFanService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.fanForm = FormTemplate(this.builder, null)
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
    this.router.navigate(['home'])
  }
}
