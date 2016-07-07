import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {guestListService} from '../services/guestList.service'
@Component({
template:`
<p>holafdsqdsfq</p>
`
})
export class homeComponent implements OnInit{
  constructor(private myservice: guestListService) {}

ngOnInit():any {
  this.myservice.add();
}
}
