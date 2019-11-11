import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReposerviceService {

  uri = 'http://localhost:4000/interface';

  constructor(private http: HttpClient
  	) { }


  addInterface(interface_name, developed_by,photo1) {

    var int_name=interface_name;
    var dev_by=developed_by;


    console.log(int_name);
    console.log(dev_by);
   

var phot:File= photo1;
console.log(phot);

 const formData = new FormData();

 		formData.append('interface_name', int_name);
 		formData.append('developed_by', dev_by);
  	formData.append('photo', photo1);
  
     console.log(formData);
	
    // const obj = {
    //   interface_name: int_name,
    //   developed_by: dev_by,
    //   photo:photo1
    // };

  

    this.http.post(`${this.uri}/add`, formData)
        .subscribe(res => {
          alert("The interface is added successfully")        
        ;
        }
        );
  }


  getInterfaces() {
    return this
           .http
           .get(`${this.uri}`);

  }


 deleteInterface(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

}
