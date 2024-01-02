import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  dataList: Array<any> = [];

  schedule: {
    branch: any;
    selectedOption: any;
    keepForText: string;
    keepForText2: string;
  } = {
    branch: '',
    selectedOption: '',
    keepForText: '',
    keepForText2: '',
  };
  constructor() {
    this.dataList = [
      { color: 'red', name: 'Decline' },
      { color: 'green', name: 'Answer' },
      { color: 'green', name: 'Approve' },
    ];
  }
  activeBlock: string | null = null;

  showText(block: string): void {
    this.activeBlock = block;
  }
}
