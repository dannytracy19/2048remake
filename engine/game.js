/*
Add your code for Game here


 */





export default class Game {
    constructor(size){
        let emptyboard = Array.from(Array(size*size), () => 0);
        this.size = size; 
        this.gameState = {
            board: emptyboard,
            score: 0,
            won: false,
            over: false
        }
        this.addRandomTile();
        this.addRandomTile();
        this.moves = []
    }
    addRandomTile(){
        let availablespots = []
        for (let i = 0; i < this.gameState.board.length; i++){
            if(this.gameState.board[i] == 0){
                availablespots.push(i);
            }
        }
        if (Math.random() >= 0.9){ 
           
            this.gameState.board[availablespots[Math.floor(Math.random() * availablespots.length)]] = 4;
         } else {
             this.gameState.board[availablespots[Math.floor(Math.random() * availablespots.length)]] = 2;
         }
    }
  
    move(direction){ 
       let temp = 0; 
       var twodboard = [...Array(this.size)].map(e => Array(this.size).fill(0));
       var tempboard = [...Array(this.size)].map(e => Array(this.size).fill(0));
       var markerboard = [...Array(this.size)].map(e => Array(this.size).fill(0));
       let validmove = false;
       for (let i = 0; i < this.size; i ++){
           for (let x = 0; x < this.size; x++){
               twodboard[i][x] = this.gameState.board[temp];
               tempboard[i][x] = this.gameState.board[temp];
               markerboard[i][x] = false; 
               temp++;
           }
       }
       
            
        
            switch (direction) {
                case 'down':
                    for (let x = 0; x < this.size; x ++){
                        for (let i = 0; i < this.size; i++){       
                            if(i < this.size-1){
                                if ((twodboard[this.size - 1 - i][x] == 0|| twodboard[this.size - 1 - i][x] == twodboard[this.size - 2 - i][x])
                                 && 
                                 (markerboard[this.size -1 -i][x] == false) && (markerboard[this.size-2-i][x]== false)){
                                    if((twodboard[this.size-2-i][x]== twodboard[this.size-1-i][x]) && twodboard[this.size -1 -i][x] != 0){
                                        markerboard[this.size -1 -i][x] = true;
                                        this.gameState.score += twodboard[this.size -1 - i][x] + twodboard[this.size - 2 - i][x];
                                    }
                                        tempboard[this.size - 1 - i][x] = twodboard[this.size -1 - i][x] + twodboard[this.size - 2 - i][x];
                                        tempboard[this.size - 2 - i][x] = 0;
                                        if (tempboard[this.size-1-i][x] != 0 || twodboard[this.size-2-i][x] != 0){
                                                    validmove= true;
                                                }
                                        twodboard = tempboard;
                                        let temp1 = 0;
                                        for(let i = 0; i < this.size; i++){
                                            for(let x = 0; x < this.size; x++){
                                                this.gameState.board[temp1] = twodboard[i][x];
                                                temp1++;
                                            }
                                        }
                                        if(tempboard[this.size-1-i][x] != 0){
                                                x = 0;
                                                i = -1;
                                                continue;
                                        }
                                }
                            }
                        }
                    }
                
                    break;
                case 'up':
                    for (let x = 0; x < this.size; x ++){
                        for (let i = 0; i < this.size; i++){       
                            if(i < this.size-1){    
                                if ((twodboard[i][x] == 0 || twodboard[i+1][x] == twodboard[i][x]) && 
                                ((markerboard[i][x] == false) && (markerboard[i+1][x]== false))){
                                    if((twodboard[i][x]== twodboard[i+1][x]) && twodboard[i][x] != 0){
                                        markerboard[i][x] = true;
                                        this.gameState.score += twodboard[i][x] + twodboard[i+1][x];
                                    }
                                    tempboard[i][x] = twodboard[i][x] + twodboard[i+1][x];
                                    tempboard[i+1][x] = 0;
                                    if (tempboard[i][x] != 0 || twodboard[i+1][x] != 0){
                                        validmove= true;
                                    }
                                    twodboard = tempboard;
                                    let temp1 = 0;
                                        for(let i = 0; i < this.size; i++){
                                            for(let x = 0; x < this.size; x++){
                                                this.gameState.board[temp1] = twodboard[i][x];
                                                temp1++;
                                            }
                                        }
                                    if(tempboard[i][x] != 0){
                                        x = -1;
                                        i = 0;
                                        continue;
                                }
                            }
                        }
                    }
                }
                    break;
                case 'left':
                    for (let i = 0; i < this.size; i ++){
                        for (let x = 0; x < this.size; x++){       
                            if(x < this.size-1){
                                 if ((twodboard[i][x] == 0 || twodboard[i][x] == twodboard[i][x+1]) && 
                                 ((markerboard[i][x] == false) && (markerboard[i][x+1]== false))){
                                    if((twodboard[i][x]== twodboard[i][x+1]) && twodboard[i][x] != 0){
                                        markerboard[i][x] = true;
                                        this.gameState.score += twodboard[i][x+1] + twodboard[i][x];
                                    }
                                    tempboard[i][x] = twodboard[i][x+1] + twodboard[i][x];
                                    tempboard[i][x+1] = 0;
                                    if (tempboard[i][x] != 0 || twodboard[i][x+1] != 0){
                                        validmove= true;
                                    }
                                    twodboard = tempboard;
                                    let temp1 = 0;
                                    for(let i = 0; i < this.size; i++){
                                        for(let x = 0; x < this.size; x++){
                                            this.gameState.board[temp1] = twodboard[i][x];
                                            temp1++;
                                        }
                                    }
                                    if(tempboard[i][x] != 0){
                                        x = -1;
                                        i = 0;
                                        continue;
                                }
                            }
                        }
                    }
                }
                break;
                case 'right':
                    for (let i = 0; i < this.size; i ++){
                        for (let x = 0; x < this.size; x++){       
                            if(x < this.size-1){
                                 if ((twodboard[i][this.size-1-x] == 0 || twodboard[i][this.size-1-x] == twodboard[i][this.size-2-x]) && 
                                 ((markerboard[i][this.size-1-x] == false) && (markerboard[i][this.size-2-x]== false))){
                                    if((twodboard[i][this.size-1-x]== twodboard[i][this.size-2-x]) && twodboard[i][this.size-1-x] != 0){
                                        markerboard[i][this.size-1-x] = true;
                                        this.gameState.score += twodboard[i][this.size-2-x] + twodboard[i][this.size-1-x];
                                    }
                                    tempboard[i][this.size-1-x] = twodboard[i][this.size-2-x] + twodboard[i][this.size-1-x];
                                    tempboard[i][this.size-2-x] = 0;
                                    if (tempboard[i][this.size -1-x] != 0 || twodboard[i][this.size -2-x] != 0){
                                        validmove= true;
                                    }
                                    twodboard = tempboard;
                                    let temp1 = 0;
                                    for(let i = 0; i < this.size; i++){
                                        for(let x = 0; x < this.size; x++){
                                            this.gameState.board[temp1] = twodboard[i][x];
                                            temp1++;
                                        }
                                    }
                                    if(tempboard[i][this.size -1 -x] != 0){
                                        x = -1;
                                        i = 0;
                                        continue;
                                }
                            }
                        }
                        }
                    }
                    break;
                }
                
            
         
        
        
    if(validmove){
    this.addRandomTile();
    }
    
    let zeroCounted = false;
    let mergeAvailable = false;
    for(let i = 0; i < this.size; i++){
        for(let z = 0; z < this.size; z++){
            if(twodboard[i][z] == 2048){
                this.gameState.won = true;
            }
        }
    }
    
    if(this.isOver()== true){
        this.gameState.over = true;
    }

    for(let i = 0; i < this.moves.length; i ++){
        this.myFunct = this.moves[i]
        this.myFunct(this.getGameState());
        }
    
    };
    onMove(callback){
        this.moves.push(callback);
    }
    onWin(callback){
        this.moves.push(callback);
    }
    onLose(callback){
        this.moves.push(callback);
    }
    getGameState(){
        return this.gameState;
    }

    loadGame(gameState){
        this.gameState = gameState;
        this.size = Math.sqrt(gameState.board.length);
    }
    isOver(){
        for(let i = 0; i < this.gameState.board.length; i++){
            if (this.gameState.board[i] == 0){
                return false;
            }
        }
        let temp = 0;
        var sampleboard = [...Array(this.size)].map(e => Array(this.size).fill(0));
        for (let i = 0; i < this.size; i ++){
            for (let x = 0; x < this.size; x++){
                sampleboard[i][x] = this.gameState.board[temp];
                temp++;
            }
        }
        for(let i = 0; i < this.size-1; i++){
            for(let z = 0; z < this.size-1; z++){
               
                if(sampleboard[i][z] == sampleboard[i][z+1]){
                    return false;
                }
                if(sampleboard[i][z] == sampleboard[i+1][z]){
                    return false;
                }
                if(sampleboard[i][z+1] == sampleboard[i+1][z+1]){
                    return false;
                }
                if(sampleboard[i+1][z] == sampleboard[i+1][z+1]){
                    return false;
                }
                
                
    
            }
        }
        return true;


    }
    setupNewGame(){
        let temp= new Game(this.size);
        this.gameState = temp.gameState;
        this.size = temp.size;
    }

    toString(){
        let t = '';
        let temp = 0; 
        for (let i = 0; i < this.size; i++){
            for (let x = 0; x < this.size; x++){
                t+= '['+this.gameState.board[temp].toString()+']';
                if (x == this.size-1){
                    t+= '\n'
                };
                temp+=1;
            };
        };
        return t;
    }


}



    

