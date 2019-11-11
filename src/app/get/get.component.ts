import { Component, OnInit } from '@angular/core';
import {ReposerviceService} from '../reposervice.service'
import  {interface1} from '../interface1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  interfaces: interface1[];

  constructor(private rs: ReposerviceService , private router:Router)  { }

ngOnInit() {
    this.rs
      .getInterfaces()
      .subscribe((data: interface1[]) => {
        this.interfaces = data;
    });
  }

 

  deleteInterface(id) {

    if(confirm("Do you want to delete this interface?")){
      this.rs.deleteInterface(id).subscribe(res => {
     //    this.router.navigate(['/interface']) 
     
          window.location.reload();
      
      });
    }
 else{
console.log("Problem in delete");
 }
  }

}
