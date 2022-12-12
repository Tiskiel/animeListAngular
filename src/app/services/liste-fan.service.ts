import { Injectable } from '@angular/core';
import { Fan } from '../shared/models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class ListeFanService {
  listFan: Fan[] = []

  constructor() { }

  addFan(fan: Fan) {
    fan._id = this.listFan.length + 1
    this.listFan.push(fan)
  }

  deleteFan(index: number) {
    this.listFan.splice(index, 1)
  }

  updateFan(index: number, fan: Fan) {
    let fanIndex = this.listFan.findIndex(f => f._id === index)

    if (fanIndex !== -1) {
      this.listFan[fanIndex] = fan
    }

  }

  getFan(index: number): Fan {
    return this.listFan[index]
  }
}
