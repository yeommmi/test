$(function(){

    var body = $('body');
    var menu = $('header .menu');
    var menuwrap = $('#menuwrap');
    var dim = $('.dim');
    
    menu.on('click', function(){
      menu.toggleClass('active');
      menuwrap.toggleClass('active');
      body.toggleClass('active');
      return false;
    });
  
    dim.on('click', function(){
  
      // menu.trigger('click');
  
      menu.removeClass('active');
      menuwrap.removeClass('active');
      body.removeClass('active');
  
    });

    

    var tab = $('.tab-type-1 a');
    
    tab.on('click', function(){
      var $this = $(this);
      var parent = $this.parent('li');
      var sibl = parent.siblings('li');

      parent.toggleClass('active');
      sibl.removeClass('active');

      return false;
    });

    
  
    var faq = $('.faq-list');
    var faqbtn = faq.find('.q');

    faqbtn.on('click', function(){
      var $this = $(this);
      var parent = $this.parent('li');
      var sibl = parent.siblings('li');

      parent.toggleClass('active');
      sibl.removeClass('active');

      return false;
    });




    

  });
  