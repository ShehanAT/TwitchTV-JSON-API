//RUN OUR JQUERY 
var following = [];
$(document).ready(function(){
    
    //FREE CODE CAMP STREAM INFO AND STATUS API CALL   
    var url = "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?";
        $.getJSON(url, function(data1){
            if (data1.stream===null){
                $("#fccStatus").html("Free Code Camp is currently OFFLINE!");
            }
        else{
                $("#fccStatus").html("Free Code Camp is currently ONLINE!");
        }
    }); 
    var followerurl = "https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels?callback=?";
    $.getJSON(followerurl, function(data2){ 
        for (var i = 0; i < data2.follows.length; i++){
            var displayName = data2.follows[i].channel.display_name;
            following.push(displayName);
            
        }
        following.push("comster");
        following.push("brunofin");
        following.push("ESL_SLN35");
        
        for (var i=0; i<following.length;i++){
            var url2 = 'https://wind-bow.gomix.me/twitch-api/streams/' + following[i] + '/?callback=?';
             
             $.getJSON(url2).done(function(data3){
                var logo;
                var status;
                var name;
            if (data3.error){    //THIS PART NOT WORKING
                logo = "https://s3-us-west-2.amazonaws.com/web-design-ext-production/p/Combologo_474x356.png";
                name = data3.message;
                status = data3.error;
                console.log(name);
            }
            

             }
        
             )
        
    };
    
});
            console.log(following);
    
});;
