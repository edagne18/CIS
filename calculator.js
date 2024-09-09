
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn').addEventListener('click', function() {
        // Clear previous results
        var resultsTableBody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
        resultsTableBody.innerHTML = '';

        // Get user inputs
        var initialAmount = parseFloat(document.getElementById('initialAmount').value);
        var monthlyDeposit = parseFloat(document.getElementById('monthlyDeposit').value);
        var annualRate = parseFloat(document.getElementById('annualRate').value) / 100;
        var yearsToGrow = parseInt(document.getElementById('yearsToGrow').value);

        // Initialize values for calculation
        var month = 1;
        var currentAmount = initialAmount;

        // Perform calculation for each month and append results to the table
        for (var year = 1; year <= yearsToGrow; year++) {
            for (var monthOfYear = 1; monthOfYear <= 12; monthOfYear++) {
                var interestEarned = (currentAmount + monthlyDeposit / 2) * (annualRate / 12); // Average balance approximation for monthly deposits
                currentAmount += monthlyDeposit + interestEarned;

                // Append row to table
                var row = resultsTableBody.insertRow();
                var cellMonth = row.insertCell(0);
                var cellStartingValue = row.insertCell(1);
                var cellInterestEarned = row.insertCell(2);
                var cellEndingValue = row.insertCell(3);

                cellMonth.innerHTML = month++;
                cellStartingValue.innerHTML = '$' + (currentAmount - monthlyDeposit - interestEarned).toFixed(2);
                cellInterestEarned.innerHTML = '$' + interestEarned.toFixed(2);
                cellEndingValue.innerHTML = '$' + currentAmount.toFixed(2);
            }
        }
    });
});
