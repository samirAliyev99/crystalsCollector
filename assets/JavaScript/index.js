var points_of_images=[5,1,11,9];
var sum_of_wins=0;
var sum_of_losses=0;
var sum_of_crystals=0;

var random_value=Math.floor(Math.random() * 100)+1;
$('.randomNumber').html(random_value);
$('#img1').click(function(){

    sum_of_crystals+=points_of_images[0];
   
    check();

})

$('#img2').click(function(){

    sum_of_crystals+=points_of_images[1];
    check();

})

$('#img3').click(function(){

    sum_of_crystals+=points_of_images[2];
    check();

})

$('#img4').click(function(){

    sum_of_crystals+=points_of_images[3];
    check();

})

function reload(){
    random_value=Math.floor(Math.random() * 100)+1;
    $('.randomNumber').html(random_value);
    $('.totalScore p').html(" ");
    sum_of_crystals=0;
    for(i in points_of_images){
        points_of_images[i]=Math.floor(Math.random() * 10)+1;
    }
}

function check(){
    $('.totalScore p').html(sum_of_crystals);

        if(sum_of_crystals==random_value){
            sum_of_wins+=1;
            $('.wins p').html(""+ sum_of_wins);
            $('.result').html('You won');
            reload();
        }
        else if(sum_of_crystals>random_value){
            sum_of_losses+=1;
            $('.losses p').html(""+sum_of_losses);
            $('.result').html('You lost');
            reload();
        }
}