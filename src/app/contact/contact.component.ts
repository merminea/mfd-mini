import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Newsletter{
    contactname: string;
    contactemail: string;
    contactmessage: string;
}

@Component({
    templateUrl: './app/contact/contact.component.html'
})

export class ContactComponent implements OnInit{
    model:Newsletter = new Newsletter();
    hasBeenSubmitted: boolean;

    ngOnInit(){
        this.model.contactname ='Your name...';
        this.model.contactemail ='Your e-mail...';
        this.model.contactmessage ='Your text...';
        this.hasBeenSubmitted = false;
    }
    
    register(form:NgForm, event:Event){
        event.preventDefault();
        this.hasBeenSubmitted = true;
    }
}