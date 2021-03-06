
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Et0-6SDBa/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }

  function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The most accurate prediction is " + gesture_name;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
  }


  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML = results[0].label;
  
    gesture_name=results[0].label;
    speak();
    if(results[0].label == "Victory Sign")
    {
	    document.getElementById("update_gesture").innerHTML ="&#9996;";
    }
    if(results[0].label == "Ok Sign")
    {
	    document.getElementById("update_gesture").innerHTML ="&#128076;";
    }
    if(results[0].label == "Thumbs Up Sign")
    {
	    document.getElementById("update_gesture").innerHTML ="&#128077;";
    }

    if(results[0].label == "Thumbs Down Sign")
    {
	    document.getElementById("update_gesture").innerHTML ="&#128078;";
    }
    if(results[0].label == "Vulcan Salute Sign")
    {
	    document.getElementById("update_gesture").innerHTML ="&#128406;";
    }
    if(results[1].label == "Crossed Fingers Sign")
    {
	    document.getElementById("update_gesture").innerHTML = "&#x1f91e;";
    }
  }
}

