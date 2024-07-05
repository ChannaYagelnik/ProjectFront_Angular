import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeLook]'
})
export class ChangeLookDirective {
  @Input() mycolor: string
  @Input() myText: string

  constructor(public element: ElementRef) { }
  
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.mycolor
  }

  @HostListener('mouseenter') K() {
    this.element.nativeElement.style.backgroundColor = "pink"
  }
}
