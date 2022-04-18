$(document).ready(function(){

   

    $("#notlp").change(function(){
        if($("#notlp").val () > 0){
            $("#SelectPulsa").prop("disabled" , false);
        }
    });

    $("#SelectPulsa").change(function(){
        ;
       $("#btnAwal").hide();
       $("#buttonPaket").hide();
       $("#buttonPulsa").show();
       $("#buttonPulsa").prop("disabled",false);
    });

    $("#buttonPulsa").click(function(){
        
        var valSelectPulsa = document.getElementById("SelectPulsa").value;
        var pulsa = Number (valSelectPulsa);
        var hargaPulsa;

        var  notlp = $("#notlp").val();
        var conboxPulsa = confirm("pembelian Pulsa sebesar " + pulsa + ".000 ke nomor " + notlp);

        if(conboxPulsa){

            if(pulsa < 10) {

                hargaPulsa = pulsa + 3;

            } else if (pulsa >= 10) {
                hargaPulsa = pulsa + 2;

            }

            alert( "Total harga pulsa Rp."+hargaPulsa + ".000,- ke nomor " + notlp + " sedang di proses. Terima Kasih :)");


        }
    });

    $("#btnPulsa").click(function(){
        $("#SelectPulsa").show();
        $("#SelectPaket").hide();

    });

    $("#btnPaket").click(function(){

        $("#SelectPulsa").hide();
        $("#SelectPaket").show();

        $("#notlp").change(function(){
            if($("#notlp").val () > 0){
                $("#SelectPaket").prop("disabled" , false);
            }
        });

        $("#SelectPaket").change(function(){
            ;
           $("#btnAwal").hide();
           $("#buttonPulsa").hide();
           $("#buttonPaket").show();
        //    $("#buttonPaket").prop("disabled",false);
        });

    });
    $("#buttonPaket").click(function(){
        console.log("masuk button paket");
        var textSelectPaket = $('#SelectPaket option:selected').text()
        var valSelectPaket = document.getElementById("SelectPaket").value;
        
        var ubahvalpaket = Number (valSelectPaket);

        var  notlp = $("#notlp").val();
        var conboxPaket = confirm("pembelian paket sebesar " + textSelectPaket + " ke nomor " + notlp);

        if(conboxPaket){

            if(ubahvalpaket== 30.500){

                console.log("masuk sini 30.500")

            }

            console.log("masuk conboxpaket");
            alert( "Total harga paket data Rp." + valSelectPaket + ",- ke nomor " + notlp + " sedang di proses. Terima Kasih :)");
        } 
        return false;

    });




    // $("#btnPaketData").click(function(){
    //     $("#nominal").hide();
    //    $("#nominalPktData").show();
    //    $("#btngreen").prop("disabled" , false);


    //    $("#notlp").change(function(){
    //     if($("#notlp").val () > 0){
    //         $("#nominalPktData").prop("disabled" , false);
    //     }
    // });

    // $("#nominalPktData").change(function(){
    //     $("#btngrey").hide();
    //     $("#btngreen").show();
    //  });
    // });

    // $("#btnPulsa").click(function(){
    //     $("#nominal").show();
    //     $("#nominalPktData").hide();
    // });

    // $( "#btngreen" ).click(function() {
    //     var terpilihopt = document.getElementById("nominal").value;
    //     var valuePaket = document.getElementById("nominalPktData").value;
    //     var ubahTerpilih = Number(terpilihopt);
    //     var  notlp = $("#notlp").val();

    //         // select pulsa
    //         if(ubahTerpilih > 0 && ubahTerpilih <= 100000 ) {

    //             console.log(valuePaket);
    //             console.log(ubahTerpilih);
    //             var conboxPulsa = confirm("pembelian Pulsa sebesar " + ubahTerpilih + " ke nomor " + notlp);
    //             if(conboxPulsa){
    //                 var hasil;
    //                 if(ubahTerpilih >= 10000 ){
            
    //                     hasil = ubahTerpilih + 2000
            
            
    //                 }else if (ubahTerpilih < 10000) {
    //                     hasil = ubahTerpilih + 3000
            
    //                 }
                    
    //                 alert( "Total harga pulsa Rp."+hasil + ",- ke nomor " + notlp + " sedang di proses. Terima Kasih :)");
    
    //             }
    //         } else if (valuePaket == "10GB" || valuePaket == "15GB" || valuePaket == "KuotaMalam"  || valuePaket == "Unlimited") {
    //             console.log("masuk else if");
    //             console.log(ubahTerpilih);

    //             var conboxPaket = confirm("pembelian Paket " + valuePaket + " ke nomor " + notlp);
    //             if (conboxPaket ) {
    //                 if(valuePaket == "10GB") {
    //                     alert( "Total harga paket data Rp." + valuePaket + ",- ke nomor " + notlp + "sedang di proses. Terima Kasih :)");
    //                 } else if(valuePaket == "15GB"){
                        
    //                 } else if (valuePaket == "KuotaMalam"){
    
    //                 }else if (valuePaket == "Unlimited"){
                        
    //                 }

    //             }
                
    //         }
           
        
    //    });
});
