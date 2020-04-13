$(document).ready(function(){ 
    $('.targetDiv').hide();
    $('.default').show();

      $('.showSingle').click(function() {
        $('.targetDiv').hide();
        $('#div' + $(this).attr('target')).show();
        $(".showSingle.active").removeClass("active")
        $(this).addClass("active")
      }); 

      // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
});