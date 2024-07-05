import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  EN1 = {
    title: "Loggin page",
    title2: "we would liko you to join us:)",
    Email:"Email",
    Password:"Password",
    RememberMe:"remember me",
    Submit:"submit",
    changeLang:"change language",
    lan:"ltr"
  }
  HE1 = {
    title: "התחברות",
    title2: "אנחנו שמחים שתשארו מחוברים אלינו:)",
    Email:"מייל",
    Password:"סיסמא",
    RememberMe:"זכור אותי",
    Submit:"שליחה",
    changeLang:"שנה שפה",
    lan:"rtl"
  }
  transform(value: any, args?: any): any {
    if (args == "עיברית")
      return this.HE1[value]
    if (args == "אנגלית")
      return this.EN1[value]
  }


}
