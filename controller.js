
//import { event } from "/node_modules/jquery/dist/jquery.js";
import Game from "./engine/game.js";
//import keypress from './node_modules/keypress/index';
export const updateBoard = function(game, direction){
    game.move(direction);
    $('.win').empty();
    if(game.gameState.over == true){
            let losttag = `<label type = "text" class = "lost title has-text-info" style = "color: #3298dc; text-align: center; height: 20px; font-family: 'Shrikhand', cursive">You lost with a score of ${game.gameState.score} :( We setup a new game for you</label>`
            $('.buttons').append(losttag);
            $('win').empty();
            $('table').empty();
            game.setupNewGame();
            game.gameState.over = false;
            loadBoard(game);
            return;
    }
    if(game.gameState.won == true){
        let wintag = `<label type = "text" class = "win title has-text-info" style = "color: #3298dc; height: 20px; font-family: 'Shrikhand', cursive ">You won with a score of ${game.gameState.score}! Keep playing or press reset to play again</label>`
            $('.buttons').append(wintag);
    }
    
    let scoretag = `<div class = "score tag is-info is-large" style = "font-size: 45px; line-height: 100px; height: 90px; float: left;text-align: center; display: inline-block; width: 50%; jusitfy: center">${game.gameState.score}</div>`;
    $('.score').replaceWith(scoretag);
    $('table').empty();
    var twod = [...Array(game.size)].map(e => Array(game.size).fill(0));
    let temp = 0;
       for (let i = 0; i < game.size; i ++){
           for (let x = 0; x < game.size; x++){
              
               twod[i][x] = game.gameState.board[temp]; 
               temp++;
           }
       }
    for(let i = 0; i < game.size; i++){
        $('table').append([
 
         '<tr>',
             `<td class ="td is-large" style = "width: 25%; font-size: 40px; color: #3298dc; font-weight: bold; text-align: center">${twod[i][0]}</td>`,
             `<td class ="td is-large" style = "width: 25%; font-size: 40px; color: #3298dc; font-weight: bold; text-align: center">${twod[i][1]}</td>`,
             `<td class ="td is-large" style = "width: 25%; font-size: 40px; color: #3298dc; font-weight: bold; text-align: center">${twod[i][2]}</td>`,
             `<td class ="td is-large" style = "width: 25%; font-size: 40px; color: #3298dc; font-weight: bold; text-align: center">${twod[i][3]}</td>`,
         '</tr>'
         ].join(''));
     }
}
export const loadBoard = function(game) {
    
    var twod = [...Array(game.size)].map(e => Array(game.size).fill(0));
    let temp = 0;
       for (let i = 0; i < game.size; i ++){
           for (let x = 0; x < game.size; x++){
              
               twod[i][x] = game.gameState.board[temp]; 
               temp++;
           }
       }
       for(let i = 0; i < game.size; i++){
       $('table').append([

        '<tr>',
            `<td class ="td is-large" style = "width: 25%; font-size: 40px; color: #3298dc; font-weight: bold; text-align: center">${twod[i][0]}</td>`,
            `<td class ="td is-large" style = "width: 25%; font-size: 40px; color:#3298dc; font-weight: bold; text-align: center">${twod[i][1]}</td>`,
            `<td class ="td is-large" style = "width: 25%; font-size: 40px; color:#3298dc; font-weight: bold; text-align: center">${twod[i][2]}</td>`,
            `<td class ="td is-large" style = "width: 25%; font-size: 40px; color: #3298dc; font-weight: bold; text-align: center">${twod[i][3]}</td>`,
        '</tr>'
        ].join(''));
    }
    let scoretag = `<div class = "score tag is-info is-large" style = "font-size: 45px; line-height: 100px; height: 90px; float: left;text-align: center; display: inline-block; width: 50%; jusitfy: center">${game.gameState.score}</div>`;
    $('.score').replaceWith(scoretag);
 
}

$(function () {
    let game = new Game(4);
    $('.reset').on("click", function(){
        $('table').empty();
        game.setupNewGame();
        loadBoard(game);
    });
    loadBoard(game);
    $(document).on('keydown', function (event) {
        switch (event.key) {   
            case 'ArrowRight':
                updateBoard(game,'right');
                
                break;
            case 'ArrowLeft':
                updateBoard(game,'left');
                
    
                break;
            case 'ArrowDown':
                updateBoard(game,'down');
                
    
                break;
            case 'ArrowUp':
                updateBoard(game,'up');
                
                break;
        }
        
    });
    

});