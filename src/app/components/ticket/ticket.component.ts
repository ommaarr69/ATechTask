import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
  qrData: string = 'https://www.primefaces.org/primeng-v14-lts';

  constructor() {

  }

  ngOnInit() {
  }

  copyToClipboard() {
    const textToCopy = (document.getElementById('copyText') as HTMLElement).innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Text copied to clipboard');
      // You can show a success message here if needed
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      // You can show an error message here if needed
    });
  }
}
