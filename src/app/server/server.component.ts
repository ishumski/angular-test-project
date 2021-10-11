import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      p {
        font-size: 20px;
        font-weight: 700;
        color: pink;
        text-transform: capitalize;
      }
    `
  ]
})
export class ServerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
