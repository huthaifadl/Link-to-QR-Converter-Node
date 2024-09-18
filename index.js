/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// 1. استخدام inquirer للحصول على الرابط من المستخدم
inquirer
  .prompt([
    {
      type: 'input',
      name: 'userURL',
      message: 'Enter the link you want to convert to a QR code:',
    },
  ])
  .then((answers) => {
    const userURL = answers.userURL;

    // 2. استخدام qr-image لتحويل الرابط إلى رمز QR وحفظه كصورة
    const qrCode = qr.image(userURL, { type: 'png' });
    qrCode.pipe(fs.createWriteStream('qr-code.png'));

    // 3. استخدام fs لإنشاء ملف نصي وحفظ الرابط الذي أدخله المستخدم
    fs.writeFile('user-url.txt', userURL, (err) => {
      if (err) {
        console.error('An error occurred while writing the file:', err);
      } else {
        console.log('Link saved in user-url.txt');
      }
    });

    console.log('QR code image created and saved as qr-code.png');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });

