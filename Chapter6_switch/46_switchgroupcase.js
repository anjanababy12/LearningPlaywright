let browser = "safari";

switch (browser) {
    case "edge":
    case "chrome":
    case "brave":
    case "opera":
        console.log("chromium project");
        break;

    case "firefox":
        console.log("morzila project");

    case "safari":
        console.log("Apple");
        break;


    default:
        console.log("not a valid browser");
        break;
}