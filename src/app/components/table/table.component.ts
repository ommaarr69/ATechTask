import { Component } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { ITicketsInfo } from 'src/app/models/itickets-info';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  active: boolean = true;
  tableData: ITicketsInfo[] = [
    {
      id: 1,
      name: 'أحمد محمود',
      phoneNumber: '01134853322',
      ticketNumber: 'C-101',
      price: 50,
      cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      cinemasLocation: "صيدناوي مول , برج العرب",
      peopleCount: 2,
      purchaseCount: "مرة واحدة",
      ticket: 'تذكرة رقم 45.pdf',
      ticketDetails:'9mb . PDF'
    },
    {
      id: 2,
      name: 'محمد الغريب',
      phoneNumber: '01134853322',
      ticketNumber: 'C-102',
      price: 75,
      cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      cinemasLocation: "صيدناوي مول , برج العرب", peopleCount: 4,
      image: "Second",
      purchaseCount: "مرة واحدة",
      ticket: 'تذكرة رقم 45.pdf',
      ticketDetails:'9mb . PDF'
    },
    {
      id: 3,
      phoneNumber: '01134853322',
      name: 'محمد الغريب',
      ticketNumber: 'C-103',
      image: "third",
      price: 100,
      cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      cinemasLocation: "صيدناوي مول , برج العرب", peopleCount: 1,
      purchaseCount: "مرة واحدة",
      ticket: 'تذكرة رقم 45.pdf',
      ticketDetails:'9mb . PDF'
    }
  ];

  constructor(private fileSaverService: FileSaverService){

  }

  saveFile() {
    const fileType = 'application/pdf';
    const fileContent = 'تذكرة رقم 45';
    const blob = new Blob([fileContent], { type: fileType });
    this.fileSaverService.save(blob, 'ticket.pdf');
  }



}
