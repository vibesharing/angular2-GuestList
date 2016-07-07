import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {guestListService} from '/app/services/guestList.service'

@Component({
template:`
<br>
<h1>Add a new Guest</h1>
<form>
    <div class="row">
        <form class="col s12">
            <div class="row">
                <div class="input-field col s4">

                    <label for="firstname">Firstname</label>
                    <input  type="text" [(ngModel)]='guest.firstname' >
                </div>

                <div class="input-field col s4">
                    <label for="lastname">lastname</label>
                    <input type="text"  [(ngModel)]='guest.lastname' >
                </div>
                <div class="input-field col s2">
                    <label for="age">Age</label>
                    <input type="number"  [(ngModel)]='guest.age' >
                </div>
            </div>
                <div class="col s12">
                  <label for="description">Description</label>
                  <input type="text"  [(ngModel)]='guest.description'>
                </div>
                <a class="waves-effect waves-light btn" type="submit" (click)="onSubmit()" >Submit</a>
        </form>


`
})
export class addGuestComponent implements OnInit{
  guest = {firstname:'', lastname:'', description:'', age:''};
    // guest = {};
      constructor( private _service:guestListService){}

      ngOnInit():any {
        this._service.add();
      }
    onSubmit(){
      this._service.addGuest({firstname: this.guest.firstname, lastname: this.guest.lastname, description: this.guest.description, age: +this.guest.age})
      this.guest = {firstname:'', lastname:'', description:'', age:''};

    }


  }
