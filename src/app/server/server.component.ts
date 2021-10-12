import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  username: string = ''
  isDisabled: boolean = true

  handleChange(event: Event) {
    const value = (<HTMLInputElement>event.target).value
    value !== '' ? (this.isDisabled = false) : (this.isDisabled = true)
  }

  handleClearInput() {
    this.username = ''
    this.isDisabled=true
  }
}
