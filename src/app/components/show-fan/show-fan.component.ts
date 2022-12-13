import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ListeFanService } from 'src/app/services/liste-fan.service';
import { Fan } from 'src/app/shared/models/fan.model';
import { FormTemplate } from 'src/app/shared/utils/formTemplate';

@Component({
  selector: 'app-show-fan',
  templateUrl: './show-fan.component.html',
  styleUrls: ['./show-fan.component.scss']
})
export class ShowFanComponent {

  newAnime!: string
  formAnime!: FormGroup

  constructor(
    private fanList: ListeFanService,
    private builderFan: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.formAnime = FormTemplate(this.builderFan, null)
  }

  getFanList() {
    return this.fanList.listFan
  }

  showToggle(index: number) {

    this.fanList.listFan[index].isVisible = !this.fanList.listFan[index].isVisible

  }

  deleteAnime(indexFan: number, indexAnime: number) {
    this.fanList.deleteOneAnimeOfFanList(indexFan, indexAnime)
  }

  addOneAnime(index: number) {

    this.fanList.listFan[index].animeList.push(this.newAnime)
  }

  newFan() {
    this.router.navigate(['./form-fan'])
  }

  updatePage(index: number) {
    this.router.navigate(['home/', index])
  }
}
