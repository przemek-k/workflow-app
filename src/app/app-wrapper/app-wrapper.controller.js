export class AppWrapperController {

  /*@ngInject*/
  constructor($mdSidenav, $location, CurrentUser, $rootScope, $timeout){
    this.$mdSidenav = $mdSidenav;
    this.$location = $location;
    this.CurrentUser = CurrentUser;
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
  }

  $onInit() {
    this.menu = this.CurrentUser.getUserRoutes();
    this.mainContentArea = document.querySelector("[role='main']");
    this.autoFocusContent = false;
    this.$rootScope.$on('$locationChangeSuccess', this.openPage.bind(this));
  }
  // TODO to be changed
  isOpen(section) { return section.toggled; }
  toggleOpen(section) { section.toggled = !section.toggled; }

  openPage() {
    this.closeSidenav();

    if (this.autoFocusContent) {
      this.focusMainContent();
      this.autoFocusContent = false;
    }
  }

  focusMainContent($event) {
    // prevent skip link from redirecting
    if ($event) { $event.preventDefault(); }

    this.$timeout(() => {
      this.mainContentArea.focus();
    },90);
  }

  selectSection(section) { this.openedSection = section; }
  toggleSelectSection(section) { this.openedSection = (this.openedSection === section ? null : section); }
  isSectionSelected(section) { return this.openedSection === section; }
  selectPage(section, page) {
    this.currentSection = section;
    this.currentPage = page;
  }
  isPageSelected(page) { return this.currentPage === page; }
  toggleSidenav() { this.$mdSidenav('left').toggle(); }
  closeSidenav() { this.$mdSidenav('left').close(); }

  logout() { this.$location.url('/login'); }
}
