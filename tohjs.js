var tow1 = [];
var tow2 = [];
var tow3 = [];
var result = [];
var air = [];
var t = 0;
var s = 0;

function reset(k){
    tow1 = [];
    result = [];
    for(i = k;i > 0; i--){
        tow1.push(i);
        result.push(i);
    }
    tow2 = [];
    tow3 = [];
    air = [0,0];
    t = 0;
    s = 0;
    clock();
    document.getElementById("struct").classList.add("noblur");
    document.getElementById("sel").classList.add("noblur");
    document.getElementById("over").classList.add("blur");
}

function getval(){
    const x = document.getElementById("base");
    clearInterval(t);
    var k = parseInt(x.value);
    reset(k);
    maketower(k);
}

function maketower(k){
    document.getElementById("four").setAttribute("style","display:none");
    document.getElementById("five").setAttribute("style","display:none");
    document.getElementById("six").setAttribute("style","display:none");
    document.getElementById("seven").setAttribute("style","display:none");
    if(k==3){
        document.getElementById("three").setAttribute("x","55px");
        document.getElementById("three").setAttribute("y","200px");
        document.getElementById("two").setAttribute("x","62px");
        document.getElementById("two").setAttribute("y","180px");
        document.getElementById("one").setAttribute("x","70px");
        document.getElementById("one").setAttribute("y","160px");
    }
    else if(k==4){
        document.getElementById("four").setAttribute("style","display:block");
        document.getElementById("four").setAttribute("x","48px");
        document.getElementById("four").setAttribute("y","200px");
        document.getElementById("three").setAttribute("x","55px");
        document.getElementById("three").setAttribute("y","180px");
        document.getElementById("two").setAttribute("x","62px");
        document.getElementById("two").setAttribute("y","160px");
        document.getElementById("one").setAttribute("x","70px");
        document.getElementById("one").setAttribute("y","140px");
    }
    else if(k==5){
        document.getElementById("five").setAttribute("style","display:block");
        document.getElementById("five").setAttribute("x","41px");
        document.getElementById("five").setAttribute("y","200px");
        document.getElementById("four").setAttribute("style","display:block");
        document.getElementById("four").setAttribute("x","48px");
        document.getElementById("four").setAttribute("y","180px");
        document.getElementById("three").setAttribute("x","55px");
        document.getElementById("three").setAttribute("y","160px");
        document.getElementById("two").setAttribute("x","62px");
        document.getElementById("two").setAttribute("y","140px");
        document.getElementById("one").setAttribute("x","70px");
        document.getElementById("one").setAttribute("y","120px");
    }
    else if(k==6){
        document.getElementById("six").setAttribute("style","display:block");
        document.getElementById("six").setAttribute("x","33px");
        document.getElementById("six").setAttribute("y","200px");
        document.getElementById("five").setAttribute("style","display:block");
        document.getElementById("five").setAttribute("x","41px");
        document.getElementById("five").setAttribute("y","180px");
        document.getElementById("four").setAttribute("style","display:block");
        document.getElementById("four").setAttribute("x","48px");
        document.getElementById("four").setAttribute("y","160px");
        document.getElementById("three").setAttribute("x","55px");
        document.getElementById("three").setAttribute("y","140px");
        document.getElementById("two").setAttribute("x","62px");
        document.getElementById("two").setAttribute("y","120px");
        document.getElementById("one").setAttribute("x","70px");
        document.getElementById("one").setAttribute("y","100px");
    }
    else{
        document.getElementById("seven").setAttribute("style","display:block");
        document.getElementById("seven").setAttribute("x","26px");
        document.getElementById("seven").setAttribute("y","200px");
        document.getElementById("six").setAttribute("style","display:block");
        document.getElementById("six").setAttribute("x","33px");
        document.getElementById("six").setAttribute("y","180px");
        document.getElementById("five").setAttribute("style","display:block");
        document.getElementById("five").setAttribute("x","41px");
        document.getElementById("five").setAttribute("y","160px");
        document.getElementById("four").setAttribute("style","display:block");
        document.getElementById("four").setAttribute("x","48px");
        document.getElementById("four").setAttribute("y","140px");
        document.getElementById("three").setAttribute("x","55px");
        document.getElementById("three").setAttribute("y","120px");
        document.getElementById("two").setAttribute("x","62px");
        document.getElementById("two").setAttribute("y","100px");
        document.getElementById("one").setAttribute("x","70px");
        document.getElementById("one").setAttribute("y","80px");
    }
}

function getX(a){
    switch(a){
        case 1: return 70;
        case 2: return 62;
        case 3: return 55;
        case 4: return 48;
        case 5: return 41;
        case 6: return 33;
        case 7: return 26;
    }
}

function finish(){
    var x = document.getElementById("over");
    x.setAttribute("style","display:block;z-index:3");
    document.getElementById("struct").classList.remove("noblur");
    document.getElementById("struct").classList.add("blur");
    document.getElementById("sel").classList.remove("noblur");
    document.getElementById("sel").classList.add("blur");
    document.getElementById("over").classList.remove("blur");
    document.getElementById("over").classList.add("noblur");
    document.getElementById("base").disabled=true;
    document.getElementById("tower1").disabled=true;
    document.getElementById("tower2").disabled=true;
    document.getElementById("tower3").disabled=true;
}

function complete(){
    document.getElementById("base").disabled=false;
    document.getElementById("tower1").disabled=false;
    document.getElementById("tower2").disabled=false;
    document.getElementById("tower3").disabled=false;
    document.getElementById("struct").classList.remove("blur");
    document.getElementById("sel").classList.remove("blur");
    document.getElementById("over").classList.remove("noblur");
    var x = document.getElementById("over");
    x.setAttribute("style","display:none;z-index:-3");
    var y = document.getElementById("base");
    getval();
}

function disable(){
    document.getElementById("tower1").disabled=true;
    document.getElementById("tower2").disabled=true;
    document.getElementById("tower3").disabled=true;
}

function enable(){
    document.getElementById("tower1").disabled=false;
    document.getElementById("tower2").disabled=false;
    document.getElementById("tower3").disabled=false;
}

function game(k){
    if(k==1){
        if(air[0]==0){
            if(tow1.length != 0){
                animated(1,4);
                air[1] = tow1.pop();
                air[0] = 1;
                if(t==0){
                    t = setInterval(clock,1000);
                }
            }
        }
        else{
            if(tow1.length != 0){
                if(tow1[tow1.length-1] > air[1]){
                    tow1.push(air[1]);
                    animated(4,1);
                    air = [0,0];
                }
            }
            else{
                tow1.push(air[1]);
                animated(4,1);
                air = [0,0];
            }
        }
    }
    else if(k==2){
        if(air[0]==0){
            if(tow2.length != 0){
                animated(2,4);
                air[1] = tow2.pop();
                air[0] = 2;
            }
        }
        else{
            if(tow2.length != 0){
                if(tow2[tow2.length-1] > air[1]){
                    tow2.push(air[1]);
                    animated(4,2);
                    air = [0,0];
                }
            }
            else{
                tow2.push(air[1]);
                animated(4,2);
                air = [0,0];
            }
        }
    }
    else{
        if(air[0]==0){
            if(tow3.length != 0){
                animated(3,4);
                air[1] = tow3.pop();
                air[0] = 3;
            }
        }
        else{
            if(tow3.length != 0){
                if(tow3[tow3.length-1] > air[1]){
                    tow3.push(air[1]);
                    animated(4,3);
                    air = [0,0];
                }
            }
            else{
                tow3.push(air[1]);
                animated(4,3);
                air = [0,0];
            }
        }
    }
    if((tow2.length == result.length) || (tow3.length == result.length)){
        clearInterval(t);
        setTimeout(finish,1100);
    }
}

function clock(){
    document.getElementById("timer").innerHTML = '0'.repeat(Math.max(2-Math.floor(s/60).toString().length,0)) + Math.floor(s/60) + ":" + '0'.repeat(Math.max(2-(s%60).toString().length,0)) + (s%60);
    s = s+1;
}

function f(a,b){
    var c,d;
    switch(b){
        case 0: a.classList.add("RmoveY7"); c = "RmoveY7"; d = 7; break;
        case 1: a.classList.add("RmoveY6"); c = "RmoveY6"; d = 6; break;
        case 2: a.classList.add("RmoveY5"); c = "RmoveY5"; d = 5; break;
        case 3: a.classList.add("RmoveY4"); c = "RmoveY4"; d = 4; break;
        case 4: a.classList.add("RmoveY3"); c = "RmoveY3"; d = 3; break;
        case 5: a.classList.add("RmoveY2"); c = "RmoveY2"; d = 2; break;
        case 6: a.classList.add("RmoveY1"); c = "RmoveY1"; d = 1; break;
    }
    setTimeout(function f2(a,c,d){a.classList.remove(c);a.setAttribute("y",60+(20*d))},1200,a,c,d);
}

function animated(a,b){
    var x,y,z;
    disable();
    switch(a){
        case 1: x = tow1[tow1.length-1]; break;
        case 2: x = tow2[tow2.length-1]; break;
        case 3: x = tow3[tow3.length-1]; break;
        case 4: x = air[1]; break;
    }
    switch(x){
        case 1: y = document.getElementById("one"); break;
        case 2: y = document.getElementById("two"); break;
        case 3: y = document.getElementById("three"); break;
        case 4: y = document.getElementById("four"); break;
        case 5: y = document.getElementById("five"); break;
        case 6: y = document.getElementById("six"); break;
        case 7: y = document.getElementById("seven"); break;
    }
    if(b==1){
        if(air[0] == 1){
            f(y,tow1.length-1);
            setTimeout(enable,500);
        }
        else if(air[0] == 2){
            y.classList.add("RmoveX12");
            setTimeout(function k(y,x){y.classList.remove("RmoveX12");y.setAttribute("x",getX(x))},500,y,x);
            setTimeout(f,500,y,tow1.length-1);
            setTimeout(enable,1000);
        }
        else{
            y.classList.add("RmoveX13");
            setTimeout(function k(y,x){y.classList.remove("RmoveX13");y.setAttribute("x",getX(x))},500,y,x);
            setTimeout(f,500,y,tow1.length-1);
            setTimeout(enable,1000);
        }

    }
    else if(b==2){
        if(air[0] == 2){
            f(y,tow2.length-1);
            setTimeout(enable,500);
        }
        else if(air[0] == 1){
            y.classList.add("moveX12");
            setTimeout(function k(y,x){y.classList.remove("moveX12");y.setAttribute("x",getX(x)+210);},500,y,x);
            setTimeout(f,500,y,tow2.length-1);
            setTimeout(enable,1000);
        }
        else{
            y.classList.add("RmoveX23");
            setTimeout(function k(y,x){y.classList.remove("RmoveX23");y.setAttribute("x",getX(x)+210)},500,y,x);
            setTimeout(f,500,y,tow2.length-1);
            setTimeout(enable,1000);
        }
    }
    else if(b==3){
        if(air[0] == 3){
            f(y,tow3.length-1);
            setTimeout(enable,500);
        }
        else if(air[0] == 1){
            y.classList.add("moveX13");
            setTimeout(function k(y,x){y.classList.remove("moveX13");y.setAttribute("x",getX(x)+420)},500,y,x);
            setTimeout(f,500,y,tow3.length-1);
            setTimeout(enable,1000);
        }
        else{
            y.classList.add("moveX23");
            setTimeout(function k(y,x){y.classList.remove("moveX23");y.setAttribute("x",getX(x)+420)},500,y,x);
            setTimeout(f,500,y,tow3.length-1);
            setTimeout(enable,1000);
        }
    }
    else{
        if(a==1){
            switch(tow1.length){
                case 1: z = "moveY7"; break;
                case 2: z = "moveY6"; break;
                case 3: z = "moveY5"; break;
                case 4: z = "moveY4"; break;
                case 5: z = "moveY3"; break;
                case 6: z = "moveY2"; break;
                case 7: z = "moveY1"; break;
            }
            y.classList.add(z);
            setTimeout(function f2(y,z){y.classList.remove(z);y.setAttribute("y","15px")},500,y,z);
        }
        else if(a==2){
            switch(tow2.length){
                case 1: z = "moveY7"; break;
                case 2: z = "moveY6"; break;
                case 3: z = "moveY5"; break;
                case 4: z = "moveY4"; break;
                case 5: z = "moveY3"; break;
                case 6: z = "moveY2"; break;
                case 7: z = "moveY1"; break;
            }
            y.classList.add(z);
            setTimeout(function f2(y,z){y.classList.remove(z);y.setAttribute("y","15px")},500,y,z);
        }
        else{
            switch(tow3.length){
                case 1: z = "moveY7"; break;
                case 2: z = "moveY6"; break;
                case 3: z = "moveY5"; break;
                case 4: z = "moveY4"; break;
                case 5: z = "moveY3"; break;
                case 6: z = "moveY2"; break;
                case 7: z = "moveY1"; break;
            }
            y.classList.add(z);
            setTimeout(function f2(y,z){y.classList.remove(z);y.setAttribute("y","15px")},500,y,z);
        }
        setTimeout(enable,500);
    }
}
