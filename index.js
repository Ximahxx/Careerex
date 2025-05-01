// Server
const express = require("express");

const app = express();

const PORT = process.env.PORT || 7000;

//JSON body parser
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server started running on " + PORT);
});

const drugs = [

    { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
   
    { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
   
    { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
   
    { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
   
    { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
   
    { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
   
    { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
   
    { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
   
    { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
   
    { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
   
    { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
   
    { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
   
    { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
   
    { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
   
    { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
   
    { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
   
    { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
   
    { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
   
    { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
   
    { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
   
   ];



// 1. GET /drugs/antibiotics
// Return all drugs where category is "Antibiotic".
app.get("/drugs/antibiotics", (request, response) => {
    response.send(drugs.filter((drug) => {
        if ( drug.category == "Antibiotic" ) {
            return drug;
        }
    }));
});

// 2.GET /drugs/names
// Return an array of all drug names converted to lowercase.
app.get("/drugs/names", (request, response) => {
    response.send(drugs.map( (drug) => {
        return drug.name.toLocaleLowerCase();
    }));
});

// 3.POST /drugs/by-category
// Accept a category in the body and return all drugs under that category.
// Example body: { "category": "Antibiotic" }
app.post("/drugs/by-category", (request, response) => {
    const data = request.body.category;
    function getDrugsByCategory(category) {
        const result = drugs.filter(drug => drug.category == category);
        return result.length > 0 ? result : `No drug fiund under thr category ${category}.`
    }
        response.send( getDrugsByCategory(data) );
    response.json({
        message: 'Resource created successfully',
        data: data
    });
});

// 4.GET /drugs/names-manufacturers
// Return an array of objects showing each drug’s name and manufacturer.
app.get("/drugs/names-manufacturers", (request, response) => {
    response.send(drugs.map(drug => {
        return {Name: drug.name, Manufacturer: drug.manufacturer};
    }));
});

// 5.GET /drugs/prescription
// Return all drugs where isPrescriptionOnly is true.
app.get("/drugs/prescription", (request, response) => {
    response.send(drugs.filter(drug => {
        drug.isPrescriptionOnly == true;
    }));
});

// 6. GET /drugs/formatted
// Return a new array where each item is a string like:
// "Drug: [name] - [dosageMg]mg"
app.get("/drugs/formatted", (request, response) => {
    response.send(drugs.map(drug => {
        return ("Drug: " + drug.name + " - " + drug.dosageMg + "mg");
    }));
});

// 7.GET /drugs/low-stock
// Return all drugs where stock is less than 50.
app.get("/drugs/low-stock", (request, response) => {
    response.send(drugs.filter(drug => drug.stock < 50));
});

// 8.GET /drugs/non-prescription
// Return all drugs where isPrescriptionOnly is false.
app.get("/drugs/non-prescription", (request, response) => {
    response.send(drugs.filter(drug => drug.isPrescriptionOnly != true));
});

// 9.POST /drugs/manufacturer-count
// Accept a manufacturer in the body and return how many drugs are produced by that manufacturer.
// Example body: { "manufacturer": "Pfizer" }
app.post("/drugs/manufacturer-count", (request, response) => {
    const manufacturer = request.body.manufacturer;
    response.send(drugs.filter(drug => drug.manufacturer == manufacturer));
    response.json({
        message: 'Drugs by chosen manufacturer',
        data: manufacturer
    });
});

// 10. GET /drugs/count-analgesics
// Count and return how many drugs have the category "Analgesic".
app.get("/drugs/count-analgesics", (request, response) => {
    let count = 0;
    drugs.forEach(drug => {
        if (drug.category == "Analgesic") {
            count += 1
        }
    });
    response.send(count);
});

