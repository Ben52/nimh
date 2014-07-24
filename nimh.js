$(function(){

    var counter = 1;
    var score = 0;
    var players = {player_1: {name: "Player 1", score: function(){return piles;}}, player_2 : {name: "Player 2", score: function (){return piles;}}};

    var group1 = $("#group1"),
        group2 = $("#group2"),
        group3 = $("#group3"),
        groups = [
            group1,
            group2,
            group3
        ];
    var piles = {
        pile_1: 7,
        pile_2: 5,
        pile_3: 3
    };

    var turn = function(){
        counter++;
        if(counter % 2 === 0){
            return players.player_2;
        }else{
            return players.player_1;
        }
    };

    var getCoinCount = function (){
         $('.group').each(function(i, x){
           // console.log(x);
             var pileNum = i + 1;
             var pile = "pile_" + pileNum;
             piles[pile] = $(x).children('.coin').size();
        });
    };

    groups.forEach(function(group){
//        console.log(group);
    });


    getCoinCount();

    $(':submit').on('click', function(){
        var num = $(this).siblings("input").val();
        $(this).siblings("input").val("");
        $(this).siblings('div').slice(0, num).remove();

        $('h3').toggleClass('person2');
        if($('h3')[0].className == 'person2'){
            $('h3').text('Person 2, Go!');
        }else{
            $('h3').text('Person 1, Go!!');
        }
        getCoinCount();
        for(var pile in piles){
            //console.log(piles[pile]);
            score += piles[pile];
            console.log(score);
            if(score <= 1){
                console.log("You win!!!!");
            }
        }
        //console.log(turn());
        //console.dir(piles);
    });

});