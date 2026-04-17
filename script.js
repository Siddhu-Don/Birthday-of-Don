const notes = document.getElementById("notes");
const pfp = document.getElementById("pfp");
const cont = document.getElementById("container");
const bck_btn = document.getElementById("bck_btn");
const cover = document.getElementById("cover");
const cover1 = document.getElementById("cover1");

var a = 1;
if (a == 1) {
    const audio = document.getElementById("bg-music");
    audio.play();
    a = 0;
}

bck_btn.addEventListener("click", () => {
    bck_btn.style.display = "none";
    cover.classList.remove("note");
    cover1.classList.remove("pfp");
    cont.style.display = "flex";
});

notes.addEventListener("click", () => {
    cover.classList.add("note");
    cover1.classList.remove("pfp");
    cont.style.display = "none";
    bck_btn.style.display = "block";
});

pfp.addEventListener("click", () => {
    cover1.classList.add("pfp");
    cover.classList.remove("note");
    cont.style.display = "none";
    bck_btn.style.display = "block";
});


var not1 = `Siddhi is my very good friend. She is very serious and strict this is some info that you will recive if ask anyone else. But the siddhi I know is different she is very pookie. when I saw her first i thought she is very full of ego coz she didn't talk to me that day, but my life took turn with CIA 1 coz it was the time she showed her real self.like how kind she is she explained topic to mi when even i gave up the hope to pass she still taught me. siddhi is very kind and soft hearted girl (aunti). As being pookie she is still very much strong (mentally) than most of the people I know. just one things you should try do is ,do not take me that much seriously that it will hurt you.coz i am stupid and do stupid things. but you are clever.And the advice I will give is "BE HAPPY ","NEVER CRY","BE STRONG AS ALWAYS","TALK TO ME DAILY","KEEP YOUR PHONE CHARGED","DISABLE YOUR SANPCHAT NOTIFACTIONS".at last the only thing is now you are one of person I CARE ABOUT. so don't get angry on me for my childishness.`;
var not2 = `Siddhu don is very good girl (gooni baal). it's been long time since we are friends or best friends . it feel very good, warm, comforty, happy, and etc talking to her.I thought i was most childish in the the group but their is always big fish, And this big fish is Siddhi (siddhu don). Despite being childish she is most mature person in the all groups i have. But i like when she acts childish like real child (mastikhor). But getting serious is her fav hobby :( . which feels like hell to me. But i like her seriousness too. She is very good at studies and she is very helpful. I am very lucky to have a friend like you. I hope we will be best friends for life time.`;
var not3 = `Siddhu Don!! The one who is my motivation, inspiration, and influencer.
The only one who can make me do anything by just her words.
Don have Aura that no one can handle.
Even the sun is jealous of you, stars got humbled, sea feels angry.
A mere presence of yours feels like new life (only when you are not serious)
The more i think the more i wanna know about:
The women, the myth, the legend Siddhu don!!!...

She contain two person in herself (one is lost somewhere),
that are Siddhu don and LEMON.
Don is great but LEMON have something no one could ever have, that vibe, that energy, that creativity.
Don't know what happend to My LEMON. But I wanna see her again.
`;
var not4 = `Chhakuu Pe Laga Khuun Mitana to padega,
Don Ka Birthday Manatho Padega !!!!

Happy Birthday to My dear Best friend SIDDHI !!!
I pray to god all your dreams come true, All your plans get success.
Grow high that even sky need to lift it's head up to take a look off you.

I hope Everything you want become your's, This new year of life as new era to win.
once again Happy birthday to My dear Siddhu Don !!!

This is little gift created my own hands, mind, and creativity.

To My Lemon/Siddhu_Don/Siddhu/Takle/Siddhi
From Ashu/Ash.`;



var notess = [not1, not2, not3, not4];
const note = document.getElementById("note");
note.innerText = notess[0];


const per = document.getElementById("per");
const nex = document.getElementById("next");

nex.addEventListener("click", () => {
    if (note.innerText == notess[0]) {
        note.innerText = notess[1];
    } else if (note.innerText == notess[1]) {
        note.innerText = notess[2];
    } else if (note.innerText == notess[2]) {
        note.innerText = notess[3];
    } else if (note.innerText == notess[3]) {
        note.innerText = notess[0];
    } else {
        return;
    }
});

per.addEventListener("click", () => {
    if (note.innerText == notess[0]) {
        note.innerText = notess[3];
    } else if (note.innerText == notess[3]) {
        note.innerText = notess[2];
    } else if (note.innerText == notess[2]) {
        note.innerText = notess[1];
    } else if (note.innerText == notess[1]) {
        note.innerText = notess[0];
    } else {
        return;
    }
});

var imgs = document.getElementsByClassName("pth");
let flag = 0;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = () => {
        imgs[i].style.transition = "transform 0.25s ease";
        if (flag == 0) {

            for (let j = 0; j < imgs.length; j++) {
                if (j != i) {
                    imgs[j].style.filter = "blur(10px)";
                }
            }

            imgs[i].style.zIndex = "50";
            imgs[i].style.transform = "scale(1.5)";
            imgs[i].style.position = "absolute";
            imgs[i].style.top = "50%";
            imgs[i].style.left = "40%";

            flag = 1;
        }
        else {

            for (let j = 0; j < imgs.length; j++) {
                imgs[j].style.filter = "none";
            }

            imgs[i].style.transform = "scale(1)";
            flag = 0;
            imgs[i].style.position = "relative";
            imgs[i].style.top = "";
            imgs[i].style.left = "";
            imgs[i].style.zIndex = "0";
        }
    }
}
