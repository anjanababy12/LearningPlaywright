let responsecode = 300;

switch (responsecode) {
    case 200:
        console.log("200 : ok");
        break;

    case 400:
        console.log("400: bad request");
        break;


    case 404:
        console.log("404 : not found");
        break;

    default:
        console.log("not a valid code");
        break;


}

