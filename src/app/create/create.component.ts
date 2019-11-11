import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {ReposerviceService} from '../reposervice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 angForm : FormGroup;
 selectedFiles: FileList;
 currentFileUpload: File;

 
  constructor(private fb: FormBuilder, private rs: ReposerviceService,private router:Router) {
    this.createForm();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

 createForm() {
    this.angForm = this.fb.group({
      interface_name: ['', Validators.required ],
      developed_by: ['', Validators.required ],
    
    });
  }

   ngOnInit() {
  }


   addInterface(interface_name, developed_by) {
  
     console.log(interface_name);
     console.log(developed_by);

     this.currentFileUpload = this.selectedFiles.item(0);
     console.log(this.currentFileUpload);
  

  if(confirm("Do you want to save this interface?")){
    this.rs.addInterface(interface_name, developed_by,this.currentFileUpload);
 }

 this.angForm.reset();
  
   }

   handleSubmit(e){
    e.preventDefault();
    e.target.reset();
}
}
