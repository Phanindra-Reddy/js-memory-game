document.addEventListener('DOMContentLoaded', () => {
    //card options
    var cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]
  
    cardArray.sort(()=>0.5-Math.random());

    var cardChosen=[];
    var cardChosenId=[];
    var cardsWon=[];
    const grid = document.querySelector('.grid')
    var result=document.querySelector('#result');
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches

    function checkForMatch(){
        var cards=document.querySelectorAll('img');
        var firstCardId=cardChosenId[0];
        var secondCardId=cardChosenId[1];

        if(firstCardId==secondCardId){
            cards[firstCardId].setAttribute('src','images/blank.png');
            cards[secondCardId].setAttribute('src','images/blank.png');
            alert("You have Clicked the Same Image !!")
        }
        else if (cardChosen[0]===cardChosen[1]){
                alert('You Found a Match !!');
                cards[firstCardId].setAttribute('src','images/white.png');
                cards[secondCardId].setAttribute('src','images/white.png');
                cards[firstCardId].removeEventListener("click",flipCard);
                cards[firstCardId].removeEventListener("click",flipCard);
                cardsWon.push(cardChosen);
        }
        else{
            cards[firstCardId].setAttribute('src','images/blank.png');
            cards[secondCardId].setAttribute('src','images/blank.png');
            alert("Sorry, try again!!");
        }
        cardChosen=[]
        cardChosenId=[]
        result.textContent=cardsWon.length;
        if(cardsWon.length===cardArray.length/2){
            result.textContent="Congratulations! You found them all!"
        }
    }
  
    //flip your card

    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardChosen.length==2){
            setTimeout(checkForMatch, 500);
        }
    }
    createBoard();


})