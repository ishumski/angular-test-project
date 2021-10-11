import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ServerComponent } from './server/server.component'
import { WarningComponent } from './warning-alert/warning-alert.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component'

@NgModule({
  declarations: [AppComponent, ServerComponent, WarningComponent, SuccesAlertComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent, ServerComponent, WarningComponent, SuccesAlertComponent]
})
export class AppModule {}
