function disableIE() {
    if (document.all) {
        return false;
    }
}

function disableNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which==2 || e.which==3) {
            return false;
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = disableNS;
} 
else {
    document.onmouseup = disableNS;
    document.oncontextmenu = disableIE;
}

document.oncontextmenu = new Function("return false");

var controlprecionado = 0;
var altprecionado = 0;

function desactivarCrlAlt(teclaactual){
   var desactivar = false;
   // Ctrl +
   if (controlprecionado==17){
      if (teclaactual==78 || teclaactual==85){
        desactivar=true;
      } 
      if (teclaactual==83){
        desactivar=true;
      } 
      if (teclaactual==116){
        desactivar=true;
      } 
      if (teclaactual==114){
        desactivar=true;
      } 
   }
   // Alt +
   if (altprecionado==18){
      if (teclaactual==37){
        desactivar=true;
      } 
      if (teclaactual==39){
        desactivar=true;
      } 
   }
   if (teclaactual==17) controlprecionado=teclaactual;
   if (teclaactual==18) altprecionado=teclaactual;  
   return desactivar;
}

document.onkeyup = function(){ 
   if (window.event && window.event.keyCode==17){
        controlprecionado = 0;
   }
   if (window.event && window.event.keyCode==18){
        altprecionado = 0;
   }  
}

document.onkeydown = function(){ 
   //116->f5, 122->f11, 117->f6, 114->f3
   if (window.event && desactivarCrlAlt(window.event.keyCode)){
       return false;
   }

   // Ctrl + Shift + I
   if (event.ctrlKey && event.shiftKey && event.code === 'KeyI') {
      event.preventDefault();
      console.log('Combinación de teclas bloqueada');
    }

   // F5, F11, F6, F3, Backspace
   if (window.event && 
       (window.event.keyCode == 122 || 
       window.event.keyCode == 116 || 
       window.event.keyCode == 114 || 
       window.event.keyCode == 117 || 
       window.event.keyCode == 8)){
       window.event.keyCode = 505; 
   }
   if (window.event.keyCode == 505){ 
       return false; 
   } 
}

function showLanguageSelector(obj,language){    
    if("es_PA" != language){
        obj.show();        
    } else {
        obj.hide();
    }
}
                  
showLanguageSelector($k("#selectorEs"),'es_PA');
showLanguageSelector($k("#selectorEn"),'en_PA');
