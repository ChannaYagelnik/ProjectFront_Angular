import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeLook]'
})
export class ChangeLookDirective {
  @Input() mycolor: string

  constructor(public element: ElementRef) { }
  //דירטיב מקבל פרמטר
  // בשלב ראשון נגדיר בקונסטרקטור את האלמנט שעליו אנו עובדות
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.mycolor
  }
  //אירוע
  @HostListener('click') h() {
    this.element.nativeElement.innerHTML = "לחצו עלי"
  }
  @HostListener('mouseenter') K() {
    this.element.nativeElement.style.backgroundColor = "pink"
  }
}
