import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  expendList(idList: string, idBtn: string){
    const myBtn = document.getElementById(idBtn) as HTMLElement;
    const myList = document.getElementById(idList) as HTMLElement;
    
    if(myList.style.height === 'fit-content'){
      myBtn.classList.remove('bi-dash');
      myBtn.classList.add('bi-plus');
      myList.style.height = '0px';
    }else{
      myBtn.classList.remove('bi-plus');
      myBtn.classList.add('bi-dash');
      myList.style.height = 'fit-content';
    }
  }
}
