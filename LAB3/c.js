function showCapital() {
    var select = document.getElementById("country");
    var capitalSpan = document.getElementById("capital");
    var selectedCountry = select.value;
    switch (selectedCountry){
        case "India":
            capitalSpan.innerText = "Delhi";
            break;
            case "UAE":
            capitalSpan.innerText = "Abu Dhabhi";
            break;
            case "New zealand":
            capitalSpan.innerText = "wellinton";
            break;
            case "Germany":
            capitalSpan.innerText = "Serlin";
            break;
            case "Russia":
            capitalSpan.innerText = "Moscow";
            break;
    }

}