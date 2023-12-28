const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const commentBox = document.querySelector(".comment");
const commentText = document.querySelector("#comment-text");


function Evaluate(choice){
    const choices = ['Rock','Paper','Scissor'];
    const compChoice = choices[Math.floor(Math.random()*3)];
    const currentUserScore = parseInt(userScore.innerText);
    const currentCompScore = parseInt(compScore.innerText);

    if(choice===compChoice){
        commentText.innerText = "It's a Draw! Both chose "+choice;
        commentBox.style.backgroundColor = "black";
    }
    else if(choice=="Rock" && compChoice=="Paper"){
        commentText.innerText = "You Lose! Computer chose "+compChoice;
        commentBox.style.backgroundColor = "red";
        compScore.innerText = currentCompScore+1;
        Conclusion();
    }
    else if(choice=="Paper" && compChoice=="Rock"){
        commentText.innerText = "You Win! Computer chose "+compChoice;
        commentBox.style.backgroundColor = "green";
        userScore.innerText = currentUserScore+1;
        Conclusion();
    }
    else if(choice=="Rock" && compChoice=="Scissor"){
        commentText.innerText = "You Win! Computer chose "+compChoice;
        commentBox.style.backgroundColor = "green";
        userScore.innerText = currentUserScore+1;
        Conclusion();
    }
    else if(choice=="Scissor" && compChoice=="Rock"){
        commentText.innerText = "You Lose! Computer chose "+compChoice;
        commentBox.style.backgroundColor = "red";
        compScore.innerText = currentCompScore+1;
        Conclusion();
    }
    else if(choice=="Paper" && compChoice=="Scissor"){
        commentText.innerText = "You Lose! Computer chose "+compChoice;
        commentBox.style.backgroundColor = "red";
        compScore.innerText = currentCompScore+1;
        Conclusion();
    }
    
}

function Conclusion(){
    const currentUserScore = parseInt(userScore.innerText);
    const currentCompScore = parseInt(compScore.innerText);

    if(currentUserScore===10){
        Win();
    }
    else if(currentCompScore===10){
        Lose();
    }
}

function Win(){
    Swal.fire({
        title: "Yayyyy!",
        text: "You won the game!",
        imageUrl: "./images/win.gif",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Win"
      }).then(()=>{
        location.reload();
      });

}
function Lose(){
    Swal.fire({
        title: "Noooooo!",
        text: "You lost the game!",
        imageUrl: "./images/lose.gif",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Lose"
      }).then(()=>{
        location.reload();
      });
}

rock.addEventListener('click',()=>{
    Evaluate("Rock");
});

paper.addEventListener('click',()=>{
    Evaluate("Paper");
});

scissor.addEventListener('click',()=>{
    Evaluate("Scissor");
});
