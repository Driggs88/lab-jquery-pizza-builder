// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  $('.btn-pepperonni').on('click',function(){
    // $("input.pep").attr("disabled", true);
    $('.pep').toggleClass('off');
    $('.pep').toggle();
    sender('.pep', pep);
    $('.price li').eq(0).toggle();
  });

  $('.btn-mushrooms').on('click',function(){
    // $("input.mushrooms").attr("disabled", true);
    $('.mushroom').toggleClass('off');
    $('.mushroom').toggle();
    sender('.mushroom', mushrooms);
    $('.price li').eq(1).toggle();
  });

  $('.btn-green-peppers').on('click',function(){
    // $("input.green-pepper").attr("disabled", true);
    $('.green-pepper').toggleClass('off');
    $('.green-pepper').toggle();
    sender('.green-pepper', greenPepper);
    $('.price li').eq(2).toggle();
  });

  $('.btn-sauce').on('click',function(){
    // $("input.sauce").attr("disabled", true);
    $('.sauce').toggleClass('sauce-white');
    $('.sauce').toggleClass('off');
    sender('.sauce', sauce);
    $('.price li').eq(3).toggle();
  });

  $('.btn-crust').on('click',function(){
    // $("input.crust").attr("disabled", true);
    $('.crust').toggleClass('crust-gluten-free');
    $('.crust').toggleClass('off');
    sender('.crust', crust);
    $('.price li').eq(4).toggle();
  });

  var pep = 1,
    mushrooms = 1,
    greenPepper = 1,
    sauce = 3,
    crust = 5;

  var sum = 21;

      function sender(toppings, toppingsPrice){
        if ($(toppings).hasClass('off')) {
          sum -= toppingsPrice;
          console.log('subtracted');
        } else {
          sum += toppingsPrice;
          console.log('added');
        }
        $('strong').text("$" + sum);
      }

});
