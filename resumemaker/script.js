// script.js

function printResume() {
    const printWindow = window.open('', '_blank');
    const outputContent = document.getElementById('output').innerHTML;

    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Printed Resume</title>
          <style>

            body {
              font-family: 'Arial', sans-serif;
              margin: 20px;
              background-color: #f4f4f4;
            }
            <style>
            body {
              font-family: 'Arial', sans-serif;
              margin: 20px;
              background-color: #f4f4f4;

            }
        
            #resume {
              max-width: 800px;
              margin: auto;
              background-color: #ffffff;
              border: 1px solid #ddd;
              border-radius: 10px;
              padding: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

            }
        
            h1,
            h2 {
              color: #333;
            }
        
            label {
              font-weight: bold;
              display: block;
              margin-top: 10px;
              color: #555;
            }
        
            input,
            textarea {
              width: 100%;
              padding: 8px;
              margin-top: 5px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 4px;
            }
        
            button {
              background-color: #4CAF50;
              color: white;
              padding: 10px 15px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              margin-top: 10px;
            }
        
            button:hover {
              background-color: #45a049;
            }
        
            #output {
              margin-top: 20px;
      padding: 30px;

            }
        
            #output h2,
            #output p,
            #output ul {
              margin-bottom: 10px;
            }
        
            #output ul {
              list-style: none;
              padding: 0;
            }
        
            #output li {
              margin-left: 20px;
              padding-left: 10px;
              position: relative;
              border-left: 2px solid #4CAF50;
            }
        
            /* Decorative line after each section */
            h1::after,
            h2::after,
            label::after,
            button::after {
              content: "";
              display: block;
              width: 50px;
              height: 2px;
              background-color: #4CAF50;
              margin-top: 10px;
            }
          </style>          </style>
        </head>
        <body>${outputContent}</body>
      </html>
    `);
    printWindow.document.close();

    // Wait for content to be loaded before printing
    printWindow.onload = function () {
        printWindow.print();
    };
}