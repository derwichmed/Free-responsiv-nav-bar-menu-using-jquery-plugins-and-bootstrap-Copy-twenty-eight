$(function (){
    $('body > header .nav_two .nav_item').click(function (){
       $('body > header .nav_two .nav_item .sub_menu:visible').hide();
       if($(window).width() >= 950)
            $('body > header .nav_two .nav_item').css('background-color','#580057');
       $(this).css('background-color','white');
       $(this).find('.sub_menu').show();
    });
    
    isDropDownHidden = true;
    $('body > header .nav_one .nav_bar .nav_bar_item .click').click(function (){
        if(isDropDownHidden){
            $(this).find('+ .drop_down').show();
            isDropDownHidden = false;
        }
        else{
            $(this).find('+ .drop_down').hide();
            isDropDownHidden = true;
        }
         
    });
    
    isMenuHidden = true;
    $('#mobile_navs .menu_icon').click(function (){
       $('body > header .nav_two:visible').hide();
       if(isMenuHidden){
           $('body > header .nav_one .nav_bar').show();
           isMenuHidden = false;
       }
        else{
            $('body > header .nav_one .nav_bar').hide();
            isMenuHidden = true;
        }
    });
    
    isSideBarHidden = true;
    $('#mobile_navs .side_bar_icon').click(function (){
       $('body > header .nav_one .nav_bar:visible').hide();
       if(isSideBarHidden){
           $('body > header .nav_two').show();
           isSideBarHidden = false;
       }
        else{
            $('body > header .nav_two').hide();
            isSideBarHidden = true;
        }
    });
});