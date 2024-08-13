$(document).ready(function(){
    $("#contact-form").validate({
        rules:{
            w3lName:{
                required:true,
                minlength:4,
               

            
            },
            w3lsender:{
                required:true,
                email:true,

            },
            w4lName:{
                required:true,
                Number:true,
                minlength:10,
            },
            w3lMessage:{
                required:true,
                minlength:8,
            },
        },
        messages:{
            w3lName:{
            required:"enter full name",
            minlength:"enter atleast 4 charector",
            },
            w4lName:{
                required:"enter mobile number",
            }
        }
     

    })
})