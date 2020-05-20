import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'
]
})
export class AppComponent {
  title = 'BudgetCreators';



  childMenu=false;

  toglechild(){
    this.childMenu=this.childMenu?false:true;
  }


}
