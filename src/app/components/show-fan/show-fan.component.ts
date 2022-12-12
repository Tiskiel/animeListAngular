import { Component } from '@angular/core';
import { ListeFanService } from 'src/app/services/liste-fan.service';

@Component({
  selector: 'app-show-fan',
  templateUrl: './show-fan.component.html',
  styleUrls: ['./show-fan.component.scss']
})
export class ShowFanComponent {
  constructor(
    private fanList: ListeFanService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  getFanList() {
    return this.fanList.listFan
  }
}
