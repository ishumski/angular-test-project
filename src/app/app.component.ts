import { Component } from '@angular/core'

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverElements = [{ type: 'server', name: 'LOL', content: 'UIIII' }]

  // onServerAdded( serverData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   })
  //   console.log(this.serverElements)
  // }

  // onAddBlueprintAdded(blueprintData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   })
  //   console.log(this.serverElements)
  // }

  oddNumbers: number[] = []
  evenNumbers: number[] = []

  onIntervalFired(firedNumber: number) {
    console.log(firedNumber)
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber)
    } else {
      this.oddNumbers.push(firedNumber)
      console.log(this.oddNumbers)
    }
  }
}
