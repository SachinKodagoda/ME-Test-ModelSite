import $ from 'jquery';
class MobileMenu {
	constructor() {
		this.menuIcon = $(".menuIcon");
		this.navigation = $(".siteMenu");
		this.siteHeader =$(".headerClass");
		this.events();
	}
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}
	toggleTheMenu(){
		this.navigation.toggleClass("navigtion-visible");
		this.siteHeader.toggleClass("headerClass-expanded");
		this.menuIcon.toggleClass("cross");
	}
}

export default MobileMenu;
