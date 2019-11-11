import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styles: []
})
export class DownloadComponent implements OnInit {

  
  @Input() fileDownload: string;

  constructor() { }

  ngOnInit() {
  }

}
