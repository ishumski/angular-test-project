import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = ''
  // newServerContent = ''
  @ViewChild('serverContentInput') serverContentInput: ElementRef

  @Output() serverCreated = new EventEmitter<{
    serverName: string
    serverContent: string
  }>()

  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string
    serverContent: string
  }>()

  constructor() {}

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(serverNameInput)
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  ngOnInit(): void {}
}
