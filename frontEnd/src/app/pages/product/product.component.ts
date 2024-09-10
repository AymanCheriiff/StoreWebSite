import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {


  productsNumber = 1;
  zoomImageStyle : any ;

  onMouseMove(event: MouseEvent) {
    const container = (event.currentTarget as HTMLElement);
    const zoomImage = container.querySelector('.image img') as HTMLImageElement;

    if (zoomImage) {
      const { left, top, width, height } = container.getBoundingClientRect();
      const { clientX, clientY } = event;

      const offsetX = (clientX - left) / width;
      const offsetY = (clientY - top) / height;

      this.zoomImageStyle = {
        'transform-origin': `${offsetX * 100}% ${offsetY * 100}%`,
        'transform': 'scale(1.5)'
      };
    }
  }
  
  onMouseLeave() {
    this.zoomImageStyle = {
      'transform-origin': 'center center',
      'transform': 'scale(1)'
    };
  }
}
