// selection 
let xoBody = document.getElementById('xoBody');
let gameover = document.getElementById('over')
let signUp = document.getElementById('signUp');
let userName = document.getElementById("username");
let signUpBtn = document.getElementById('signUpBtn');
// let userImg = document.getElementById('img');
let done = document.getElementById('done');
let wellcome = document.getElementById('wellcome');
let names = document.getElementById("names");
let vs = document.getElementById('vs');
let x = document.getElementById('x')
let o = document.getElementById('o')
let x_or_o = document.getElementById('ch');
// let ch;
let next1 = document.getElementById('next1');
let mainUser = document.getElementById('mainUser');
let secondUser = document.getElementById('secondUser');
let playBody = document.getElementById('playBody');
let who = document.getElementById('who');
let userWithPlayer = document.getElementById('one');
let playerWithPlayer = document.getElementById('two');
let next2 = document.getElementById('next2');
let names2 = document.getElementById("names2");
let vs2 = document.getElementById('vs2');
let turn ;
let arrowR = document.getElementById('arR');
let arrowL = document.getElementById('arL');
let P1chosen;
let P2chosen;

let D0_0 = document.getElementById('0,0');
let D0_1 = document.getElementById('0,1');
let D0_2 = document.getElementById('0,2');

let D1_0 = document.getElementById('1,0');
let D1_1 = document.getElementById('1,1');
let D1_2 = document.getElementById('1,2');

let D2_0 = document.getElementById('2,0');
let D2_1 = document.getElementById('2,1');
let D2_2 = document.getElementById('2,2');

let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

let changeUserName = document.getElementById('change');
let reGame = document.getElementById('reGame');
signUpBtn.onclick = () => {
    if(userName.value === ''){
        window.alert("enter your name")
    }else{
        localStorage.setItem('username' , userName.value);
        names.innerHTML = `
        <h1><span>${localStorage.getItem('username').split(" ")[0]}</span> VS <span><input id="playerName" type="text" placeholder="Enter player name"></span></h1>
        `
        names2.innerHTML = `
        <h1><span><input id="playerName1" type="text" placeholder="Enter player1 name"</span> VS <span><input id="playerName2" type="text" placeholder="Enter player2 name"></span></h1>
        `
        signUp.style.display = 'none';
        done.style.display = 'block';
        done.style.opacity = '1';
        setTimeout(() => {
            done.style.opacity = '0';
            wellcome.innerHTML = `<h1>wellcome, <span>${localStorage.getItem('username')}</span> <span id='change'><i class="fa-solid fa-user-pen"></i></span></h1>`;
        }, 1500);
        setTimeout(() => {
            whoWillPlay();
        }, 2500);
        let changeUserName = document.getElementById('change');
        changeUserName.onclick = () =>{
            let newUser = prompt('Enter your new username .. ' , localStorage.getItem('username'));
            if(newUser !== null){
                localStorage.setItem('username' , newUser);
                location.reload()
            }
        }
    }
}

//sign up
    // localStorage.setItem('username' , '');
    if(localStorage.getItem('username') === ''){
        signUp.style.display = 'block';
        who.style.display = 'none'
    }else{
        names.innerHTML = `
        <h1><span>${localStorage.getItem('username').split(" ")[0]}</span> VS <span><input id="playerName" type="text" placeholder="Enter player name"></span></h1>
        `
        names2.innerHTML = `
        <h1><span><input id="playerName1" type="text" placeholder="Enter player1 name"</span> VS <span><input id="playerName2" type="text" placeholder="Enter player2 name"></span></h1>
        `
    // who will play ?
    whoWillPlay();    
}
// who will play?
function whoWillPlay(){
    who.style.display = 'flex'
    who.style.opacity = '1';
    signUp.style.display = 'none';
    done.style.zIndex = '-1';
    wellcome.innerHTML = `<h1>wellcome, <span>${localStorage.getItem('username')}</span> <span id='change'><i class="fa-solid fa-user-pen"></i></span></h1>`;
    let changeUserName = document.getElementById('change');
    changeUserName.onclick = () =>{
        let newUser = prompt('Enter your new username .. ' , localStorage.getItem('username'));
        if(newUser !== null){
            localStorage.setItem('username' , newUser);
            location.reload()
        }
    }
    userWithPlayer.onclick = () =>{
        who.style.left = '2500px'
        vs.style.marginLeft = '0px'
        userVSplayer();
    }
    playerWithPlayer.onclick = () =>{
        who.style.left = '2500px'
        vs2.style.marginLeft = '0px'
        pVp()
    }
}
// userName VS player two 
function userVSplayer(){
    who.style.display = 'none';
    sessionStorage.setItem('ch' , '1');
    vs.style.opacity = '1';
    vs.style.zIndex = '1';    
    let playerName = document.getElementById('playerName');
    playerName.oninput = () =>{
        if(playerName.value.length === 0){
            playerName.style.width = '458px';
            if (window.matchMedia("(max-width: 768px)").matches) {
                playerName.style.width = '86%';
            }
            next1.style.display = 'none'
            next1.style.opacity = '0'
        }else{
            playerName.style.width =  `${playerName.value.length * 35}px`
            if (window.matchMedia("(max-width: 768px)").matches) {
                playerName.style.width =  `${playerName.value.length * 25}px`
            }
            next1.style.display = 'block'
            next1.style.opacity = '1'
            next1.onclick = () =>{
                sessionStorage.setItem('playerTwo' , playerName.value);
                vs.style.marginLeft = '2500px'
                x_or_o.style.left = '50%'
                vs.style.display = 'none'
                next1.style.display = 'none'
                next1.style.opacity = '0'
                XorO1()
            }
        }
    }
    
}
// Player vs player 
function pVp(){
    who.style.display = 'none';
    vs2.style.opacity = '1';
    vs2.style.zIndex = '1';    
    let playerName1 = document.getElementById('playerName1');
    let playerName2 = document.getElementById('playerName2');
    next2.style.opacity = '1';
    playerName1.oninput = () =>{
        if(playerName1.value.length === 0){
            playerName1.style.width = '334px';
            // next2.style.opacity = '0'
        }else{
            playerName1.style.width =  `${playerName1.value.length * 35}px`
        }
    }
    playerName2.oninput = () =>{
        if(playerName2.value.length === 0){
            playerName2.style.width = '334px';
            // next2.style.opacity = '0'
        }else{
            playerName2.style.width =  `${playerName2.value.length * 35}px`
        }
    }
    next2.onclick = () =>{
        if(playerName1.value.length !== 0 && playerName2.value.length !== 0){
            sessionStorage.setItem('ch' , '2');
            sessionStorage.setItem('player1' , playerName1.value);
            sessionStorage.setItem('player2' , playerName2.value);
            vs2.style.marginLeft = '2500px'
            vs2.style.display = 'none'
            x_or_o.style.left = '50%'
            XorO2()
        }else{
            window.alert('You must enter player1 and 2.')
        }
    }
}
// x or o? 
function XorO1(){
        document.querySelector('.ch h1').textContent = `${localStorage.getItem('username').split(" ")[0]}:`;
        x.onclick = () =>{
            P1chosen = 'X';
            P2chosen = 'O';
            x.style.border = 'solid'
            o.style.border = 'none'
            x_or_o.style.left = '2000px';
            x_or_o.style.display = 'none';
            playBody.style.left = '50%'
            mainUser.innerHTML = `<span>X</span>${localStorage.getItem('username').split(" ")[0]}`
            secondUser.innerHTML = `${sessionStorage.getItem('playerTwo').split(" ")[0]} <span>O</span>`
            // xo logic
            xo();
        }
        o.onclick = () =>{
            P1chosen = 'O';
            P2chosen = 'X';
            x.style.border = 'none'
            o.style.border = 'solid'
            x_or_o.style.left = '2000px';
            x_or_o.style.display = 'none';
            playBody.style.left = '50%';
            mainUser.innerHTML = `<span>O</span>${localStorage.getItem('username').split(" ")[0]}`
            secondUser.innerHTML = `${sessionStorage.getItem('playerTwo').split(" ")[0]} <span>X</span>`
            // xo logic
            xo();
}
}
function XorO2(){
        document.querySelector('.ch h1').textContent = `${sessionStorage.getItem('player1').split(" ")[0]}:`;
        x.onclick = () =>{
            P1chosen = 'X';
            P2chosen = 'O';
            x.style.border = 'solid'
            o.style.border = 'none'
            x_or_o.style.left = '2000px';
            x_or_o.style.display = 'none';
            playBody.style.left = '50%'
            mainUser.innerHTML = `<span>X</span>${sessionStorage.getItem('player1').split(" ")[0]}`
            secondUser.innerHTML = `${sessionStorage.getItem('player2').split(" ")[0]} <span>O</span>`
            // xo logic
            xo();
        }
        o.onclick = () =>{
            P1chosen = 'O';
            P2chosen = 'X';
            x.style.border = 'none'
            o.style.border = 'solid'
            x_or_o.style.left = '2000px';
            x_or_o.style.display = 'none';
            playBody.style.left = '50%';
            mainUser.innerHTML = `<span>O</span>${sessionStorage.getItem('player1').split(" ")[0]}`
            secondUser.innerHTML = `${sessionStorage.getItem('player2').split(" ")[0]} <span>X</span>`
            // xo logic
            xo();
}
}

// xo game 
function xo() {
        D0_0.onclick = () =>{
            if(D0_0.textContent === '' && turn !== 1){
                D0_0.innerHTML = `<span>${P1chosen}</span>`;
                turn = 1;
                arrowR.style.opacity = '0';
                arrowL.style.opacity = '1';
            }else if(D0_0.textContent === '' && turn === 1){
                D0_0.innerHTML = `<span>${P2chosen}</span>`;
                turn = 0;
                arrowR.style.opacity = '1';
                arrowL.style.opacity = '0';
            }
            whoWin()
            gameOver()
        }
        D0_1.onclick = () =>{
            if(D0_1.textContent === '' && turn !== 1){
                D0_1.innerHTML = `<span>${P1chosen}</span>`;
                turn = 1;
                arrowR.style.opacity = '0';
                arrowL.style.opacity = '1';
            }else if(D0_1.textContent === '' && turn === 1){
                D0_1.innerHTML = `<span>${P2chosen}</span>`;
                turn = 0;
                arrowR.style.opacity = '1';
                arrowL.style.opacity = '0';
            }
            whoWin()
            gameOver()
        }
        D0_2.onclick = () =>{
            if(D0_2.textContent === '' && turn !== 1){
                D0_2.innerHTML = `<span>${P1chosen}</span>`;
                turn = 1;
                arrowR.style.opacity = '0';
                arrowL.style.opacity = '1';
            }else if(D0_2.textContent === '' && turn === 1){
                D0_2.innerHTML = `<span>${P2chosen}</span>`;
                turn = 0;
                arrowR.style.opacity = '1';
                arrowL.style.opacity = '0';
            }
            whoWin()
            gameOver()
        }
        D1_0.onclick = () =>{
            if(D1_0.textContent === '' && turn !== 1){
                D1_0.innerHTML = `<span>${P1chosen}</span>`;
                turn = 1;
                arrowR.style.opacity = '0';
                arrowL.style.opacity = '1';
            }else if(D1_0.textContent === '' && turn === 1){
                D1_0.innerHTML = `<span>${P2chosen}</span>`;
                turn = 0;
                arrowR.style.opacity = '1';
                arrowL.style.opacity = '0';
            }
            whoWin()
            gameOver()
        }
        D1_1.onclick = () =>{
            if(D1_1.textContent === '' && turn !== 1){
                D1_1.innerHTML = `<span>${P1chosen}</span>`;
                turn = 1;
                arrowR.style.opacity = '0';
                arrowL.style.opacity = '1';
            }else if(D1_1.textContent === '' && turn === 1){
                D1_1.innerHTML = `<span>${P2chosen}</span>`;
                turn = 0;
                arrowR.style.opacity = '1';
                arrowL.style.opacity = '0';
            }
            whoWin()
            gameOver()
        }
        D1_2.onclick = () =>{
            if(D1_2.textContent === '' && turn !== 1){
                D1_2.innerHTML = `<span>${P1chosen}</span>`;
                turn = 1;
                arrowR.style.opacity = '0';
                arrowL.style.opacity = '1';
            }else if(D1_2.textContent === '' && turn === 1){
                D1_2.innerHTML = `<span>${P2chosen}</span>`;
                turn = 0;
                arrowR.style.opacity = '1';
                arrowL.style.opacity = '0';
            }
            whoWin()
            gameOver()
        }
        D2_0.onclick = () =>{
            if(D2_0.textContent === '' && turn !== 1){
                D2_0.innerHTML = `<span>${P1chosen}</span>`;
                turn = 1;
                arrowR.style.opacity = '0';
                arrowL.style.opacity = '1';
            }else if(D2_0.textContent === '' && turn === 1){
                D2_0.innerHTML = `<span>${P2chosen}</span>`;
                turn = 0;
                arrowR.style.opacity = '1';
                arrowL.style.opacity = '0';
            }
            whoWin()
            gameOver()
        }
        D2_1.onclick = () =>{
            if(D2_1.textContent === '' && turn !== 1){
                D2_1.innerHTML = `<span>${P1chosen}</span>`;
                turn = 1;
                arrowR.style.opacity = '0';
                arrowL.style.opacity = '1';
            }else if(D2_1.textContent === '' && turn === 1){
                D2_1.innerHTML = `<span>${P2chosen}</span>`;
                turn = 0;
                arrowR.style.opacity = '1';
                arrowL.style.opacity = '0';
            }
            whoWin()
            gameOver()
        }
        D2_2.onclick = () =>{
            if(D2_2.textContent === '' && turn !== 1){
                D2_2.innerHTML = `<span>${P1chosen}</span>`;
                turn = 1;
                arrowR.style.opacity = '0';
                arrowL.style.opacity = '1';
            }else if(D2_2.textContent === '' && turn === 1){
                D2_2.innerHTML = `<span>${P2chosen}</span>`;
                turn = 0;
                arrowR.style.opacity = '1';
                arrowL.style.opacity = '0';
            }
            whoWin()
            gameOver()
        }
    }
function whoWin(){
    if(D0_0.textContent === P1chosen && D0_1.textContent === P1chosen && D0_2.textContent === P1chosen){
        D0_0.style.color = '#EEE'
        D0_1.style.color = '#EEE'
        D0_2.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score1.textContent++;
        }, 2000);
    }else if(D1_0.textContent === P1chosen && D1_1.textContent === P1chosen && D1_2.textContent === P1chosen){
        D1_0.style.color = '#EEE'
        D1_1.style.color = '#EEE'
        D1_2.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score1.textContent++;
        }, 2000);
    }else if(D2_0.textContent === P1chosen && D2_1.textContent === P1chosen && D2_2.textContent === P1chosen){
        D2_0.style.color = '#EEE'
        D2_1.style.color = '#EEE'
        D2_2.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score1.textContent++;
        }, 2000);
    } else

    if(D0_0.textContent === P1chosen && D1_0.textContent === P1chosen && D2_0.textContent === P1chosen){
        D0_0.style.color = '#EEE'
        D1_0.style.color = '#EEE'
        D2_0.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score1.textContent++;
        }, 2000);
    }else if(D0_1.textContent === P1chosen && D1_1.textContent === P1chosen && D2_1.textContent === P1chosen){
        D0_1.style.color = '#EEE'
        D1_1.style.color = '#EEE'
        D2_1.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score1.textContent++;
        }, 2000);
    }else if(D0_2.textContent === P1chosen && D1_2.textContent === P1chosen && D2_2.textContent === P1chosen){
        D0_2.style.color = '#EEE'
        D1_2.style.color = '#EEE'
        D2_2.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score1.textContent++;
        }, 2000);
    } else
    if(D0_0.textContent === P1chosen && D1_1.textContent === P1chosen && D2_2.textContent === P1chosen){
        D0_0.style.color = '#EEE'
        D1_1.style.color = '#EEE'
        D2_2.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score1.textContent++;
        }, 2000);
    }else if(D0_2.textContent === P1chosen && D1_1.textContent === P1chosen && D2_0.textContent === P1chosen){
        D0_2.style.color = '#EEE'
        D1_1.style.color = '#EEE'
        D2_0.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score1.textContent++;
        }, 2000);
    }



    if(D0_0.textContent === P2chosen && D1_1.textContent === P2chosen && D2_2.textContent === P2chosen){
        D0_0.style.color = '#EEE'
        D1_1.style.color = '#EEE'
        D2_2.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score2.textContent++;
        }, 2000);
    }else if(D0_2.textContent === P2chosen && D1_1.textContent === P2chosen && D2_0.textContent === P2chosen){
        D0_2.style.color = '#EEE'
        D1_1.style.color = '#EEE'
        D2_0.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score2.textContent++;
        }, 2000);
    }else

    if(D0_0.textContent === P2chosen && D0_1.textContent === P2chosen && D0_2.textContent === P2chosen){
        D0_0.style.color = '#EEE'
        D0_1.style.color = '#EEE'
        D0_2.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score2.textContent++;
        }, 2000);
    }else if(D1_0.textContent === P2chosen && D1_1.textContent === P2chosen && D1_2.textContent === P2chosen){
        D1_0.style.color = '#EEE'
        D1_1.style.color = '#EEE'
        D1_2.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score2.textContent++;
        }, 2000);
    }else if(D2_0.textContent === P2chosen && D2_1.textContent === P2chosen && D2_2.textContent === P2chosen){
        D2_0.style.color = '#EEE'
        D2_1.style.color = '#EEE'
        D2_2.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score2.textContent++;
        }, 2000);
    } else
    
    if(D0_0.textContent === P2chosen && D1_0.textContent === P2chosen && D2_0.textContent === P2chosen){
        D0_0.style.color = '#EEE'
        D1_0.style.color = '#EEE'
        D2_0.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score2.textContent++;
        }, 2000);
    }else if(D0_1.textContent === P2chosen && D1_1.textContent === P2chosen && D2_1.textContent === P2chosen){
        D0_1.style.color = '#EEE'
        D1_1.style.color = '#EEE'
        D2_1.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score2.textContent++;
        }, 2000);
    }else if(D0_2.textContent === P2chosen && D1_2.textContent === P2chosen && D2_2.textContent === P2chosen){
        D0_2.style.color = '#EEE'
        D1_2.style.color = '#EEE'
        D2_2.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score2.textContent++;
        }, 2000);
    } else
    
    if(D0_0.textContent === P2chosen && D1_1.textContent === P2chosen && D2_2.textContent === P2chosen){
        D0_0.style.color = '#EEE'
        D1_1.style.color = '#EEE'
        D2_2.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score2.textContent++;
        }, 2000);
    }else if(D2_0.textContent === P2chosen && D1_1.textContent === P2chosen && D0_2.textContent === P2chosen){
        D0_2.style.color = '#EEE'
        D1_1.style.color = '#EEE'
        D2_0.style.color = '#EEE'
        setTimeout(() => {
            restart();
        }, 1500);
        setTimeout(() => {
            score2.textContent++;
        }, 3000);
    }
}

let oneAndOne;

function restart(){
    reGame.style.opacity = '1';
    gameOver();
    if(oneAndOne !== 1 ){
        turn = 0;
        oneAndOne = 1;
        arrowR.style.opacity = '1'
        arrowL.style.opacity = '0'
    }else{
        turn = 1;
        oneAndOne = 0;
        arrowR.style.opacity = '0'
        arrowL.style.opacity = '1'
    }

    D0_0.innerHTML = '';
    D0_1.innerHTML = '';
    D0_2.innerHTML = '';
    D1_0.innerHTML = '';
    D1_1.innerHTML = '';
    D1_2.innerHTML = '';
    D2_0.innerHTML = '';
    D2_1.innerHTML = '';
    D2_2.innerHTML = '';


    D0_0.style.color = 'var(--font-color)';
    D0_1.style.color = 'var(--font-color)';
    D0_2.style.color = 'var(--font-color)';
    D1_0.style.color = 'var(--font-color)';
    D1_1.style.color = 'var(--font-color)';
    D1_2.style.color = 'var(--font-color)';
    D2_0.style.color = 'var(--font-color)';
    D2_1.style.color = 'var(--font-color)';
    D2_2.style.color = 'var(--font-color)';
}
function gameOver(){
    if(D0_0.innerHTML !== '' && D0_1.innerHTML !== '' && D0_2.innerHTML !== '' && D1_0.innerHTML !== '' && D1_1.innerHTML !== '' && D1_2.innerHTML !== '' && D2_0.innerHTML !== '' && D2_1.innerHTML !== '' && D2_2.innerHTML !== ''){
        console.log('game over');
        xoBody.style.opacity = '0';
        gameover.style.opacity = '1';
        setTimeout(() => {
            xoBody.style.opacity = '1';
            gameover.style.opacity = '0';
            restart();
        }, 1500);
    }
}
reGame.onclick = () =>{
    location.reload();
}