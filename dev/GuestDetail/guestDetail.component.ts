import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {guestListService} from '../services/guestList.service';
import {Guest} from '../services/guest';

@Component({
template:`
<p>Guest Details</p>
<div>
  <!-- <h1>{{MyGuest.firstname}}</h1> -->
</div>

<div class="row">
     <div class="col s12 m7">
       <div class="card">
         <div class="card-image">
           <img [src]="'../img/'+hola">
           <span class="card-title">Card Title</span>
         </div>
         <div class="card-content">
           <p>I am a very simple card. I am good at containing small bits of information.
           I am convenient because I require little markup to use effectively.</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
         </div>
       </div>
     </div>
   </div>
`
})
export class guestDetailComponent implements OnInit{
  hola ='Desert.png'
  source:string;
  MyGuest: Guest;
  constructor(private _service: guestListService, private _routeParams: RouteParams){}

  ngOnInit():any{
  this.source = this._routeParams.get('source');
  this.MyGuest = this._service.findMyGuest(this.source)
  console.log(this.MyGuest)


}

}
