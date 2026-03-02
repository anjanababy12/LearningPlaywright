let testscore = 88;

switch (true) {
    case (testscore >= 90):
        console.log("A grade");
        break;

    case (testscore >= 80):
        console.log("B grade");
        break;

    case (testscore >= 70):
        console.log("C grade");
        break;

    case (testscore >= 60):
        console.log("D grade");
        break;

    default:
        console.log("F grade");
        break;;
}