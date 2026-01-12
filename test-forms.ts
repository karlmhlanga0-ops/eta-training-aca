/**
 * Test script for form submissions
 * This will test both the quote form and application form
 */

import fetch from 'node-fetch';

const API_BASE = process.env.API_BASE || 'http://localhost:5173/api';

// Test data for quote submissions
const testQuotes = [
  {
    company: 'TechCorp Solutions',
    fullName: 'John Smith',
    position: 'L&D Manager',
    email: 'john@techcorp.com',
    contactNumber: '+27 11 555 1001',
    programId: 'supply-chain-practitioner',
    programName: 'Supply Chain Practitioner',
    learners: 25,
    perLearner: 15000,
    total: 375000,
  },
  {
    company: 'Logistics Africa',
    fullName: 'Maria Garcia',
    position: 'Operations Director',
    email: 'maria@logisticsafrica.co.za',
    contactNumber: '+27 21 444 2002',
    programId: 'transport-manager',
    programName: 'Transport Manager',
    learners: 15,
    perLearner: 18000,
    total: 270000,
  },
  {
    company: 'Manufacturing Plus',
    fullName: 'David Chen',
    position: 'HR Manager',
    email: 'david@manufacturingplus.com',
    contactNumber: '+27 31 333 3003',
    programId: 'project-management-practitioner',
    programName: 'Project Management Practitioner',
    learners: 30,
    perLearner: 16500,
    total: 495000,
  },
];

// Test data for application submissions
const testApplications = [
  {
    fullName: 'Themba Dlamini',
    idNumber: '9205151234567',
    dob: '1992-05-15',
    contactNumber: '+27 72 123 4001',
    email: 'themba.dlamini@email.com',
    address: '123 Main Street, Johannesburg, 2000',
    highestQualification: 'Grade 12',
    employerDetails: 'Self-employed',
    employed: 'No',
    disability: 'No',
    disabilityType: '',
    numApplying: '1',
    comments: 'Excited to join the learnership programme',
    programmeId: 'supply-chain-practitioner',
  },
  {
    fullName: 'Naledi Mkhize',
    idNumber: '9508201234567',
    dob: '1995-08-20',
    contactNumber: '+27 73 234 5002',
    email: 'naledi.mkhize@email.com',
    address: '456 Oak Avenue, Cape Town, 8000',
    highestQualification: 'NQF Level 4',
    employerDetails: 'RetailCo Ltd',
    employed: 'Yes',
    disability: 'No',
    disabilityType: '',
    numApplying: '1',
    comments: 'Looking to advance my career in logistics',
    programmeId: 'freight-handler',
  },
  {
    fullName: 'Sipho Nkosi',
    idNumber: '9301121234567',
    dob: '1993-01-12',
    contactNumber: '+27 74 345 6003',
    email: 'sipho.nkosi@email.com',
    address: '789 Tree Lane, Durban, 4000',
    highestQualification: 'Diploma',
    employerDetails: 'Transport Holdings',
    employed: 'Yes',
    disability: 'No',
    disabilityType: '',
    numApplying: '1',
    comments: 'Seeking professional certification',
    programmeId: 'transport-manager',
  },
];

async function testQuoteSubmission(quoteData: any, index: number) {
  try {
    console.log(`\n📤 Submitting quote ${index + 1}...`);
    console.log(`Company: ${quoteData.company}`);

    const response = await fetch(`${API_BASE}/submit-quote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quoteData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log(`✅ Quote ${index + 1} submitted successfully`);
      console.log(`Quote ID: ${result.quoteId}`);
      return true;
    } else {
      console.error(`❌ Quote ${index + 1} failed:`, result.error || result);
      return false;
    }
  } catch (error) {
    console.error(`❌ Quote ${index + 1} error:`, error);
    return false;
  }
}

async function testApplicationSubmission(appData: any, index: number) {
  try {
    console.log(`\n📤 Submitting application ${index + 1}...`);
    console.log(`Applicant: ${appData.fullName}`);

    const response = await fetch(`${API_BASE}/submit-application`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log(`✅ Application ${index + 1} submitted successfully`);
      return true;
    } else {
      console.error(`❌ Application ${index + 1} failed:`, result.error || result);
      return false;
    }
  } catch (error) {
    console.error(`❌ Application ${index + 1} error:`, error);
    return false;
  }
}

async function runAllTests() {
  console.log('🚀 Starting Form Submission Tests\n');
  console.log(`API Base: ${API_BASE}`);
  console.log('========================================\n');

  let passedQuotes = 0;
  let passedApps = 0;

  // Test quotes
  console.log('📋 TESTING QUOTE SUBMISSIONS');
  console.log('------------------------------------');
  for (let i = 0; i < testQuotes.length; i++) {
    if (await testQuoteSubmission(testQuotes[i], i)) {
      passedQuotes++;
    }
    // Small delay between submissions
    await new Promise((r) => setTimeout(r, 1000));
  }

  // Test applications
  console.log('\n📋 TESTING APPLICATION SUBMISSIONS');
  console.log('------------------------------------');
  for (let i = 0; i < testApplications.length; i++) {
    if (await testApplicationSubmission(testApplications[i], i)) {
      passedApps++;
    }
    // Small delay between submissions
    await new Promise((r) => setTimeout(r, 1000));
  }

  // Summary
  console.log('\n========================================');
  console.log('📊 TEST SUMMARY');
  console.log('========================================');
  console.log(`Quote Submissions: ${passedQuotes}/${testQuotes.length} passed`);
  console.log(`Application Submissions: ${passedApps}/${testApplications.length} passed`);
  console.log(
    `\nTotal: ${passedQuotes + passedApps}/${testQuotes.length + testApplications.length} passed`
  );

  if (passedQuotes + passedApps === testQuotes.length + testApplications.length) {
    console.log('\n✅ All tests passed! Check info@empoderata.net for emails.');
  } else {
    console.log(
      '\n⚠️  Some tests failed. Check API configuration and SendGrid settings.'
    );
  }
}

runAllTests().catch(console.error);
