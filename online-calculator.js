<script>


    $( document ).ready(function() {

        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }



        function onFocus(e, className){
            $(className).siblings('.form-label').css({"display": "none"});
        }

        function onFocusOut(e, className){
            if(e.target.value){
                $(className).siblings('.form-label').css({"display": "none"});
            }else{
                $(className).siblings('.form-label').css({"display": "block"});
            }
        }

        // function inpu1(e){
        //     if(e.target.value){
        //         $('.c-user-input-1').siblings('.form-label').css({"display": "none"});
        //     }else{
        //         $('.c-user-input-1').siblings('.form-label').css({"display": "block"});
        //     }
        // }

        // function inpu2(e){
        //     if(e.target.value){
        //         $('.c-user-input-2').siblings('.form-label').css({"display": "none"});
        //     }else{
        //         $('.c-user-input-2').siblings('.form-label').css({"display": "block"});
        //     }
        // }

        // function inpu3(e){
        //     if(e.target.value){
        //         $('.c-user-input-3').siblings('.form-label').css({"display": "none"});
        //     }else{
        //         $('.c-user-input-3').siblings('.form-label').css({"display": "block"});
        //     }
        // }

        $('.c-cal-close-button').click(() => {
            $('.c-user-input-1')[0].value = ''
            $('.c-user-input-2')[0].value = ''
            $('.c-user-input-3')[0].value = '';

            $('.c-user-input-1').siblings('.form-label').css({"display": "block"});
            $('.c-user-input-2').siblings('.form-label').css({"display": "block"});
            $('.c-user-input-3').siblings('.form-label').css({"display": "block"});
        })

        $('.c-user-input-1').focus((e) => {

            onFocus(e, '.c-user-input-1')
        })

        $('.c-user-input-1').focusout((e) => {

            onFocusOut(e, '.c-user-input-1')
        })

        $('.c-user-input-2').focus((e) => {

            onFocus(e, '.c-user-input-2')
        })

        $('.c-user-input-2').focusout((e) => {

            onFocusOut(e, '.c-user-input-2')
        })

        $('.c-user-input-3').focus((e) => {

            onFocus(e, '.c-user-input-3')
        })

        $('.c-user-input-3').focusout((e) => {

            onFocusOut(e, '.c-user-input-3')
        })

        // $('.c-user-input-2').keyup((e) => {

        //     if(e.target.value){
        //         $('.c-user-input-2').siblings('.form-label').css({"display": "none"});
        //     }else{
        //         $('.c-user-input-2').siblings('.form-label').css({"display": "block"});
        //     }
        // })

        // $('.c-user-input-3').keyup((e) => {

        //     if(e.target.value){
        //         $('.c-user-input-3').siblings('.form-label').css({"display": "none"});
        //     }else{
        //         $('.c-user-input-3').siblings('.form-label').css({"display": "block"});
        //     }
        // })

        $('.c-cal-results-button').click(() => {
           
            var D4 = parseInt($('.c-user-input-1')[0].value);
            var D5 = parseInt($('.c-user-input-2')[0].value);
            var D6 = parseInt($('.c-user-input-3')[0].value);

            var D9 = D5/D4/5280;

            var D10 = D6/D9;

            var D11 = D5 * D10;
            var D30 = 18;

            var D49 = 487.5;
            var D50 = 8;
            var D51 = 1;

            var D53 = D49*D50*D51;
            var D35 = D53;
            var D34 = 2000;
            var D28 = 350;
            var D29 = 5;
            var D31 = .6;
            var D32 = .1;
            var D36 = 1500;

            var E37 = (D35 + D34) * D30 * 12;
            var E38 = D28*D29*D30*12*D4*(1-D31-D32);
            var E39 = D29*D30*12*D32*D36;

            var D33 = D5/(E37+E38+E39);

            var F9 = (D30*D29*12*D33*D28)/5280; //

            var F10 = D6/F9;

            var D37 = (D35+D34)*D30*12*D33*F10; //

            var D38 = D11 * (1-D31-D32);

            var D39 = (D6*5280/D28)*D36*D32;

            var result = D11 - (D37 + D38 + D39); //

            var F11 = D37+D38+D39;
            var F4 = F11/(D6*5280)

            var CaptalReach = F9/D9;
            var UnitCostReduction = (F4-D4)/D4;
            var F17 = D11 - (D37+D38+D39);
            var ROI = F17/D37;

            //console.log(result, D5, D6, D4);
            var roundResult = Math.round(result);

            var D41 = 1000;
            var D42 = 10;
            var F24 = 600;

            var ourMilesPerYear = (D30*D29*12*D33*D28/5280).toFixed(1);
            var theirMilesPerYear = (D5/D4/5280).toFixed(1);
            var ourYearsToComplete = (D6/F9).toFixed(1);
            var theirYearsToComplete = (D6/D9).toFixed(1);
            var ourtotalProjectCost = (D37+D38+D39).toFixed(0);
            var theirourtotalProjectCost = (D5*D10).toFixed(0);
            var ourCrewDaysReq = ((D38/D4/D41) + (D39/D36/D42)).toFixed(0)
            var theirCrewDaysReq = (D11/D4/D41).toFixed(0);
            var ourAvoidedPerYear = (F24/F10).toFixed(0);
            var theirAvoidedPerYear = (F24/D10).toFixed(0);

            console.log(ourCrewDaysReq, theirCrewDaysReq);

            var effectiveCost = F11/(D6*5280);

            $('.c-total-save').text("$"+formatNumber(roundResult));
            $('#c-ecr').text(CaptalReach.toFixed(2));
            $('#c-ucr').text((UnitCostReduction*100).toFixed(2) + "%");
            $('#c-ior').text((ROI*100).toFixed(2) + "%");

            $('#c-w-mry').text(theirMilesPerYear);
            $('#c-with-mry').text(ourMilesPerYear);

            $('#c-w-yc').text(theirYearsToComplete);
            $('#c-with-yc').text(ourYearsToComplete);

            $('#c-crew-without').text(theirCrewDaysReq);
            $('#c-crew-with').text(ourCrewDaysReq);

            $('#c-w-aoay').text(theirAvoidedPerYear);
            $('#c-with-aoay').text(ourAvoidedPerYear);

            $('#c-w-total-cost').text(ChekcIfMilion(theirourtotalProjectCost));
            $('#c-with-total-cost').text(ChekcIfMilion(ourtotalProjectCost));

            $('#c-w-rcf').text("$" + D4.toFixed(2))
            $('#c-with-rcf').text("$" + effectiveCost.toFixed(2))
        })

        function ChekcIfMilion(string){
            if(string > 1000000){
                return "$" + (string/1000000).toFixed(1) + " M";
            }else{
                return "$" + string.toFixed(1);
            }
        }
     
    $('.c-user-input-1, .c-user-input-2, .c-user-input-3').keyup(e => {
            console.log($(this))
            if($('.c-user-input-1')[0].value && $('.c-user-input-2')[0].value && $('.c-user-input-3')[0].value ){
                $('.c-cal-results-button').addClass('active')
            }else{
                $('.c-cal-results-button').removeClass('active')
            }
        })
    });
   
 
</script>

<script>
$('form').submit(function() {
  return false;
});
</script>