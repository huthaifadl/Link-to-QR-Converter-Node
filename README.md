# QR Code Generator
This project converts any user-entered link into a QR code and saves it as a PNG image file. It also saves the entered link in a text file.

## Requirements
- Visual Studio Code
- Node.js environment

## Steps to Use the Project
- Install Node.js
- Open the project in Visual Studio Code
- Open the Terminal
- Install the required packages
In the Terminal, run the following command to install all required packages:
`
npm install
`
This command will download the `inquirer` and `qr-image` packages needed for the project.

## Run the project:

- You can run the project using the following command in the Terminal:
`node index.js`

## Enter the link:

- When running the project, it will ask you to enter the link you want to convert into a QR code. Enter the link and press Enter.
This will create:

- An image file named `qr-code.png` containing the QR code.
- A text file named `user-url.txt` containing the entered link.

## File Structure
- index.js: The main file containing the code that converts the link into a QR code and saves it.
- package.json: Contains the project information and required packages.
- user-url.txt: This file will be automatically created when you run the project and will save the link you entered.
- qr-code.png: This image will be automatically created and will contain the QR code for the entered link.


# محول الروابط الى QR

هذا المشروع يقوم بتحويل أي رابط يُدخله المستخدم إلى صورة QR code ويقوم بحفظه على هيئة ملف صورة بصيغة PNG. كما يقوم بحفظ الرابط الذي تم إدخاله في ملف نصي.

## المتطلبات

- برنامج Visual Studio Code
- بيئة التشغيل Node.js

## خطوات استخدام المشروع

1. **تنصيب Node.js**
2. **فتح المشروع في Visual Studio Code**
3. **فتح الـ (Terminal)**
4. **تثبيت المكتبات المطلوبة**
   - في الـ Terminal، قم بتشغيل الأمر التالي لتثبيت جميع المكتبات المطلوبة:
     ```bash
     npm install
     ```

   سيقوم هذا الأمر بتحميل حزم `inquirer` و `qr-image` اللتين يحتاجهما المشروع.

5. **تشغيل المشروع**:
   - يمكنك تشغيل المشروع باستخدام الأمر التالي في الـ Terminal:
     ```bash
     node index.js
     ```

6. **إدخال الرابط**:
   - عند تشغيل المشروع، سيطلب منك إدخال الرابط الذي تريد تحويله إلى QR code. أدخل الرابط واضغط على Enter.
   
   سيتم إنشاء:
   - **ملف صورة باسم `qr-code.png`** يحتوي على QR code.
   - **ملف نصي باسم `user-url.txt`** يحتوي على الرابط الذي تم إدخاله.

   ## هيكل الملفات

- ملف `index.js`: الملف الرئيسي الذي يحتوي على الكود الذي يقوم بتحويل الرابط إلى QR code وحفظه.
- ملف `package.json`: يحتوي على معلومات المشروع والحزم المطلوبة.
- ملف `user-url.txt`: سيتم إنشاء هذا الملف تلقائيًا عند تشغيل المشروع وسيحفظ الرابط الذي أدخلته.
- ملف `qr-code.png`: سيتم إنشاء هذه الصورة تلقائيًا وتحتوي على QR code الخاص بالرابط المدخل.




