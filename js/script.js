/*var visibilidade = true;

function vejaMais(){
    document.getElementById('ver-mais').style.display = "inline";   
}

function Close(){
    document.getElementById('ver-mais').style.display = "none";
}
function OpenClose(){
    if (visibilidade){
        document.getElementById('proximos-eventos').style.display="none";
        visibilidade = false;
    }else{
        document.getElementById('eventos-anteriores').style.display="inline";
        visibilidade = true;
    }
}*/

function proximosEventos(){
    if(document.getElementById('proximos-eventos').style.display == 'inline'){
        document.getElementById('eventos-anteriores').style.display = 'none';
    }else{
        document.getElementById('proximos-eventos').style.display = 'inline';
        document.getElementById('eventos-anteriores').style.display = 'none';
    }
}

function eventosAnteriores(){
    if(document.getElementById('eventos-anteriores').style.display == 'inline'){
        document.getElementById('proximos-eventos').style.display = 'none';
    }else{
        document.getElementById('eventos-anteriores').style.display = 'inline';
        document.getElementById('proximos-eventos').style.display = 'none';
    }
}

function mostrarMenu(){
    if(document.getElementById('menu').style.display == 'inline'){
        document.getElementById('menu').style.display = 'none';
    }else{
        document.getElementById('menu').style.display = 'none';
        document.getElementById('menu').style.display = 'inline';
    }
}


/*var proxeventos = true;

function Proximos(){
    if (proxeventos){
        document.getElementById('eventos-anteriores').style.display="none"
        proxeventos = false;
    }else{
        document.getElementById('eventos-anteriores').style.display="inline"
        proxeventos = true;
    }
}

var eventosant = true;

function Anteriores(){
    if (eventosant){
        document.getElementById('proximos-eventos').style.display="inline"
        eventosant = false;
    }else{
        document.getElementById('proximos-eventos').style.display="none"
        eventosant = true;
    }
}*/

/*var voltar = true;

function Voltar(){
    if (voltar){
        document.getElementById('eventos-anteriores').style.display="inline"
        voltar = false;
    }elese{
        document.getElementById('proximos-eventos').style.display="inline"
        voltar = true;
    }
}*/