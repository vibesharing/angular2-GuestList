import {Injectable} from 'angular2/core';
import {Guest} from './guest';
import{guest_list} from './mock-guest-list';
@Injectable()

export class guestListService{
  add(){
  console.log('hola');
};
  addGuest(Guest){
    console.log('Is ' + Guest.firstname + ' ' + Guest.lastname)
    guest_list.push(Guest);
    console.log(guest_list);
  }
  get(){
    return guest_list;
  }
  remove(guestFirstname:string){
    for(var i = 0; i < guest_list.length; i++) {
    if (guest_list[i].firstname === guestFirstname) {
        var index = i;
        console.log(index);
        guest_list.splice(index,1);
        console.log('removed');
        break;
    }
  }
  }
  findIndex(guestFirstname:string){
    for(var i = 0; i < guest_list.length; i++) {
    if (guest_list[i].firstname === guestFirstname) {
        var index = i;
        console.log('Index found' + index);
        return index;
    }
  }
  }
  findMyGuest(index:string){
    return guest_list[index]
  }
}
