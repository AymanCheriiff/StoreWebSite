import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {


  exendListFooter(idList: any){
    const list = document.getElementById(idList) as HTMLElement;
    if(list.style.height === 'fit-content'){
      list.style.height = '0';
    }else{
      list.style.height = 'fit-content';
    }
  }
}
