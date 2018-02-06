import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
  constructor(){
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".headerClass");
    this.headerTrigger = $(".MainSectionContent_title");
    this.createWaypoints();
    this.pageSections = $(".page-sectionx");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWayPoints();
  }
  refreshWayPoints(){
    this.lazyImages.on('load',function(){
      Waypoint.refreshAll();
    });
  }
  createWaypoints(){
    var that = this;
    new Waypoint({
      element:that.headerTrigger[0],
      handler: function(direction){
        if(direction=="down"){
          that.siteHeader.addClass("stickBlue");
        }else{
          that.siteHeader.removeClass("stickBlue");
        }
      }
    });
  }
  addSmoothScrolling(){
    $('.kick').smoothScroll();
  }
  createPageSectionWaypoints(){
    this.pageSections.each(function(){
      var currentItem = this;
      new Waypoint({
        element:currentItem,
        handler: function(direction){
          if(direction=="down"){
            var machinHeadd = currentItem.getAttribute('data-maching-link');
            $('.kick').removeClass("dockColor");
            $(machinHeadd).addClass("dockColor");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element:currentItem,
        handler: function(direction){
          if(direction=="up"){
            var machinHeadd = currentItem.getAttribute('data-maching-link');
            $('.kick').removeClass("dockColor");
            $(machinHeadd).addClass("dockColor");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
