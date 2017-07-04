//RUN OUR JQUERY 
var following = [];
$(document).ready(function(){
    
    //FREE CODE CAMP STREAM INFO AND STATUS API CALL   
    var url = "https://api.twitch.tv/kraken/streams/freecodecamp?client_id=ybwm93zqp4lt62qapw9t8pyd0t25p7";
        $.getJSON(url, function(data1){
            if (data1.stream===null){
                $("#fccStatus").html("Free Code Camp is currently OFFLINE!");
                 
            }
        else{
                $("#fccStatus").html("Free Code Camp is currently ONLINE!");
        }
    }); 
   
    var followerurl = "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels?client_id=ybwm93zqp4lt62qapw9t8pyd0t25p7";
    $.getJSON(followerurl, function(data2){ 
        for (var i = 0; i < data2.follows.length; i++){
            
            var displayName = data2.follows[i].channel.display_name;
            following.push(displayName);
            
        }
        following.push("comster404");
        following.push("brunofin");
        following.push("ESL_SC2");
        
        for (var i=0; i<following.length;i++){
            var url2 = "https://api.twitch.tv/kraken/users/" + following[i] + "?client_id=ybwm93zqp4lt62qapw9t8pyd0t25p7"; //PROBLEM WITH THIS
                
             $.getJSON(url2).done(function(data3){
                 
               var logo;
               var name;
               var status; 
               console.log(data3);
               if (data3.error){
                   logo = "https://s3-us-west-2.amazonaws.com/web-design-ext-production/p/Combologo_474x356.png"
                   name = data3.message;
                   status = data3.error;
               }
            });
           /*$.getJSON(url2).fail(function(data4){
                var logo = "https://s3-us-west-2.amazonaws.com/web-design-ext-production/p/Glitch_474x356.png";
                var name = data4.message;   
                var status = data4.error;
                $("#followerInfo").prepend("<div class='row'>"+"<div class='col-md-4'>" + "<img src='"+ logo +"'>" + "</div>" + "<div class='col-md-4'>"+ name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>")
                
           });*/
                

               
               
              //  }
            

             }
        for (var i = 0;i<following.length;i++){
            var onlineURL = "https://api.twitch.tv/kraken/streams/" + following[i];
            $.getJSON(onlineURL, function(data4){
                if(data4.status !=  null && data4.error != true){
                    var logo = data4.stream.channel.logo;
                    console.log(logo);
                    var status;
                    var name;
                }
            })
        }
             
        
    });
    
});
    // front end skill : react 
    // ITS ALL ABOUT THE SKILL SET AND EXPERIENCE
    //Will free code camp be enough to get a front end job?
    // it was for me, but you also have to learn from youtube and make projects
