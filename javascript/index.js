import { ricardoImages, MainRicardoImage, ricardoResume } from '/javascript/data.js';

//Dom Elements-------------------------------------------------------------------------------------------------------------------------------------
//Photo Elements
const MainMiddlePhoto = document.getElementById("front-page-image-middle");
const MainLeftPhoto = document.getElementById("front-page-image-left");
const MainRightPhoto = document.getElementById("front-page-image-right");

//Button Elements
const frontPageRightChevron = document.getElementById("front-page-right-chevron");
const frontPageLeftChevron= document.getElementById("front-page-left-chevron");
let DownloadResumeButton = document.getElementById("download-resume-button");
const DownloadResumeButtonIcon = document.getElementById("download-resume-button-icon");

//Main Page functions------------------------------------------------------------------------------------------------------------------------------

// Initialize the main photos of the front page
let shuffledRicardoImages= shuffleArray(ricardoImages);
shuffledRicardoImages.splice(1,0,MainRicardoImage[0]); // Use splice to insert the element at index 1 (the second slot) to use as the main image

setMainPhotos();

function shuffleArray(array) {
    const shuffledArray = [...array]; // Create a copy of the original array
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
  
      // Swap elements at i and j
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }

  function setMainPhotos(){

    MainLeftPhoto.src = shuffledRicardoImages[0].image;
    MainLeftPhoto.alt = shuffledRicardoImages[0].alt;

    MainMiddlePhoto.src = shuffledRicardoImages[1].image;
    MainMiddlePhoto.alt = shuffledRicardoImages[1].alt;

    MainRightPhoto.src = shuffledRicardoImages[2].image;
    MainRightPhoto.alt = shuffledRicardoImages[2].alt;

  }

  function moveArrayElementRight(){

    // Remove the last element from the array
    const lastElement = shuffledRicardoImages.pop();

    // Insert the last element at the beginning of the array
    shuffledRicardoImages.unshift(lastElement);

    setMainPhotos()

  }

  function moveArrayElementLeft(){

    // Remove the first element from the array
    const firstElement = shuffledRicardoImages.shift();

    // Push the first element to the end of the array
    shuffledRicardoImages.push(firstElement);

    setMainPhotos()

  }

  function downloadResume(){

      const resumePath = ricardoResume[0].path;
      const anchor = document.createElement('a');
      anchor.href = resumePath;

      anchor.download = ricardoResume[0].name;
      anchor.click();
  }


  //Website Event Listeners------------------------------------------------------------------------------------------------------------------------------

  document.body.addEventListener("click",function(e){

    if(e.target === frontPageLeftChevron){
      moveArrayElementLeft();
    }
    else if(e.target === frontPageRightChevron){
        moveArrayElementRight();
    }
  })

  document.body.addEventListener("dblclick",function(e){

      DownloadResumeButton = this.querySelector('p');
      if(e.target === DownloadResumeButton || e.target === DownloadResumeButtonIcon){
      downloadResume();
  }
  })
  

