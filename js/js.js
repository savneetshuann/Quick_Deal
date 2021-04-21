function setCookie(id, name, mobile, email, dob, gender) {
		document.cookie = "id=" + id;		
		document.cookie = "name=" + name;		
		document.cookie = "mobile=" + mobile;		
		document.cookie = "email=" + email;		
		document.cookie = "dob=" + dob;		
		document.cookie = "gender=" + gender;	
}

function setProductCookie(title, imageLink, price){
		document.cookie = "title=" + title;		
		document.cookie = "imageLink=" + imageLink;		
		document.cookie = "price=" + price;
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0) == ' ') {
	  c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
	  return c.substring(name.length, c.length);
	}
  }
  return "";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function signOut() {
		document.cookie = "id=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		document.cookie = "name=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		document.cookie = "mobile=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		document.cookie = "email=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		document.cookie = "dob=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		document.cookie = "gender=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	    location.href = "index.html";		
}

if(readCookie("id") != null){
   $("#with_login").show();
   $("#without_login").hide();
   $("#username").html(readCookie("name"));	   
   
}else{
	$("#without_login").show();
	$("#with_login").hide();
}