jQuery(function() {
    jQuery( "#contact" ).validate({
        rules :{
            nombre: {
                required : "Pon tu nombre"
            }
        }
    });
 });