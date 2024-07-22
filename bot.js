const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
const axios = require("axios");
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const token = "6911323064:AAE7uYkswZngrskMBRV4ZWhIIB0ogJASQ1Y";
const bot = new TelegramBot(token, { polling: true });


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start'||text === 'start'||text === 'suna'||text === 'Start') {
    bot.sendMessage(chatId, 'Bola ka Chaye \nChoose Your Year:-\nA.FIRST YEAR \nB.SECOND YEAR \nC.THIRD YEAR\nD. FOURTH YEAR \n\nReply "A" OR "B".... \nDo not reply subject name or code');

  }else if(text === '/help'||text === 'help'||text === 'kaise hoye'||text === 'Help'){
    let photo;
    photo='pdfs/h1.jpeg';
    bot.sendPhoto(chatId, photo);
    photo='pdfs/h2.jpeg';
    bot.sendPhoto(chatId, photo);
    
  }
  else{

    if(text==='A'){
        const text = msg.text;
        bot.sendMessage(chatId, 'Bola ka Chaye \nChoose subject\nA1. ENGINEERING-PHYSICS \nA2. ENGINEERING-MATHEMATICS 1 \nA3. ELECTRICAL ENGINEERING\nA4. PPS \nA5. ARTIFICIAL INTELLIGENCE\nA6. SOFT SKILLS 1\nA7. ENGINEERING-CHEMISTRY \nA8. ENGINEERING-MATHEMATICS 2 \nA9. ELECTRONICS ENGINNERING \nA10. MECHANICAL ENGINNERING\nA11. EMERGING TECHNOLOGY\nA12. SOFT SKILLS 2\n\nReply "A1" OR "A2"...');
        
        
    }else if(text==='B'){

        bot.sendMessage(chatId, 'Bola ka Chaye \nChoose subject\nB1. Maths 4 4 \nB2. Universal Human Value\nB3. Data_Structure\nB4. Computer Organization and Architecture \nB5. DSTL \nB6. Python Programming\nB7. Technical Communication \nB8. Operating System 2 \nB9. Theory of Automata and Formal Languages \nB10. Microprocessor\nB11. Computer System and Security\nB12. digital Electronics\n\nReply "B1" OR "B2"..');

    }
    else if(text==='C'){

        bot.sendMessage(chatId, 'Bola ka Chaye \nChoose subject\nC1. Database Management Systems \nC2. Compiler Design\nC3. Design and Analysis of Algorithm\nC4. Application of Soft Computing \nC5. Indian Tradition Culture and Society \nC6. Data Analytics\nC7. Computer Network\nC8. Big Data\nC9. Constitution Of India ,Law And Enginnering\nC10. Software Engineering\nC11. Web Technology\nC12. Object Oriented System Design\n\nReply "C1" OR "C2"..');

    }
    else if(text==='D'){

        bot.sendMessage(chatId, 'Bola ka Chaye \nChoose subject\nD1. Cloud Computing\nD2. Renewable Energy Resource\nD3. Rular Development: Administration and Planning \nD4. Project Management and Entrepreneureship\nD5. Total Quality Management\n\nReply "D1" OR "D2"..\n');
 
    }

    let pdfPath;

    if (text === 'A1') {
        pdfPath = 'https://drive.google.com/file/d/1GJoSqjSFEQb-gTLmnJqvv-MgDmXkfg4H/view?usp=drive_link';
      } 
      else if (text === 'A2') {
        pdfPath = 'https://drive.google.com/file/d/1DnEKfGpmHVoEzuJ7U5KsdOVOu7IFHxn9/view?usp=drive_link';
      }
      else if (text === 'A3') {
        pdfPath = 'https://drive.google.com/file/d/1gdVLI0j7MCe0LDubhIby8ic8U5S-QTpt/view?usp=drive_link';
      }
       else if (text === 'A4') {
        pdfPath = 'https://drive.google.com/file/d/1DErQsTPKX5cxLJigCGBygPOJNvFRa618/view?usp=drive_link';
      }
       else if (text === 'A5') {
        pdfPath = 'https://drive.google.com/file/d/10mHM2CUu85qwiBSm_Ny-V7JGYB-dGzWf/view?usp=drive_link';
      }
       else if (text === 'A6') {
        pdfPath = 'https://drive.google.com/file/d/1RzItKH7p05lEZFrMYOunv1oU3N_Cr1lf/view?usp=drive_link';
      }
       else if (text === 'A7') {
        pdfPath = 'https://drive.google.com/file/d/1g3Okdom1uKlYJb3hkxkpWtq9PyR1V8VF/view?usp=drive_link';
      }
       else if (text === 'A8') {
        pdfPath = 'https://drive.google.com/file/d/1xZCk9wMZbPIlN446aLpPT2exRmfalQAf/view?usp=drive_link';
      }
       else if (text === 'A9') {
        pdfPath = 'https://drive.google.com/file/d/18AXt2E8Lm8hZE1PR2WkWTwmlSKtbv_4i/view?usp=drive_link';
      }
       else if (text === 'A10') {
        pdfPath = 'https://drive.google.com/file/d/1hWPMarGFRkmbeQuVrWoq2KfYsYx-DNi8/view?usp=drive_link';
      }
       else if (text === 'A11') {
        pdfPath = 'https://drive.google.com/file/d/1HucCkKaHYHaYgsTwQbPmvCQThtKS7kwo/view?usp=drive_link';
      }
       else if (text === 'A12') {
        pdfPath = 'https://drive.google.com/file/d/1i3LaZElY5pWxPLpd13vmh8ka9ksYe7WS/view?usp=drive_link';
      }
      else if (text === 'B1') {
        pdfPath = 'https://drive.google.com/file/d/1Cl0OjoJAzIr2QJKyGMeLl08Qfo-8yUv9/view?usp=drive_link';
      } 
      else if (text === 'B2') {
        pdfPath = 'https://drive.google.com/file/d/1nB8yEOpr_eyY0i3M0W-g3g8oUkuLFtei/view?usp=drive_link';
      }
      else if (text === 'B3') {
        pdfPath = 'https://drive.google.com/file/d/14YO8pH5nfIBwGgRoc6nF4Kp3PP_DCvQh/view?usp=drive_link';
      }
       else if (text === 'B4') {
        pdfPath = 'https://drive.google.com/file/d/1CzSy5do-AsAzN4VHC4iVlS6zmWMGAvUN/view?usp=drive_link';
      }
       else if (text === 'B5') {
        pdfPath = 'https://drive.google.com/file/d/1Shtn2zPpSdnYm0DoaHSOm06iPWXjAsxW/view?usp=drive_link';
      }
       else if (text === 'B6') {
        pdfPath = 'https://drive.google.com/file/d/1Ow2lVz0UgDdK5i9apVjfsbTxMPV0UTBr/view?usp=drive_link';
      }
       else if (text === 'B7') {
        pdfPath = 'https://drive.google.com/file/d/1sFJ7j8EIgroFqhEWONnooQetCwZY0UCW/view?usp=drive_link';
      }
       else if (text === 'B8') {
        pdfPath = 'https://drive.google.com/file/d/1yOfjGaiuBk67P1aNKD6L4MzvOAPqU2dq/view?usp=drive_link';
      }
       else if (text === 'B9') {
        pdfPath = 'https://drive.google.com/file/d/1VDIuFsdfRK_WR77sGen35luHLlyj6AYo/view?usp=drive_link';
      }
       else if (text === 'B10') {
        pdfPath = 'https://drive.google.com/file/d/13vWIJhZevEtOadLKoKGy66OwPUm9xefW/view?usp=drive_link';
      }
       else if (text === 'B11') {
        pdfPath = 'https://drive.google.com/file/d/12bXgq7Cv2mM5kp6_hkJ815oPGKYQBRHv/view?usp=drive_link';
      }
       else if (text === 'B12') {
        pdfPath = 'https://drive.google.com/file/d/13Hw3K5SGld6MdNz_2y9Ju3R7fV4x8Fze/view?usp=drive_link';
      }
      else if (text === 'C1') {
        pdfPath = 'https://drive.google.com/file/d/1B-L7TniDND7ELscrZvM8CT-n_ywsPYPE/view?usp=drive_link';
      } 
      else if (text === 'C2') {
        pdfPath = 'https://drive.google.com/file/d/1vn3r4jWOj67OPDSir9ns0paTdqXFyZH0/view?usp=drive_link';
      }
      else if (text === 'C3') {
        pdfPath = 'https://drive.google.com/file/d/1yxBpqaIuAgOSSawRon3M8SqnDLaNyCf1/view?usp=drive_link';
      }
       else if (text === 'C4') {
        pdfPath = 'https://drive.google.com/file/d/1nCgFPfhOMGteTQStoz0crGi0I_8c2dW0/view?usp=drive_link';
      }
       else if (text === 'C5') {
        pdfPath = 'https://drive.google.com/file/d/1H6Rte4EyrLjbRX_V6lPOofAYQT3_7xf4/view?usp=drive_link';
      }
       else if (text === 'C6') {
        pdfPath = 'https://drive.google.com/file/d/15Sz35l9DEuse4xAOr16Ud7xxVkqKmhPg/view?usp=drive_link';
      }
       else if (text === 'C7') {
        pdfPath = 'https://drive.google.com/file/d/1kTN_ocmEc_Vqh1FA27y4ZsrPmMzX42q9/view?usp=drive_link';
      }
       else if (text === 'C8') {
        pdfPath = 'https://drive.google.com/file/d/1T_ZKWMlCKjPy4dDlufw61x3VowVHd5aH/view?usp=drive_link';
      }
       else if (text === 'C9') {
        pdfPath = 'https://drive.google.com/file/d/1Zf_mxblKn3CvrKW46YFqOFwjvcv9LNGF/view?usp=drive_link';
      }
       else if (text === 'C10') {
        pdfPath = 'https://drive.google.com/file/d/1hxyiZfgimDFjh9eUDwUfRWCtMYL0VpAK/view?usp=drive_link';
      }
       else if (text === 'C11') {
        pdfPath = 'https://drive.google.com/file/d/1tTmT54MFiK89tFG1m5456rcOft7Vs8aZ/view?usp=drive_link';
      }
       else if (text === 'C12') {
        pdfPath = 'https://drive.google.com/file/d/1ur6gBZ4yz_C27G_X7maEAqE3_iDBMgFF/view';
      }
      else if (text === 'D1') {
        pdfPath = 'https://drive.google.com/file/d/12Fo_Una_8qXZAxR-fxT91Xz9saRPaELt/view?usp=drive_link';
      } 
      else if (text === 'D2') {
        pdfPath = 'https://drive.google.com/file/d/1EKFSU44IgT1F1Ugem9v8YhMZ2-kYw41_/view?usp=drive_link';
      }
      else if (text === 'D3') {
        pdfPath = 'https://drive.google.com/file/d/1JDCWZOThbiER6C0YCf_qSortrm2U-ICc/view?usp=drive_link';
      }
       else if (text === 'D4') {
        pdfPath = 'https://drive.google.com/file/d/1_eohckMllPyOHYahzUUhuQNgdbEywWB7/view?usp=drive_link';
      }
       else if (text === 'D5') {
        pdfPath = 'https://drive.google.com/file/d/1lDipaabXabrgK1l6AXqfq2I8d7wKC01_/view?usp=drive_link';
      }


      if (pdfPath ) {

        bot.sendMessage(chatId,pdfPath);

      }else if(text === 'A'||text === 'B'||text === 'C'||text === 'D'){

        return;
      }
      else {
          bot.sendMessage(chatId, 'Nahi Baa ');
      }

 
}
});

