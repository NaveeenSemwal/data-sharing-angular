import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {

  // Alias for Input property
  @Input('srvElement') element: { name: string, type: string, content: string }

}
