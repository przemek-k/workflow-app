export class MenuLinkController {

  /*@ngInject*/
  constructor(){}

  isPageSelected () {
    return this.appCtrl.isPageSelected(this.section);
  }

  focusSection() {
    // set flag to be used later when
    // $locationChangeSuccess calls openPage()
    this.appCtrl.autoFocusContent = true;
  }
}
