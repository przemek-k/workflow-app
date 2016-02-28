export class MenuToggleController {

  /*@ngInject*/
  constructor(){

  }

  isOpen() {
    return this.appCtrl.isOpen(this.section);
  }
  toggle() {
    this.appCtrl.toggleOpen(this.section);
  }
}
