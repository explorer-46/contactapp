import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private myapi:ApiService) {
   this.fetchData()

   }

  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.contactData=data
      }
    )
  }


  contactData:any={}

  ngOnInit(): void {
  }

}
