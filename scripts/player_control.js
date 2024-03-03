function aesthetic_activator(id){
    /* this looks like the perfect case to use switch case.....
    if only it wasn't 2 am .... */

    if(id=="inv_common"){
        document.getElementById("common_show").classList.toggle('inactive');
    }else if (id=="inv_rare"){
        document.getElementById("rare_show").classList.toggle('inactive');

    }else if (id=="inv_epic"){
    document.getElementById("epic_show").classList.toggle('inactive');

    }else if (id=="inv_legendary"){
    document.getElementById("legendary_show").classList.toggle('inactive');

} 

}

function item_activator(id){
    document.getElementById(id).classList.toggle('item_active');
}


current_height = 0;
current_left =0;
window_height_one_percentage = window.innerHeight/100;
window_width_one_percentage =window.innerWidth/100;
safe_zone_position_top = document.getElementById("safe_zone").offsetTop;
safe_zone_position_left = document.getElementById("safe_zone").offsetLeft;
active_threats =[];
active_threats_stats=[];
active_threats_ledger=[];
previous_key="";
invulnerable=false;
speed = 5;
const rest_bank = 0;
current_income = 1;
current_bank = 0;
max_hitpoints=1000;
hitpoints =450;
passive_healing=20.5;
attack=10;
player_exp=0;
player_level=1;
unassigned_stats=0;
base_player_stats=1;
ratio=0;
death_confirmation=0;

if(window.innerHeight> window.innerWidth){
    ratio=window.innerHeight/window.innerWidth;
}else{
    ratio=window.innerWidth/window.innerHeight;

}


/* document.getElementById("ratio").innerHTML =
"window width: " + window.innerWidth + "px<br>" +
"window height: " + window.innerHeight + "px<br>" +
"Aspect Ratio  uwu" +  ratio + "<br>" ;
*/


function player_input(e){
    if (e.key=="t"){
        document.getElementById("devtest1").classList.toggle('inactive');
    }
    if (e.key =="w"){
        if(current_height-(window_height_one_percentage * speed)>0){
            current_height -= window_height_one_percentage * speed;
            document.getElementById("playable_werewolf").style.top = current_height+"px";
        }
    }
    if (e.key =="s"){
        if(current_height+(window_height_one_percentage * speed)<window.innerHeight-120){

            current_height += window_height_one_percentage * speed;
            document.getElementById("playable_werewolf").style.top= current_height+"px";

        }
    }
    if (e.key =="a"){
        if(current_left>0){
            current_left -= window_width_one_percentage*speed;
            document.getElementById("playable_werewolf").style.left= current_left+"px";

        }
    }
    if (e.key =="d"){
        if(current_left+65<window.innerWidth){

        current_left  += window_width_one_percentage*speed;
        document.getElementById("playable_werewolf").style.left= current_left+"px";
        }
    }
    if (e.key =="l"){
        if((current_height + window_height_one_percentage*speed*3)<window.innerHeight-75 && (current_left + window_width_one_percentage*speed*3) <window.innerWidth-65){
            current_height += window_height_one_percentage*speed*3;
            current_left += window_width_one_percentage*speed*3;
            document.getElementById("playable_werewolf").style.top= current_height+"px";
            document.getElementById("playable_werewolf").style.left= current_left+"px";

        }
    }
    if (e.key =="h"){
        if((current_height-window_height_one_percentage*speed*3)>0 && (current_left -window_width_one_percentage*speed*3) >0){
            current_height -= window_height_one_percentage*speed*3;
            current_left -= window_width_one_percentage*speed*3;
            document.getElementById("playable_werewolf").style.top= current_height+"px";
            document.getElementById("playable_werewolf").style.left= current_left+"px";

        }
    }
    if (e.key =="j"){
        if((current_height+window_height_one_percentage*speed*3)<window.innerHeight-75 && (current_left -window_width_one_percentage*speed*3) >0){
            current_height += window_height_one_percentage*speed*3;
            current_left -= window_width_one_percentage*speed*3;
            document.getElementById("playable_werewolf").style.top= current_height+"px";
            document.getElementById("playable_werewolf").style.left= current_left+"px";

        }
    }
    if (e.key =="k"){
        if((current_height-window_height_one_percentage*speed*3)>0 && (current_left + window_width_one_percentage*speed*3) <window.innerWidth-65){
            current_height -= window_height_one_percentage*speed*3;
            current_left += window_width_one_percentage*speed*3;
            document.getElementById("playable_werewolf").style.top= current_height+"px";
            document.getElementById("playable_werewolf").style.left= current_left+"px";
    }
    }
    if (e.key ==" "){
    }
    if (e.key =="1"){
        document.getElementById("item_1").classList.toggle('item_active');
    }
    if (e.key =="2"){
        document.getElementById("item_2").classList.toggle('item_active');
    }
    if (e.key =="3"){
        document.getElementById("item_3").classList.toggle('item_active');
    }
    if (e.key =="4"){
        document.getElementById("item_4").classList.toggle('item_active');
    }
    if (e.key =="5"){
        document.getElementById("item_5").classList.toggle('item_active');
    }
    if (e.key =="6"){
        document.getElementById("item_6").classList.toggle('item_active');
    }
    if (e.key =="7"){
        document.getElementById("item_7").classList.toggle('item_active');
    }
    if (e.key =="8"){
        document.getElementById("item_8").classList.toggle('item_active');
    }
    if (e.key =="9"){
        document.getElementById("item_9").classList.toggle('item_active');
    }
    if (e.key =="0"){
        document.getElementById("item_10").classList.toggle('item_active');
    }

    safe_zone_check();

}

document.getElementById("bank_account").innerHTML = rest_bank;
function hitpoints_display(){
    if(hitpoints>max_hitpoints){
        hitpoints=max_hitpoints;
    }else if (hitpoints<0){
        hitpoints=0;

    }
    identifier ="heart";
    counter =0;
    hitpoints_data= document.getElementById("clearhp");
    const hitpointsarray = [1,1,1,1,1,1];
    if (hitpoints/max_hitpoints*100 >80){
    counter=5;
    currentheartcalculation = (hitpoints/max_hitpoints*100) - 80;
    hitpointsarray[counter] = currentheartcalculation/20;
    for (n=counter;n<5;n++){
        hitpointsarray[n+1] = 0;
    }
    }else if(hitpoints/max_hitpoints*100>60){
    counter=4;
    currentheartcalculation = (hitpoints/max_hitpoints*100) - 60;
    hitpointsarray[counter] = currentheartcalculation/20;
    for (n=4;n<5;n++){
        hitpointsarray[n+1] = 0;
    }
    }else if(hitpoints/max_hitpoints*100>40){
    counter=3;
    currentheartcalculation = (hitpoints/max_hitpoints*100) - 40;
    hitpointsarray[counter] = currentheartcalculation/20;
    for (n=counter;n<5;n++){
        hitpointsarray[n+1] = 0;
    }
    }else if(hitpoints/max_hitpoints*100>20){
    counter=2;
    currentheartcalculation = (hitpoints/max_hitpoints*100) - 20;
    hitpointsarray[counter] = currentheartcalculation/20;
    for (n=counter;n<5;n++){
        hitpointsarray[n+1] = 0;
    }
    }else{
    counter=1;
    hitpointsarray[counter] = (hitpoints/max_hitpoints*100)/20;
    for (n=counter;n<5;n++){
        hitpointsarray[n+1] = 0;
    }
    }

    for(x=1;x<=5;x++){
        document.getElementById(identifier+x).style.opacity= hitpointsarray[x];
    }
    hitpoints_data.innerHTML = Math.floor((hitpoints/max_hitpoints*100));
    
    /*Number((hitpoints/max_hitpoints*100).toFixed(1)) for decimal place later on*/
    
}

function income(){
    current_bank += current_income;
    document.getElementById("bank_account").innerHTML = current_bank ;
}
setInterval(income,1000);
function reseter(){
    document.getElementById("playable_werewolf").style.border="1px solid white";
    document.getElementById("playable_werewolf").style.backgroundColor="rgba(0,0,0,0.5)";

}

function shop(){
    tier1 =1;
    tier2=100;
    tier3=10000;
    tier4=100000;
    if(current_bank>=tier4){
        current_bank -=tier4;
        current_income = current_income*100;
    }else if(current_bank>=tier3){
        current_bank -= tier3;
        current_income= current_income *2;
    }else if(current_bank>=tier2){
        current_bank-=tier2;
        current_income +=10;
    }else{
        current_bank-= tier1;
        current_income++;
    }
}
function shop_hp(){
    if(current_bank>100 && hitpoints <=max_hitpoints){
        current_bank -=100;
        hitpoints += 50;
        hitpoints_display();
    }
}
function passive_healing_player(){
    if (hitpoints <max_hitpoints){
        hitpoints += passive_healing;
    }else{
        hitpoints = max_hitpoints;

    }
    hitpoints_display();


}
function safe_zone_check(){
    if((current_height+75>=safe_zone_position_top && current_left+65 >=safe_zone_position_left) && (current_height+75<=safe_zone_position_top+200 && current_left+65 <=safe_zone_position_left+200) ){
        document.getElementById("playable_werewolf").style.border="3px solid green";
        invulnerable=true;
    }else{
        document.getElementById("playable_werewolf").style.border="1px solid white";
        invulnerable=false;
    }
}
function threat_builder(threat_hp,threat_defense,threat_speed,threat_size_height,threat_size_width,threat_rarity_score,threat_early_position_top,threat_early_position_left){
active_threats.length

threat_body= document.createElement("div");
id_attribute = document.createAttribute("id");
id_attribute.value ="threat"+ (active_threats.length+1);
class_attribute = document.createAttribute("class");
class_attribute.value="threat_default";
threat_body_style= document.createAttribute("style");
if(threat_rarity_score>90){
    rank="red";;
}else if(threat_rarity_score>75){
    rank="purple";
}else if(threat_rarity_score>60){
    rank="burlywood";
}else{
    rank="white";
}
threat_body_style.value="width:"+threat_size_width+"px;" +"height:"+threat_size_height+"px;max-width:"+threat_size_width+"px;" +"height:"+threat_size_height+"px;border: 1px solid "+rank+";position: absolute;top:"+threat_early_position_top+"px;left:"+threat_early_position_left+"px;" ;
threat_body.setAttributeNode(id_attribute);
threat_body.setAttributeNode(threat_body_style);
threat_body.setAttributeNode(class_attribute);

active_threats.push(active_threats.length+1);
active_threats_stats.push(threat_hp,threat_defense,threat_speed,threat_rarity_score,threat_early_position_top,threat_early_position_left,1,1,threat_size_height,threat_size_width);
active_threats_ledger.push(active_threats,active_threats_stats);
threat_body.innerHTML="ID:"+active_threats_ledger[0][active_threats.length-1] + "Stats: HP:" +active_threats_ledger[1][active_threats_stats.length-10]+"<br/>Defense:"+active_threats_ledger[1][active_threats_stats.length-9]+"<br/>Speed:"+active_threats_ledger[1][active_threats_stats.length-8]+ "<br/>Rarity:"+ active_threats_ledger[1][active_threats_stats.length-7] + "<br/>height:"+ active_threats_ledger[1][active_threats_stats.length-2] + "<br/>width:"+ active_threats_ledger[1][active_threats_stats.length-1] ;

document.getElementById("threat_zone").appendChild(threat_body);



}

function spawner(){
    threat_hp= 100;
    threat_defense=12;
    threat_speed=4;
    threat_size_height=100;
    threat_size_width=100;
    threat_early_position_top =0;
    threat_early_position_left=0;
    threat_rarity_score=1;
    threat_hp= Math.floor(Math.random()*100+1);
    threat_defense= Math.floor(Math.random()*12+1);
    threat_speed= Math.floor(Math.random()*400+1);
    threat_size_height =  Math.floor(Math.random()*100+10);
    threat_size_width = Math.floor(Math.random()*100+10);
    threat_early_position_top = Math.floor(Math.random()* (window.innerHeight-threat_size_height));
    threat_early_position_left = Math.floor(Math.random()*(window.innerWidth-threat_size_width));
    threat_rarity_score = Math.round(((threat_hp/100*100)+(threat_defense/12*100)+(threat_speed/400*100)+(threat_size_height/100*100)+(threat_size_width/100*100))/5);
    threat_builder(threat_hp,threat_defense,threat_speed,threat_size_height,threat_size_width,threat_rarity_score,threat_early_position_top,threat_early_position_left);
    /*
    console.log(threat_hp);
    console.log(threat_defense);
    console.log(threat_speed);
    console.log(threat_rarity_score);
    console.log(threat_early_position_top,threat_early_position_left);
    */
}
function threat_abilities(){
    for(x=1;x<=active_threats.length;x++){
        threat_looping_position_top= Math.floor(Math.round(active_threats_ledger[1][x*5-1]));
        threat_looping_position_left= Math.floor(Math.round(active_threats_ledger[1][x*6-1]));
        threat_loopping_speed = active_threats_ledger[1][x*3-1];

        if(invulnerable==false){
            threat_looping_position_top +=player_checker_x(threat_looping_position_top,threat_loopping_speed);
            threat_looping_position_left += player_checker_y(threat_looping_position_left,threat_loopping_speed);
            hit_checker(x,threat_looping_position_top,threat_looping_position_left)
        
        }else{
            direction_top = active_threats_ledger[1][x*7-1];
            direction_left = active_threats_ledger[1][x*8-1];
            if(threat_looping_position_top>=window.innerHeight-window_height_one_percentage*10-10){
                surprise=false;
                direction_top = 0;
                active_threats_ledger[1][x*7-1] = direction_top;
            }else if(threat_looping_position_top<25){
                surprise=false;
                direction_top=1;
                active_threats_ledger[1][x*7-1] = direction_top;
            }else{
                surprise=true;
            }
        
        
            if(threat_looping_position_left>=window.innerWidth-window_width_one_percentage*10-10){
                direction_left = 0;
                surprise=false
                active_threats_ledger[1][x*8-1] = direction_top;
            }else if(threat_looping_position_left<=0){
                surprise=false
                direction_left=1;
                active_threats_ledger[1][x*8-1] = direction_top;
            }
            
            if(direction_top==1){
                threat_looping_position_top += Math.round(window_height_one_percentage);
            }else{
                threat_looping_position_top -= Math.round(window_height_one_percentage);
        
            }
        
            if(direction_left==1){
                threat_looping_position_left +=Math.round(window_width_one_percentage);
            }else{
                threat_looping_position_left -=Math.round(window_width_one_percentage);
            }

        }

        tempidentifier="threat"+x;
        /*
        console.log(threat_looping_position_top,threat_looping_position_left);
        console.log(tempidentifier);
        */
        document.getElementById(tempidentifier).style.top =threat_looping_position_top+"px";
        document.getElementById(tempidentifier).style.left = threat_looping_position_left+"px";
        active_threats_ledger[1][x*5-1] =threat_looping_position_top;
        active_threats_ledger[1][x*6-1]=threat_looping_position_left;
    }

}
function player_checker_x(threat_looping_position_top,threat_loopping_speed){
    if(invulnerable==false){
        if(Math.floor(Math.round(current_height))<threat_looping_position_top){
            return -1;
        }else if(threat_looping_position_top < Math.floor(Math.round(current_height))){
            return 1;
        }else{
            return 0;
        }
}else{
    return 0;
}
}

function player_checker_y(threat_looping_position_left,threat_loopping_speed){
    if(invulnerable==false){
        if(Math.floor(Math.round(current_left))<threat_looping_position_left){
            return -1;
        }else if(threat_looping_position_left<Math.floor(Math.round(current_left))){
            return 1;
        }else{
            return 0;
        }
}else{
    return 0;
}
}

function hit_checker(x,threat_looping_position_top,threat_looping_position_left){

    player_hitbox_height=75;
    player_hitbox_width=65;
    threat_hitbox_h = active_threats_ledger[1][x*9-1];
    threat_hitbox_w = active_threats_ledger[1][x*10-1];
    console.log(threat_hitbox_h);
    console.log(threat_hitbox_w);

    threat_hp_fight= active_threats_ledger[1][x-1];
    threat_defense_fight=active_threats_ledger[1][x*2-1];
    threat_damage_fight=threat_hp_fight*threat_defense_fight;

    if((((threat_looping_position_top >= Math.floor(Math.round(current_height))&&threat_looping_position_top <= Math.floor(Math.round(current_height+player_hitbox_height))) || (threat_looping_position_top+threat_hitbox_h >= Math.floor(Math.round(current_height))&&threat_looping_position_top+threat_hitbox_h <= Math.floor(Math.round(current_height+player_hitbox_height))))
    && ((threat_looping_position_left >= Math.floor(Math.round(current_left))&&threat_looping_position_left <= Math.floor(Math.round(current_left+player_hitbox_width))) || (threat_looping_position_left+threat_hitbox_w >= Math.floor(Math.round(current_left))&&threat_looping_position_left+threat_hitbox_w <= Math.floor(Math.round(current_left+player_hitbox_width))))) 
    && hitpoints - threat_damage_fight>0){
        console.log("t_dmg"+threat_damage_fight);
        hitpoints -=threat_damage_fight;
        hitpoints_display();
        active_threats_ledger[1][x*5-1] +=100;
        active_threats_ledger[1][x*6-1] +=100;
        if(threat_hp_fight>0 && threat_hp_fight - attack <=0){
            active_threats_ledger[1][x-1]=0;
            player_exp+=50;
            player_leveler();
            threat_death();
            document.getElementById("threat"+x).innerHTML ="Threat dead";
            document.getElementById("threat"+x).style.display="none";


        }else if(threat_hp_fight==0){
            active_threats_ledger[1][x-1]=0;
            document.getElementById("threat"+x).innerHTML ="Threat has already been killed before";

        }else{
            active_threats_ledger[1][x-1] -= attack;
            document.getElementById("threat"+x).style.opacity=1;
            document.getElementById("threat"+x).innerHTML ="HP: "+ active_threats_ledger[1][x-1];
        }


        current_height -=10;
        current_left -=10;
        document.getElementById("playable_werewolf").style.top= current_height+"px";
        document.getElementById("playable_werewolf").style.left= current_left+"px";
        document.getElementById("playable_werewolf").style.border="50px solid red";



    } else if ((((threat_looping_position_top >= Math.floor(Math.round(current_height))&&threat_looping_position_top <= Math.floor(Math.round(current_height+player_hitbox_height))) || (threat_looping_position_top+threat_hitbox_h >= Math.floor(Math.round(current_height))&&threat_looping_position_top+threat_hitbox_h <= Math.floor(Math.round(current_height+player_hitbox_height))))
    && ((threat_looping_position_left >= Math.floor(Math.round(current_left))&&threat_looping_position_left <= Math.floor(Math.round(current_left+player_hitbox_width))) || (threat_looping_position_left+threat_hitbox_w >= Math.floor(Math.round(current_left))&&threat_looping_position_left+threat_hitbox_w <= Math.floor(Math.round(current_left+player_hitbox_width))))) 
    && hitpoints- threat_damage_fight <=0){
        hitpoints =0;
        hitpoints_display();
        player_death();
    }



}
function player_leveler (){
    if (player_exp>= player_level*100){
        player_exp=0;
        player_level++;
        unassigned_stats+=10;
        document.getElementById("stats_display").innerHTML="Level: "+ player_level;
    }

}

function stats_assigner(){

}

function player_death(){
    score=current_bank*player_level+player_exp;
    document.getElementById('stat_breakdown_death').innerHTML="<h1>Score: "+score+"</h1><br><h2>You had " +current_bank+" money </h2><br><h2>And were level " + player_level+"!<br> You also had this much exp since your last level up " + player_exp+"</h2>";
    if (death_confirmation==0){
        if(score>1000){
            for(num1=0;num1<document.getElementsByClassName('score_gating').length;num1++){
                document.getElementsByClassName('score_gating')[num1].style.display="block";
            }
            document.getElementById('explain').innerHTML="<h1>You have gotten all the links!</h1>";
        }else if(score>750){
            for(num1=0;num1<document.getElementsByClassName('score_gating').length-1;num1++){
                document.getElementsByClassName('score_gating')[num1].style.display="block";
            }
            document.getElementById('explain').innerHTML="<h1>You have unlocked some links! You still needed " + (1000-score) + " more score to unlock the last link!</h1>";

        }else if(score>500){
            for(num1=0;num1<document.getElementsByClassName('score_gating').length-2;num1++){
                document.getElementsByClassName('score_gating')[num1].style.display="block";
            }
            document.getElementById('explain').innerHTML="<h1>You have unlocked some links! You still needed " + (750-score) + " more score to unlock the next link!</h1>";
            
        }else{
            document.getElementsByClassName('score_gating')[0].style.display="block";
            document.getElementById('explain').innerHTML="<h1>You have unlocked no new links! You still needed " + (500-score) + " more score to unlock the next link!<br/> But at least you have the first link always unlocked!</h1>";


        }
        document.getElementById("death_screen").classList.toggle('display_death');
        death_confirmation++;
        passive_healing=0;
        current_income =0;

    }
}
function threat_death(){

}
function omg_they_want_to_hire_me(){
    document.getElementById("death_screen").classList.toggle('display_death');
    document.getElementById("form_contact_show").classList.toggle('inactive');
}
setInterval(passive_healing_player,5000);
player_input("s");
hitpoints_display();
setInterval(threat_abilities,25);
setInterval(spawner,15000);


