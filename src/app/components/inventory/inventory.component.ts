import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { APIService } from '../../API.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  message = "Loading...."
  constructor(private auth: AuthService,private apsync:APIService ) { }

  ngOnInit() {
    if(this.auth.isLoggedIn===true){
      this.message='Welcome to inventory';
     window.alert( this.apsync.GetItem('33ff1be5-04fc-40fb-90ed-adc327865bcd'))

    }else{
      this.message='Sorry you are not logged In';
    }
  }

}
