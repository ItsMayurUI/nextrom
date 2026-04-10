import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendWhatsApp(){

const message = `Hi Nexstrom, I’m interested in your services. Please share details.`;

const phone = "919970078587";

window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');

}

}
