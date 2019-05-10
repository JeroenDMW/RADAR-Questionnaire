import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ToastController } from 'ionic-angular'

import { Item, Response } from '../../../../../shared/models/question'

let uniqueID = 0

@Component({
  selector: 'radio-input',
  templateUrl: 'radio-input.component.html'
})
export class RadioInputComponent implements OnInit {
  @Output()
  valueChange: EventEmitter<number> = new EventEmitter<number>()

  @Input()
  responses: Response[]
  @Input()
  currentlyShown

  value: number = null
  uniqueID: number = uniqueID++
  name = `radio-input-${this.uniqueID}`
  items: Item[] = Array()

  constructor(public toastController: ToastController) {}

  ngOnInit() {
    this.responses.map((item, i) => {
      const codeChecked = this.checkCode(item.code)
      this.items.push({
        id: `radio-${this.uniqueID}-${i}`,
        response: item.label,
        value: codeChecked,
        description: item.description
      })
    })
  }

  checkCode(code) {
    if (code.includes('\r')) {
      return code.substr(2)
    }
    return code
  }

  onInputChange(event) {
    this.valueChange.emit(+event.target.value)
  }

  showDescription(text) {
    const toast = this.toastController.create({
      message: text,
      duration: 4000
    })
    toast.present()
  }
}
