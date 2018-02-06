import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll{
  constructor(cl,val){
    this.itemsToReveal = $(cl);
    this.offsetValue = val;
    this.hideInitially();
    this.createWaypoints();

  }
  hideInitially(){
    this.itemsToReveal.addClass("reveal");
  }
  createWaypoints(){
    var that = this;
    this.itemsToReveal.each(function(){
      var currentItem = this;
      new Waypoint({
        element:currentItem,
        handler: function(){
          $(currentItem).addClass("reveal_show");
        },
        offset: that.offsetValue,
      });
    });
  }
}

export default RevealOnScroll;
