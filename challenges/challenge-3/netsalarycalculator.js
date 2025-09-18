// netSalaryCalculator.js
// Kenyan Net Salary Calculator (Ready for submission)

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  // --- Gross Salary ---
  const grossSalary = basicSalary + benefits;

  // --- NSSF Deduction ---
  const nssfTier1Limit = 8000;
  const nssfTier2Limit = 72000;
  const nssfRate = 0.06;
  const nssfTier1 = Math.min(grossSalary, nssfTier1Limit) * nssfRate;
  const nssfTier2 =
    Math.max(0, Math.min(grossSalary, nssfTier2Limit) - nssfTier1Limit) *
    nssfRate;
  const totalNSSF = nssfTier1 + nssfTier2;

  // --- SHIF Deduction ---
  const shifRate = 0.0275;
  const shifDeduction = grossSalary * shifRate;

  // --- PAYE Calculation ---
  let taxableIncome = grossSalary - totalNSSF - shifDeduction;
  let paye = 0;

  if (taxableIncome > 0) {
    let band1 = Math.min(taxableIncome, 24000);
    paye += band1 * 0.1;
    taxableIncome -= band1;
  }
  if (taxableIncome > 0) {
    let band2 = Math.min(taxableIncome, 8333);
    paye += band2 * 0.25;
    taxableIncome -= band2;
  }
  if (taxableIncome > 0) {
    let band3 = Math.min(taxableIncome, 467667);
    paye += band3 * 0.3;
    taxableIncome -= band3;
  }
  if (taxableIncome > 0) {
    let band4 = Math.min(taxableIncome, 300000);
    paye += band4 * 0.325;
    taxableIncome -= band4;
  }
  if (taxableIncome > 0) {
    paye += taxableIncome * 0.35;
  }

  // --- Apply personal relief ---
  paye -= 2400;
  if (paye < 0) paye = 0;

  // --- Net Salary ---
  const netSalary = grossSalary - paye - totalNSSF - shifDeduction;

  // --- Return all details ---
  return {
    grossSalary: grossSalary.toFixed(2),
    paye: paye.toFixed(2),
    nssf: totalNSSF.toFixed(2),
    shif: shifDeduction.toFixed(2),
    netSalary: netSalary.toFixed(2),
  };
}

// --- Example usage ---
const basicSalary = 100000; // replace with your value
const benefits = 20000; // replace with your value
const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Print results
console.log("Gross Salary: KES", salaryDetails.grossSalary);
console.log("PAYE (Tax): KES", salaryDetails.paye);
console.log("NSSF Deduction: KES", salaryDetails.nssf);
console.log("SHIF Deduction: KES", salaryDetails.shif);
console.log("Net Salary: KES", salaryDetails.netSalary);
