import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core'

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input() element: {
    type: string
    name: string
    content: string
  }

  constructor() {
    console.log('constructor')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onchange')
    console.log(changes)
  }

  ngOnInit() {
    console.log('on Init')
  }

  ngDoCheck() {
    console.log('checked')
  }
}
