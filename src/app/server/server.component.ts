import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .textColor {
        color: white;
      }
    `
  ]
})
export class ServerComponent {
  messageIsVivible: boolean = false
  numOfClicks: Array<Date> = []
 

  showMessage() {
    this.messageIsVivible = !this.messageIsVivible
    this.numOfClicks.push(new Date())

  }

  // allowNewServer = false
  // serverCreationStatus = 'No server was created!'
  // serverName = 'TestServer'
  // serverCreated = false

  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true
  //   }, 2000)
  // }

  // onCreateServer() {
  //   this.serverCreated = !this.serverCreated
  //   this.serverCreationStatus = 'This server was created ' + this.serverName
  // }

  // onUpdatedServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value
  // }
}
