import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropDownDirective {

    isDropdownCollapsed: boolean = false;

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

   @HostListener('click') onClick(){
       if (!this.isDropdownCollapsed) {
        this.renderer.addClass(this.el.nativeElement, "open");
       } else {
        this.renderer.removeClass(this.el.nativeElement, "open");
       }
       this.isDropdownCollapsed = !this.isDropdownCollapsed;
   }
}