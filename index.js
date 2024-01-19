import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Set the question
const question = {
    type: 'input',
    name: 'URL',
    message: 'Type a URL that will be transformed into a QR Code: '
};

// Do the question using 'prompt' method.
inquirer.prompt(question).then((answers) => {
    // User answer in 'answer' object.
    const userAnswer = answers.URL;

    // Creating QR code based on the user answer.
    const qrcode = qr.image(userAnswer); // Default .png

    // Saving the file as a .png file.
    const output = "qrcode.png";
    qrcode.pipe(fs.createWriteStream(output));

    console.log(`QR Code generated and saved in: ${output}`);

    // A text file with user URL
    fs.writeFile("URL.txt", userAnswer, (err) => {
        if (err) throw err;
        console.log("The file has been saved!")
    });
});