let weather = "raining";

if(weather=="raining"){
    console.log("Playing game at home");
}

console.log("---------if else------")
if(weather=="storm"){
    console.log("Go out to livestream, crazy");
}else{
    console.log("Sleeping");
}

console.log("---------if else if--------")
if(weather=="storm"){
    console.log("Go out to livestream, crazy");
}else if(weather=="raining"){
    console.log("Playing game at home");
}else if(weather=="sunny"){
    console.log("Going to playing soccer");
}

/*switch - case*/
switch (weather) {
    case "raining":
        console.log("Tắm mưa");
        break;

    case "sunny":
        console.log("Going playing soccer");
        break;

    case "storm":
        break;

    default:
        console.log("Default");
}
