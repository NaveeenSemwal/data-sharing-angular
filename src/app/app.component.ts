import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  // Demo of Input and Output directive

  onServerAdded(srvData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: srvData.name,
      content: srvData.content
    });
  }

  onBlueprintAdded(bluePrintData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.name,
      content: bluePrintData.content
    });
  }


}
