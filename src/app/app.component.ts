import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileproject';
  url = "/assets/image/user1.jpg"

  selectfile(event){
     if(event.target.files){
       var reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
       reader.onload = (event:any) => {
         this.url = event.target.result
       }
     }
  }
}
