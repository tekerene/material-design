import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  notifications = 0;
  showSpinner = false;
  opened = false;

  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
        this.showSpinner = false;
    }, 5000);
    
   
  }
  log(index){
    console.log(index);
  }
}
