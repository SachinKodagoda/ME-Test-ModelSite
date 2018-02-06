import MobileMenu from './xmodule/MobileMenu';
import RevealOnScroll from './xmodule/RevealOnScroll';
import StickyHeader from './xmodule/StickyHeader';
import Modal from './xmodule/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll('.TestimonialsContent','60%');
new RevealOnScroll('.FeatureItem','50%');
var stickyHeader = new StickyHeader();
var modal = new Modal();
