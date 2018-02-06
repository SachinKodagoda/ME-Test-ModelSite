import $ from 'jquery';
class Modal{
 constructor(){
   this.openModalButton = $(".open-modal");
   this.modal = $(".modal");
   this.closeModalButton = $(".modal_close");
   this.events();
 }
 events(){
   this.openModalButton.click(this.openModal.bind(this));
   this.closeModalButton.click(this.closeModal.bind(this));
   $(document).keyup(this.keyPressHandler.bind(this));
 }
 openModal(){
   this.modal.addClass("modal_visible");
   return false;
   //to remove the default scrolling up we use return false;
 }
 closeModal(){
   this.modal.removeClass("modal_visible");
 }
 keyPressHandler(e){
   if (e.keyCode == 27){
    this.modal.removeClass("modal_visible");
   }
 }
}
export default Modal;
