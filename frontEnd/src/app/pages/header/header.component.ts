import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  collapsed : boolean = true;

  collapseNav(){
    this.collapsed = !this.collapsed;
  }

  openItem(id: string, arrow: string){
    const navItem = document.getElementById(id) as HTMLElement;
    const icon = document.getElementById(arrow) as HTMLElement;
    if(navItem.style.height === "fit-content"){
      navItem.style.height = '0px';
      icon.style.transform = "rotate(0)";
    }else{
      navItem.style.height = 'fit-content';
      icon.style.transform = "rotate(180deg)";
    }
  }

  ngOnInit(): void {
  }
}
