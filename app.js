
var wrapper=document.getElementById("wrapper");
var number_card=0
var nb_clik=0
function init(){
    wrapper.innerHTML=""
    document.querySelector("div[id='coups']").innerHTML = 'Nombre de coups: 0' 
var card_animation = [
    { transform: "rotateY(90deg)" }
    
    
    ];
    
    var time_animation = {
    duration: 500,
    };


    var list1=[
    'child_asia1','child_boucle1','dark_brune1','man_blue1','man_chapeau1','woman_brune1',
    'child_asia2','child_boucle2','dark_brune2','man_blue2','man_chapeau2','woman_brune2'
]

    var list2 =[
        'cat_british1', 'cat_eyes1', 'cat_white1', 'dog_brown1', 'dog_husky1', 'dog_white1',
        'cat_british2', 'cat_eyes2', 'cat_white2', 'dog_brown2', 'dog_husky2', 'dog_white2'
    ]

    var list3= [
        'flute1', 'guitar1', 'harpe1', 'piano1', 'tambour1', 'violoncelle1',
        'flute2', 'guitar2', 'harpe2', 'piano2', 'tambour2', 'violoncelle2'
    ]

    switch (menu.value) {
        case 'list1':
            list_menu=list1;
            break;
        case 'list2':
            list_menu=list2;
            break;
        case 'list3':
            list_menu=list3;
            break;
        default:
            break;
    }

    menu.addEventListener("change", function(){
        init();
        
    })
        for (let i = 0; i < 12; i++) {
            var box= document.createElement("button");
            box.style.order=i;
            box.style.width="100px"
            box.style.height="100px"
            box.style.padding="25%"
            var card= list_menu[Math.floor(Math.random()*list_menu.length)]
            var index_card=list_menu.indexOf(card)
            box.className=card;
            box.id='question'
            list_menu.splice(index_card,1)
            wrapper.append(box);
            box.style.backgroundImage= "url('images/" + box.className.slice(0,box.className.length - 1) + ".jpg')"
            box.style.backgroundImage= "url('images/question.png')"
            
        
        }
    
    
    
    var card1
    var card2
    var checkList=[]
    var card
    var nb_coup=0
    var liste_box=document.querySelectorAll("button")
    
    function animate_card(e){
           
        e.animate(card_animation,time_animation)
        setTimeout(function(){
            e.style.backgroundImage= "url('images/" + e.className.slice(0,e.className.length - 1) + ".jpg')"
            e.id='image'
           
        }, 500)
        }


    function animate_check_cards(e){
        card= e.className
        checkList.push(card)
       
    
            
        if (checkList.length> 1){
            nb_clik=1
            card1=checkList[0]
            card2=checkList[1]
            
            if ( card1.slice(0,card1.length-1) !=  card2.slice(0,card2.length-1)){
                
        
                for (i = 0; i < checkList.length; i++) {
                    var list_card_switched=document.querySelectorAll("button[class="+ checkList[i] +"]") 
                    
                    list_card_switched.forEach(e => {
                        setTimeout(function(){
                            e.style.backgroundImage= "url('images/question.png')"
                            e.id='question'
                           
                            nb_clik=0
            
                        }, 1000)
                    });
                    }
                
              
                }
            else {
                for (i = 0; i < checkList.length; i++) {
                    var list_card_switched=document.querySelectorAll("button[class="+ checkList[i] +"]") 
                    
                    list_card_switched.forEach(e => {
                        
                        nb_clik=0
                    });

                    }
                number_card=number_card +2
                
            }
            checkList=[]
            nb_coup++
            setTimeout(function() {
                document.querySelector("div[id='coups']").innerHTML = 'Nombre de coups: ' + nb_coup
            }, 500);
            }
        
        
    }
    
    
    liste_box.forEach(box => {box.addEventListener("click", function(){
   
        if ( (box.id != 'image' && nb_clik==0)) {
            animate_card(box)
            animate_check_cards(box)
        
        }
        else (console.log(false))
        
        
    
    })

   
    } )

}

init()


    document.addEventListener("keydown", function(e){
        if (e.code=='Space' ) {
            wrapper.innerHTML=""
            nb_coup=0
            init()
        }
    
    })

    




