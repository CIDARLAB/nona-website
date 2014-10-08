  $( document ).ready(function() { // loads once the document is ready

    // this will handle the transition of the nav
    var whatCenter = $('#what').position();
    console.log(whatCenter);
    $("#nav").css({left:whatCenter.left + 15, width: $('#what').width() - 65});

    var $what = $('<div>');
    var $who = $('<div>');
    var $projects = $('<div>');
    var $contact = $('<div>');
    var $sponsors = $('<div>');
    var $contact = $('<div>');


    $what.load("what.html",function() {
  console.log("Loaded what");
});
    
    $who.load("who.html",function() {
  console.log("Loaded who");
});

    $projects.load("projects.html",function() {
  console.log("Loaded projects");
});
        $sponsors.load("sponsors.html",function() {
  console.log("Loaded sponsors");
});

                $contact.load("contact.html",function() {
  console.log("Loaded contact");
});

    $("#content").html($what); // this is the information that loads when the page does
    $("#what").addClass("active");

    $("#what").click(function () { // different information gets loaded based on what gets clicked
      //console.log("Clicked");
      //console.log($what);
      $("#content").html($what);
      $(".navigation").removeClass("active");
      $("#what").addClass("active");

              $( "#nav" ).animate({
    left: $('#what').position().left +15,
    width:  $('#what').width() - 65,
  }, 100, function() {
    // Animation complete.
  });

    })

    $("#who").click(function () {
      //console.log("Clicked");
      //console.log($who);
      $("#content").html($who);
      $(".navigation").removeClass("active");
      $("#who").addClass("active");

        $( "#nav" ).animate({
    left: $('#who').position().left+20,
    width:  $('#who').width() - 70,
  }, 100, function() {
    // Animation complete.
  });

      
    })

    $("#projects").click(function () {
      //console.log("Clicked");
      //console.log($projects);
      $("#content").html($projects);
      $(".navigation").removeClass("active");
      $("#projects").addClass("active");

              $( "#nav" ).animate({
    left: $('#projects').position().left,
    width:  $('#projects').width() - 35,
  }, 100, function() {
    // Animation complete.
  });
    })


    $("#sponsors").click(function () {
      //console.log("Clicked");
      //console.log($sponsors);
      $("#content").html($sponsors);
      $(".navigation").removeClass("active");
      $("#sponsors").addClass("active");

              $( "#nav" ).animate({
    left: $('#sponsors').position().left + 35,
    width:  $('#sponsors').width() - 100,
  }, 100, function() {
    // Animation complete.
  });
    })



    $("#contact").click(function () {
      //console.log("Clicked");
      //console.log($projects);
      $("#content").html($contact);
      $(".navigation").removeClass("active");
      $("#contact").addClass("active");

              $( "#nav" ).animate({
    left: $('#contact').position().left + 45,
    width:  $('#contact').width() - 120,
  }, 100, function() {
    // Animation complete.
  });
    })

    /*$( window ).resize(function() {
        
});*/




      
});