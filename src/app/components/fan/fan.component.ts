import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListeFanService } from 'src/app/services/liste-fan.service';
import { FormTemplate } from 'src/app/shared/utils/formTemplate';

@Component({
  selector: 'app-fan',
  templateUrl: './fan.component.html',
  styleUrls: ['./fan.component.scss']
})
export class FanComponent {

  indexFan!: number
  fanForm!: FormGroup

  constructor(
    private ar: ActivatedRoute,
    private builder: FormBuilder,
    private fanlist: ListeFanService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.indexFan = this.ar.snapshot.params['id']
    this.fanForm = FormTemplate(this.builder, this.fanlist.listFan[this.indexFan])
  }

  submitForm() {
    this.fanlist.listFan[this.indexFan] = this.fanForm.value
    console.log(this.fanForm.value);
    this.router.navigate(['home'])
  }

  getAnimeFanList(): FormArray {
    return this.fanForm.controls['animeList'] as FormArray
  }

  addAnime() {
    this.getAnimeFanList().push(new FormControl(null, Validators.required))
  }

}
