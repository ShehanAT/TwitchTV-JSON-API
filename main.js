$(document).ready(function(){
    //$("#fccStatus").html("HELLO WORLD");
    var streamList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","shehan19","brunofin","asfsa"];
    
   
        
        $.getJSON("https://api.twitch.tv/kraken/streams/freecodecamp?client_id=ybwm93zqp4lt62qapw9t8pyd0t25p7").done(function(data){
            $("#fccStatus").html("HELLO PROTEIN!!!");
            if (data.stream === null){
                
                $("#fccStatus").html("FREE CODE CAMP IS OFFLINE");
            }
            else{
                $("#fccStatus").html("FREE CODE CAMP IS ONLINE");
            }
        })
    
    for (var i = 0; i < streamList.length ; i++){
        $.ajax({
            type:"GET",
            url:"https://api.twitch.tv/kraken/channels/"+streamList[i],
            headers:{
                "Client-id":"ybwm93zqp4lt62qapw9t8pyd0t25p7",
            },
            success: function(data1){
            
                    $.getJSON("https://api.twitch.tv/kraken/streams/"+ data1.name + "?client_id=ybwm93zqp4lt62qapw9t8pyd0t25p7").done(function(data2){
                        var name = data1._links.self.slice(38);
                        
                        var status = data1.stream;
                        var logo = data1.logo;
                        var link = data2._links.self;
                        if (data2.stream === null){
                        $("#offlineUsers").prepend("<a href='" + link + "?client_id=ybwm93zqp4lt62qapw9t8pyd0t25p7"+"'><div class='row'><div class='col-md-4'><img src='"+ logo +"'></div><div class='col-md-4'>'"+ name +"'</div><div class='col-md-4'>'"+ status + "'</div></div></a>");
                }
                else{
                    var status = data1.stream;
                        var logo = data1.logo;
                        var link = "https://www.twitch.tv/" + data1.display_name;
                        console.log(link);
                    $("#onlineUsers").prepend("<a href='" + link +"' target=_blank><div class='row'><img src='" + logo + "'><div class='col-md-4'>'" + name + "'</div><div class='col-md-4'></div><div class='col-md-4'>'" + status + "'</div></div></a>");
                }
            });
                //else{
                //    $.getJSON("https://api.twitch.tv/kraken/streams/" + data1.name + "?client_id=ybwm93zqp4lt62qapw9t8pyd0t25p7").done(function(data2){
                //        var name = data1._links.self.slice(37);
                //        var status = data1.stream;
                //        var logo = data1.logo;
                //        var link = data2._links.self;
                //        $("#onlineusers").prepend("<a href='" + link +"'><div class=row><div class='col-md-4'><img src='" + logo + "'></div><div class='col-md-4'>'"+ name +"'</div><div class='col-md-4'>'" + status + "'</div></div></a>");
                //    });
              //  }
            },
            error: function(data1){
                
                var errorName = data1.responseText;
                alert(errorName);
                var  errorLink = "No Link";
                var errorLogo = "http://www.clker.com/cliparts/8/3/3/4/1195445190322000997molumen_red_round_error_warning_icon.svg.med.png";
                var errorStatus = "Unprocessable Entity";
                $("#offlineUsers").prepend("<a href='" + errorLink + "?client_id=ybwm93zqp4lt62qapw9t8pyd0t25p7"+"'><div class='row'><div class='col-md-4'><img src='"+ errorLogo +"'></div><div class='col-md-4'>'"+ errorName +"'</div><div class='col-md-4'>'"+ errorStatus + "'</div></div></a>");
            }

        });
    }
});
