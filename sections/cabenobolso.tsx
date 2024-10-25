<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Valor do Carro</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Helvetica', sans-serif;
        }
    </style>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-center text-red-500 mb-8">Calculadora de Valor do Carro</h1>
        <div class="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
            <form id="carForm" class="space-y-4">
                <div>
                    <label for="interestRate" class="block text-sm font-medium text-gray-700">Taxa de juros mensal (%)</label>
                    <input type="number" id="interestRate" name="interestRate" step="0.01" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50">
                </div>
                <div>
                    <label for="downPayment" class="block text-sm font-medium text-gray-700">Entrada (R$)</label>
                    <input type="number" id="downPayment" name="downPayment" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50">
                </div>
                <div>
                    <label for="monthlyPayment" class="block text-sm font-medium text-gray-700">Parcela mensal máxima (R$)</label>
                    <input type="range" id="monthlyPayment" name="monthlyPayment" min="100" max="10000" step="100" class="mt-1 block w-full">
                    <output for="monthlyPayment" class="block text-sm text-gray-600 mt-1">R$ <span id="monthlyPaymentValue">5050</span></output>
                </div>
                <div>
                    <label for="term" class="block text-sm font-medium text-gray-700">Prazo de financiamento</label>
                    <select id="term" name="term" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50">
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                        <option value="36">36 meses</option>
                        <option value="48">48 meses</option>
                        <option value="60">60 meses</option>
                    </select>
                </div>
                <button type="submit" class="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Calcular</button>
            </form>
            <div id="result" class="mt-6 text-center text-lg font-bold text-gray-800 hidden"></div>
        </div>
    </div>
    <script>
        const form = document.getElementById('carForm');
        const result = document.getElementById('result');
        const monthlyPaymentInput = document.getElementById('monthlyPayment');
        const monthlyPaymentValue = document.getElementById('monthlyPaymentValue');

        monthlyPaymentInput.addEventListener('input', (e) => {
            monthlyPaymentValue.textContent = e.target.value;
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const interestRate = parseFloat(form.interestRate.value) / 100;
            const downPayment = parseFloat(form.downPayment.value);
            const monthlyPayment = parseFloat(form.monthlyPayment.value);
            const term = parseInt(form.term.value);

            const presentValue = (monthlyPayment * (1 - Math.pow(1 + interestRate, -term)) / interestRate) + downPayment;
            const carValue = Math.round(presentValue / 1000) * 1000;

            result.textContent = `Você pode comprar um carro no valor de até R$ ${carValue.toLocaleString('pt-BR')} mil reais.`;
            result.classList.remove('hidden');
        });
    </script>
</body>
</html>
