let scoreStr = localStorage.getItem('Score');
        let score;
        resetScore(scoreStr);

        function resetScore(scoreStr){
            score = scoreStr ? JSON.parse(scoreStr) : {
                win: 0,
                lost: 0,
                tie: 0,
            }; 

            score.displayResult = function(){
                return `Win : ${score.win}, Lost : ${score.lost}, Tie : ${score.tie}`;
            }

            displayResult();
        }
        

        // if(scoreStr !== undefined){
        //     score = JSON.parse(scoreStr);
        // } else {
        //     score = {
        //         win: 0,
        //         lost: 0,
        //         tie: 0,
        //     };
        // }

        function generateComputerChoice(){
            // this will generate random number between 0 and 3
            let randomNumber = Math.random() * 3;
            if(randomNumber > 0 && randomNumber <= 1){
                return 'bat';
            } else if(randomNumber > 1 && randomNumber <= 2){
                return 'ball';
            } else{
                return 'stump';
            }
        }

        function getResult(userMove, computerMove){
            if(userMove === 'bat'){
                if (computerMove === 'ball'){
                    score.win++;
                    return 'You Won!!';
                } else if (computerMove === 'bat'){
                    score.tie++;
                    return `it's a tie!!`;
                } else if (computerMove === 'stump'){
                    score.lost++;
                    return 'Computer Won!!';
                }
            } else if(userMove === 'ball'){
                if (computerMove === 'stump'){
                    score.win++;
                    return 'You Won!!';
                } else if (computerMove === 'ball'){
                    score.tie++;
                    return `it's a tie!!`;
                } else if(computerMove === 'bat'){
                    score.lost++;
                    return 'Computer Won!!';
                }
            } else{
                if (computerMove === 'bat'){
                    score.win++;
                    return 'You Won!!';
                } else if (computerMove === 'stump'){
                    score.tie++;
                    return `it's a tie!!`;
                } else if(computerMove === 'ball') {
                    score.lost++;
                    return 'Computer Won!!';
                }
            }
        }

        function displayResult(userMove, computerMove, result){
            localStorage.setItem('Score', JSON.stringify(score));
            document.querySelector('#user-move').innerText = 
                userMove ? `User Move = ${userMove}` : '';

            document.querySelector('#computer-move').innerText = 
                computerMove ? `Computer Move = ${computerMove}` : '';

            document.querySelector('#result').innerText = 
                result ? `Result = ${result}` : '';
            document.querySelector('#score').innerText = `Score = ${score.displayResult()}`;

            // alert(`You have chosen ${userMove}. Computer choice is ${computerMove}. 
            // ${result}
            // ${score.displayResult()}`);
        }