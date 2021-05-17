document.getElementById("myNavs").style.width = "100%";



docalls0();

  
		
	function docalls0(){
	
	
	$.ajax({
    url: 'https://api.ipgeolocation.io/ipgeo?apiKey=63da69e357dc4c9db1b846c3d998343d',
    dataType: 'json',
    success: function( data ) {
	
	document.getElementById("myNavs").style.width = "0%";
	  
	  
	   $.getJSON("https://api.ipgeolocation.io/ipgeo?apiKey=63da69e357dc4c9db1b846c3d998343d", function(data) {
        
        
	document.getElementById("ip").innerHTML = (data.ip);
	
	document.getElementById("country").innerHTML = (data.country_name);
		
		var results = (data["time_zone"]["is_dst"]);
		
   document.getElementById("ik").innerHTML = (results);
   
   if (results == true){
	document.getElementById("myNav").style.width = "100%";
	}
	else{

	document.getElementById("myNav").style.width = "0%";
	}
		
		
		
		});
		
	  
	  
	  
	  
    },
    error: function( data ) {
	  docalls1();
    }
  });
	
	
	}	
		
function docalls1(){

$.ajax({
    url: 'https://api.ipgeolocation.io/ipgeo?apiKey=18443ceaaeda44f9b189c3b72ef5f18f',
    dataType: 'json',
    success: function( data ) {
      
	  
	  document.getElementById("myNavs").style.width = "0%";
	  alert('1');
	  
	  
	   $.getJSON("https://api.ipgeolocation.io/ipgeo?apiKey=18443ceaaeda44f9b189c3b72ef5f18f", function(data) {
        
        
	document.getElementById("ip").innerHTML = (data.ip);
	
	document.getElementById("country").innerHTML = (data.country_name);
		
		var results = (data["time_zone"]["is_dst"]);
		
   document.getElementById("ik").innerHTML = (results);
   
   if (results == true){
	document.getElementById("myNav").style.width = "100%";
	}
	else{

	document.getElementById("myNav").style.width = "0%";
	}
		
		
		
		});
		
	  
	  
	  
	  
    },
    error: function( data ) {
	  docalls2();
    }
  });
	
	
	}	


function docalls2(){

$.ajax({
    url: 'https://api.ipgeolocation.io/ipgeo?apiKey=29ff4d650f9d4b8297f008947a54f6b8',
    dataType: 'json',
    success: function( data ) {
      
	  
	  document.getElementById("myNavs").style.width = "0%";
	  alert('2');
	  
	  
	   $.getJSON("https://api.ipgeolocation.io/ipgeo?apiKey=29ff4d650f9d4b8297f008947a54f6b8", function(data) {
        
        
	document.getElementById("ip").innerHTML = (data.ip);
	
	document.getElementById("country").innerHTML = (data.country_name);
		
		var results = (data["time_zone"]["is_dst"]);
		
   document.getElementById("ik").innerHTML = (results);
   
   if (results == true){
	document.getElementById("myNav").style.width = "100%";
	}
	else{

	document.getElementById("myNav").style.width = "0%";
	}
		
		
		
		});
		
	  
	  
	  
	  
    },
    error: function( data ) {
	  docalls3();
    }
  });
	
	
	}	

function docalls3(){


		}
