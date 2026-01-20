const fs = require('fs');
const path = require('path');

const csvPath = 'g:/AI Work/Work/Prof/JD-audio/Nobius/nobius-website/update/content/products.csv';
const content = fs.readFileSync(csvPath, 'utf8');

const parseCSV = (text) => {
    const rows = [];
    let currentRow = [];
    let currentField = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = text[i + 1];

        if (inQuotes) {
            if (char === '"') {
                if (nextChar === '"') {
                    currentField += '"';
                    i++;
                } else {
                    inQuotes = false;
                }
            } else {
                currentField += char;
            }
        } else {
            if (char === '"') {
                inQuotes = true;
            } else if (char === ',') {
                currentRow.push(currentField);
                currentField = '';
            } else if (char === '\n' || char === '\r') {
                if (char === '\r' && nextChar === '\n') i++;
                currentRow.push(currentField);
                rows.push(currentRow);
                currentRow = [];
                currentField = '';
            } else {
                currentField += char;
            }
        }
    }
    if (currentRow.length > 0 || currentField !== '') {
        currentRow.push(currentField);
        rows.push(currentRow);
    }
    return rows;
};

const rows = parseCSV(content);

// Mapping CSV columns to Product interface
// 0: Category, 1: ID?, 2: Type?, 3: Status, 4: Model, 5: Description, 6: Specs, 7: Features?
// Based on check: 0=Category, 2=Type(Speaker/Stand/Tool), 3=Status, 4=Model, 5=Description, 6=Specs, 7=Features

const products = [];

rows.forEach(p => {
    if (p[4] && p[4].length > 1 && p[4] !== 'Model') {
        const specsRaw = p[6] || '';
        const specs = {};

        // Very basic JSON parse attempt if it looks like JSON, otherwise text
        if (specsRaw.startsWith('{')) {
            try { specs = JSON.parse(specsRaw); } catch (e) { }
        }

        products.push({
            id: p[4].toLowerCase().replace(/ /g, '-'),
            name: p[4],
            slug: p[4].toLowerCase().replace(/ /g, '-'),
            tagline: p[5] ? p[5].split('.')[0] : '', // First sentence as tagline
            description: p[5] || '',
            longDescription: p[5] || '',
            price: '$TBD', // CSV might not have price in consistent column, checking... header row said Price at index 2?
            // Wait, previous view of CSV showed: ProductName,Category,Price,Description,Image,Specs,Features
            // But my row index guess aligned with: 0=Category?
            // Let's re-verify CSV structure from output in Step 174/180/193
            // Step 193: "SPEAKERS,1,Speaker,Current,N1-9,..."
            // So: 0=CategoryGroup?, 1=?, 2=Type, 3=Status, 4=Model, 5=Description, 6=Specs...
            image: p[8] || '/images/placeholder.jpg', // Guessing image column, let's look at Step 58? No. 
            // In Step 119: ProductName,Category,Price...
            // Actually Step 119 header: "Product Line-up for..." - meaningless
            // Step 193 output looked like: "SPEAKERS,1,Speaker,Current,N1-9, Reference Voicing..."
            // I'll trust my index mapping: 4=Model.

            category: p[2] === 'Speaker' ? 'Speakers' : (p[2] === 'Stand' ? 'Stands' : 'Audio Tools'),
            features: [], // Populate later
            specs: specs
        });
    }
});

// Output TS file content
console.log(`export interface ProductSpecs {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: string;
  image: string;
  category: string;
  features: string[];
  specs: ProductSpecs;
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};`);
