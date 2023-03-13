import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";``

// initialize kaboom context
kaboom({
    "fullscreen":"true",
    "debug":"true"
});

loadSprite("bg", "kartka.png")

loadSprite("santa", "pierwszyplan.png")

loadSound("muzyka","letitsnow.mp3")

add([
    sprite("bg"),
    pos(0,0),
])

const santa = add([
    sprite("santa"),
    pos(100,100)
])

onKeyRelease("space", ()=>play("muzyka"))

let prawo = true

onUpdate(()=>{
    
    if(prawo && santa.pos.x<500) 
    
    {
         santa.pos.x=santa.pos.x+1
    }
    
   

    else

    {
        prawo = false
        if (santa.pos.x>0) santa.pos.x=santa.pos.x-1

    }
    // if(santa.pos.x==500 && santa.pos.y<200) santa.pos.y=santa.pos.y+1

    // if(!prawo && santa.pos.x==100) santa.pos.x=santa.pos.x-1

    // if(santa.pos.x==500 && santa.pos.y==100) santa.pos.x=santa.pos.x















   // if(santa.pos.y==100) santa.pos.x=santa.pos.x-1
})


// add a piece of text at position (120, 80)
// add([
//     text("hello"),
//     pos(120, 80),
// ]);