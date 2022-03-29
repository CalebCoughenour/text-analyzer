function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}


function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
  if (element.toLowerCase().includes(word.toLowerCase())) {
    htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
    htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length -1)) {
    htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}


function topThreeWords(text) {
  if (noInputtedWord(text) {
    return 0;
  }
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    for(i=0;i<textArray.length;i++){
      let sum=0;
      if(element[index]===element[i] {
        sum++;
    }
    console.log(sum);
    }
  })
});



// let text=""
// let arr = text.split("")

// // function mostUsedWord(arr){
//   arr.forEach(function(element,index){
//     if(arr[0]===element){
//       wordCount++;
//     }  })





$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});
