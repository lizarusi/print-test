import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor( private http: HttpClient) {}
  ngOnInit() {
    const headers = new HttpHeaders();
    const url = 'https://boarding.checkin-gurus.com/production/20171025/773f4f94b8d07354edf8860481fa832e/boarding-ps101-kbp-ams-26oct17-atamanchuk-andrii.pdf';
    // const url = https://boarding.checkin-gurus.com/production/20171025/773f4f94b8d07354edf8860481fa832e/boarding-ps101-kbp-ams-26oct17-atamanchuk-andrii.pdf'
    // e.g localhost:3000 + "/download?access_token=" + "sample access token";
    this.http.get(url, { responseType: 'blob' as 'blob'}).subscribe(
      (response) => { // download file
        const blob = new Blob([response], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(blob);
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = blobUrl;
        document.body.appendChild(iframe);
        iframe.contentWindow.print();
      });
  }
}
