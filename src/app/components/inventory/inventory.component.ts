import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  message = "Loading...."
  constructor(private auth: AuthService) { }

  ngOnInit() {
    if(this.auth.isLoggedIn===true){
      this.message='Welcome to inventory';
    }else{
      this.message='Sorry you are not logged In';
    }
  }

}
