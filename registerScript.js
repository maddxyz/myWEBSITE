
	var lnb = false;
	var fnb = false;
	var unb = false;
	var upwb = false;
	var ubdb = false;
	var uemlb = false;


	var ln = document.getElementById('lastname');
	var fn = document.getElementById('firstname');
	var upw = document.getElementById('userpwd');
	var ubd = document.getElementById('birthdate');
	var ueml = document.getElementById('useremail');
	var un = document.getElementById('username');
	var submitbt = document.getElementById('submitinput');

    var lnp = document.getElementById('lnp');
    var fnp = document.getElementById('fnp');
    var upwp = document.getElementById('pwdp');
    var ubdp = document.getElementById('bdp');
    var uemlp = document.getElementById('emlp');
    var unp = document.getElementById('unp');

	ln.addEventListener("keyup",checklname,false);
	fn.addEventListener("keyup",checkfname,false);
	un.addEventListener("keyup",checkuname,false);
	upw.addEventListener("keyup",checkpw,false);
	ubd.addEventListener("keyup",checkddn,false);
	ueml.addEventListener("keyup",checkemail,false);

function updateCSSClass(field, bnum, pnum) {
    if (bnum == 0 && pnum == 0) {
        new_class = 'wrong';
    } else if (bnum == 1 && pnum == 0) {
        new_class = 'right';
    }
    if (bnum == 0 && pnum == 1) {
        new_class = 'notes-wrong';
    } else if (bnum == 1 && pnum == 1) {
        new_class = 'notes-right';
    }
    field.className = new_class;
    return 1;
}


function checkpw() {
    if ( upw.value.match(/[a-z]/g) &&  upw.value.match(/[A-Z]/g) &&  upw.value.match(/[0-9]/g) &&  upw.value.length > 8) {
        updateCSSClass(upw, 1,0);
        updateCSSClass(pwdp, 1,1);
        upwb=true;
    }
    else {
    	updateCSSClass(upw, 0,0);
        updateCSSClass(pwdp, 0,1);
        upwb=false;
    }
    enable();
}

function checklname() {
    if ( ln.value.length > 0) {
        updateCSSClass(ln, 1,0)
        updateCSSClass(lnp, 1,1);
        lnb=true;
    }
    else {
    	updateCSSClass(ln, 0,0);
        updateCSSClass(lnp, 0,1);
    	lnb=false;
    }
    enable();
}

function checkfname() {
    
    if ( fn.value.length > 0) {
        updateCSSClass(fn, 1,0);
        updateCSSClass(fnp, 1,1);
        fnb=true;
    }
    else {
    	updateCSSClass(fn, 0,0);
        updateCSSClass(fnp, 0,1);
        fnb=false;
    }
    enable();
}

function isDate(y,m,d)
{
var date = new Date(y,m-1,d);
var convertedDate = ""+date.getFullYear() + (date.getMonth()+1) + date.getDate();
var givenDate = "" + y + m + d;
return ( givenDate == convertedDate);
}

function checkddn() {
	var pdate = ubd.value.split('/');
	var d = parseInt(pdate[0]);  
  	var m  = parseInt(pdate[1]);  
  	var y = parseInt(pdate[2]);
  	bd = new Date(y,m,d);
  	now = new Date();
    if (isDate(y,m,d) && now.getTime() > bd.getTime()) {
    	updateCSSClass(ubd, 1,0);
        updateCSSClass(bdp, 1,1);
        ubdb=true;
    }
    else {
    	updateCSSClass(ubd, 0,0);
        updateCSSClass(bdp, 0,1);
        ubdb=false;
    }
    enable();
}

function checkuname() {
    if ( un.value.length >= 6 ) {
        updateCSSClass(un, 1,0);
        updateCSSClass(unp, 1,1);
        unb=true;
    }
    else {
    	updateCSSClass(un, 0,0);
        updateCSSClass(unp, 0,1);
        unb=false;
    }
    enable();
}

function checkemail() {
    var emailregex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if ( emailregex.test(ueml.value) ) {
        updateCSSClass(ueml, 1,0);
        updateCSSClass(emlp, 1,1);
        uemlb=true;
    }
    else {
    	updateCSSClass(ueml, 0,0);
        updateCSSClass(emlp, 0,1);
        uemlb=false;
    }
    enable();
}

function enable(){
	if(lnb && fnb && ubdb && unb && upwb && uemlb){
		submitbt.removeAttribute("disabled");     /* = false;*/
	}
	else {
		submitbt.setAttribute('disabled', 'disabled');    /* = true;*/
	}
	return 1;
}