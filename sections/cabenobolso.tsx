< !DOCTYPE html >
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Car Affordability Calculator</title>
          <style>
            body {
              font - family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
            h1 {
              color: #2c3e50;
            text-align: center;
        }
            .calculator {
              background - color: #fff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
            label {
              display: block;
            margin-top: 10px;
        }
            input[type="number"], select {
              width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
            input[type="range"] {
              width: 100%;
            margin-top: 5px;
        }
            button {
              display: block;
            width: 100%;
            padding: 10px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 20px;
        }
            button:hover {
              background - color: #2980b9;
        }
            #result {
              margin - top: 20px;
            font-weight: bold;
            text-align: center;
            font-size: 1.2em;
        }
          </style>
        </head>
        <body>
          <h1>Car Affordability Calculator</h1>
          <div class="calculator">
            <label for="interestRate">Monthly Interest Rate (%):</label>
            <input type="number" id="interestRate" min="0" step="0.01" required>

              <label for="downPayment">Down Payment Amount (BRL):</label>
              <input type="number" id="downPayment" min="0" required>

                <label for="monthlyInstallment">Maximum Monthly Installment (BRL):</label>
                <input type="range" id="monthlyInstallment" min="0" max="10000" step="100" value="1000">
                  <output for="monthlyInstallment" id="monthlyInstallmentValue">1000</output>

                  <label for="financingTerm">Preferred Financing Term (months):</label>
                  <select id="financingTerm" required>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                    <option value="48">48 months</option>
                    <option value="60">60 months</option>
                  </select>

                  <button onclick="calculateAffordability()">Calculate</button>

                  <div id="result"></div>
                </div>

                <script>
                  const monthlyInstallmentSlider = document.getElementById('monthlyInstallment');
                  const monthlyInstallmentValue = document.getElementById('monthlyInstallmentValue');

                  monthlyInstallmentSlider.addEventListener('input', function() {
                    monthlyInstallmentValue.textContent = this.value;
        });

                  function calculateAffordability() {
            const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
                  const downPayment = parseFloat(document.getElementById('downPayment').value);
                  const monthlyInstallment = parseFloat(document.getElementById('monthlyInstallment').value);
                  const financingTerm = parseInt(document.getElementById('financingTerm').value);

                  if (isNaN(interestRate) || isNaN(downPayment) || isNaN(monthlyInstallment) || isNaN(financingTerm)) {
                    alert('Please fill in all fields with valid numbers.');
                  return;
            }

                  const presentValue = (monthlyInstallment * (1 - Math.pow(1 + interestRate, -financingTerm)) / interestRate) + downPayment;
                  const affordableCarValue = Math.round(presentValue / 1000) * 1000; // Round to nearest thousand

                  document.getElementById('result').innerHTML = `You can buy a car worth up to ${affordableCarValue.toLocaleString('pt-BR')} reais.`;
        }
                </script>
              </body>
            </html>