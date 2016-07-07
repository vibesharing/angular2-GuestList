import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {addGuestComponent} from '../addGuest/addGuest.component';
import {OnInit} from 'angular2/core';
import {guestListService} from '../services/guestList.service';
import {Guest} from '../services/guest';
import {NgIf} from 'angular2/common';
import {NgFor} from 'angular2/common';
import {Router} from 'angular2/router';


@Component({
template:`
<h1>Guest List</h1>
<a class="waves-effect waves-light btn" (click)= 'GoToAddGuest()' ><i class="material-icons left">cloud</i>Add Guest</a>

<br>
<br>
<div *ngIf='GuestList.length > 0'>


<div class="chip"  *ngFor="#guest of GuestList">
  <span (click)="findIndex(guest.firstname)">{{guest.firstname}}</span>
   <i  class="material-icons" (click)="remove(guest.firstname)">close</i>
 </div>
 </div>

`,
  directives: [ROUTER_DIRECTIVES]
})

export class guestListComponent implements OnInit{
  indexGuest:number;
  GuestList: Array<Guest>;
constructor(private _service: guestListService, private _router: Router){}
  ngOnInit():any {
      this.GuestList = this._service.get()
      console.log(this.GuestList);
    };
  remove(guestFirstname:string){
    this._service.remove(guestFirstname)
  };
  GoToAddGuest(){
    this._router.navigate(['Addguest']);

  }
  findIndex(guestFirstname:string){
    this.indexGuest = this._service.findIndex(guestFirstname)
    this._router.navigate(['GuestDetail', { source: this.indexGuest.toString()}]);
  };


}
