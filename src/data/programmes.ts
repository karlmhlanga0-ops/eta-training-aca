// src/data/programmes.ts
// Finalised Programme data model and learnership dataset

export interface Programme {
  id: string;
  name: string;
  category: 'Learnership' | 'Short Programme' | 'Masterclass';

  nqf_level: number;
  saqa_id: number;
  seta: string;
  credits: number;
  duration: string; // e.g. '12 Months'
  price_key: 'PRICE_12_MONTHS' | 'PRICE_18_MONTHS' | 'PRICE_24_MONTHS';
  bbbee_impact: string;

  short_description: string;
  long_description: string;
  key_modules: string[];
  who_should_attend: string;

  format: string;
  image_url: string;
}

export const PRICE_12_MONTHS = 38900;
export const PRICE_18_MONTHS = 58350;
export const PRICE_24_MONTHS = 77800;

export const LEARNERSHIP_DATA: Programme[] = [
  {
    id: 'contact-centre',
    name: 'Contact Centre Support',
    category: 'Learnership',
    nqf_level: 5,
    saqa_id: 99687,
    seta: 'Services SETA',
    credits: 285,
    duration: '12 Months',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Skills Development (Category B)',
    short_description: 'A comprehensive qualification designed to train high-level support staff in managing complex customer interactions and centre operations.',
    long_description: "This NQF Level 5 qualification focuses on equipping learners with the strategic, analytical, and managerial skills necessary to excel in a modern contact centre environment. The curriculum covers everything from advanced communication strategies and quality assurance to regulatory compliance and effective team leadership, ensuring graduates can drive measurable performance improvements.",
    key_modules: [
      'Contact Centre Operations Management',
      'Customer Relationship Management (CRM) Strategy',
      'Compliance and Regulatory Frameworks',
      'Team Leadership and Coaching',
      'Data Analysis and Reporting'
    ],
    who_should_attend: 'Individuals currently working as supervisors, team leaders, or those transitioning into management within a contact centre environment.',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3b82f6/ffffff?text=Contact+Centre'
  },
  {
    id: 'supply-chain-practitioner',
    name: 'Supply Chain Practitioner',
    category: 'Learnership',
    nqf_level: 5,
    saqa_id: 110942,
    seta: 'TETA',
    credits: 180,
    duration: '12 Months',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Skills Development (Priority Element)',
    short_description: 'An NQF Level 5 qualification focusing on the practical application of supply chain planning, procurement, and logistics management principles.',
    long_description: "This program is designed to create highly capable supply chain specialists who can implement effective management systems across transportation, warehousing, and inventory control. It emphasizes global best practices and local regulatory compliance required for efficient South African operations, giving a direct competitive advantage.",
    key_modules: [
      'Logistics and Transport Management',
      'Procurement and Sourcing Strategy',
      'Inventory and Warehouse Control',
      'Supply Chain Technology and Digitization',
      'Risk Management in Supply Chain'
    ],
    who_should_attend: 'Employees involved in logistics, purchasing, operations planning, or those aiming for managerial roles in transport and supply chain divisions.',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3b82f6/ffffff?text=Supply+Chain'
  },
  {
    id: 'freight-handler',
    name: 'Freight Handler',
    category: 'Learnership',
    nqf_level: 3,
    saqa_id: 96396,
    seta: 'TETA',
    credits: 122,
    duration: '12 Months',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Skills Development (Entry-Level)',
    short_description: 'A foundational NQF Level 3 qualification covering the safe and efficient handling, packing, and dispatching of goods in a logistics environment.',
    long_description: "Crucial for minimizing operational risk, this qualification provides learners with essential knowledge in load securement, regulatory documentation, equipment usage (including forklifts), and safety protocols. It ensures compliance with transportation laws and results in immediate competency improvement for warehouse and yard staff.",
    key_modules: [
      'Warehouse and Inventory Procedures',
      'Safety and Health in Freight Operations',
      'Load Planning and Securing Techniques',
      'Dangerous Goods Handling (Basic)',
      'Basic Freight Documentation'
    ],
    who_should_attend: 'Unemployed youth (18.1), warehouse operatives, or new employees starting in entry-level logistics, transport, or storage roles.',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Freight+Handling'
  },
  {
    id: 'insurance-underwriter',
    name: 'Insurance Agent / Underwriter',
    category: 'Learnership',
    nqf_level: 5,
    saqa_id: 91784,
    seta: 'INSETA',
    credits: 156,
    duration: '12 Months',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Skills Development (Priority Element)',
    short_description: 'An NQF Level 5 qualification providing the core legal, financial, and analytical skills required to assess risk and underwrite insurance policies effectively.',
    long_description: "This learnership covers advanced principles of short-term and long-term insurance, focusing heavily on regulatory compliance (FAIS, FICA) and risk pricing models. Graduates gain competency in managing client portfolios, negotiating premiums, and ensuring the profitability and stability of the underwriting function.",
    key_modules: [
      'Insurance Law and Regulatory Compliance',
      'Risk Analysis and Pricing Models',
      'Underwriting Principles and Practices',
      'Financial Planning and Reporting',
      'Client Portfolio Management'
    ],
    who_should_attend: 'Individuals working in sales support, client advisory roles, or directly involved in the risk assessment and policy creation process.',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3b82f6/ffffff?text=Insurance+Risk'
  },
  {
    id: 'project-manager',
    name: 'Project Manager',
    category: 'Learnership',
    nqf_level: 5,
    saqa_id: 101869,
    seta: 'Services SETA',
    credits: 240,
    duration: '18 Months',
    price_key: 'PRICE_18_MONTHS',
    bbbee_impact: 'Skills Development (Priority Element)',
    short_description: 'A comprehensive NQF Level 5 qualification providing formal methodologies and tools necessary to manage complex projects across various industries.',
    long_description: "This 18-month program delivers the theoretical and practical skills required to initiate, plan, execute, control, and close projects successfully. It aligns with global project management standards and includes critical learning areas like scope definition, stakeholder management, budgeting, and risk mitigation.",
    key_modules: [
      'Project Initiation and Scoping',
      'Risk and Quality Management',
      'Stakeholder Communication',
      'Project Scheduling and Budgeting',
      'Team Leadership and Execution'
    ],
    who_should_attend: 'New or existing employees who are expected to manage projects, project teams, or departmental initiatives.',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Project+Mgt'
  },
  {
    id: 'insurance-claims-assessor',
    name: 'Insurance Claims Administrator / Assessor',
    category: 'Learnership',
    nqf_level: 4,
    saqa_id: 99668,
    seta: 'INSETA',
    credits: 131,
    duration: '24 Months',
    price_key: 'PRICE_24_MONTHS',
    bbbee_impact: 'Skills Development (Category B)',
    short_description: 'An NQF Level 4 qualification focused on the accurate and ethical processing and adjudication of insurance claims.',
    long_description: "Designed for claims departments, this qualification covers the full claims lifecycle, from first notification of loss (FNOL) to final settlement. It emphasizes client empathy, investigative techniques, fraud prevention, and strict adherence to industry regulations, reducing liability and improving customer satisfaction.",
    key_modules: [
      'Claims Lifecycle Management',
      'Policy Interpretation',
      'Fraud Detection and Prevention',
      'Customer Communication and Service',
      'Dispute Resolution and Ethics'
    ],
    who_should_attend: 'Individuals starting their career in claims administration, processing, or assessment roles within the insurance industry.',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3b82f6/ffffff?text=Claims+Admin'
  },
  {
    id: 'truck-driver',
    name: 'Truck Driver',
    category: 'Learnership',
    nqf_level: 3,
    saqa_id: 93793,
    seta: 'TETA',
    credits: 130,
    duration: '12 Months',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Skills Development (Entry-Level)',
    short_description: 'A vocational NQF Level 3 qualification providing the theoretical knowledge and practical driving skills for heavy commercial vehicles.',
    long_description: "This learnership goes beyond just obtaining a license. It focuses on route planning, vehicle maintenance checks, fatigue management, defensive driving techniques, and compliance with all cross-border and local road regulations, ensuring the safety of the driver, cargo, and public.",
    key_modules: [
      'Vehicle Safety and Maintenance',
      'Advanced Driving Techniques',
      'Regulatory Compliance and Permits',
      'Load Management and Safety',
      'Customer Service and Delivery Protocol'
    ],
    who_should_attend: 'Unemployed individuals seeking to enter the transportation sector or current drivers needing formal certification and upskilling in regulatory compliance.',
    format: 'Blended (Practical & Theory)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Truck+Driver'
  },
  {
    id: 'road-transport-manager',
    name: 'Road Transport Manager',
    category: 'Learnership',
    nqf_level: 5,
    saqa_id: 96371,
    seta: 'TETA',
    credits: 205,
    duration: '24 Months',
    price_key: 'PRICE_24_MONTHS',
    bbbee_impact: 'Skills Development (Priority Element)',
    short_description: 'An advanced NQF Level 5 qualification focused on strategic planning, resource allocation, and regulatory management within the road freight industry.',
    long_description: "This two-year program prepares managers to oversee transport operations, manage budgets, optimize routes, handle complex regulatory requirements, and ensure staff compliance with safety and licensing laws. It is essential for reducing operational costs and maintaining a legal, competitive fleet.",
    key_modules: [
      'Fleet Management Strategy',
      'Financial Management and Budgeting',
      'Transport Legislation and Compliance',
      'Operations Scheduling and Optimization',
      'Human Resource Management in Transport'
    ],
    who_should_attend: 'Existing supervisors or staff identified for management progression within the transport and logistics department.',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3b82f6/ffffff?text=Transport+Manager'
  },
  {
    id: 'clearing-forwarding-agent',
    name: 'Clearing & Forwarding Agent',
    category: 'Learnership',
    nqf_level: 5,
    saqa_id: 96368,
    seta: 'TETA',
    credits: 120,
    duration: '12 Months',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Skills Development (Priority Element)',
    short_description: 'An NQF Level 5 qualification providing expertise in customs documentation, tariffs, international trade law, and complex logistics processes.',
    long_description: "This qualification is vital for companies involved in importing and exporting. Learners master the complexities of customs regulations, tariff classification, border control procedures, and freight movement, enabling the company to avoid penalties and streamline international trade operations.",
    key_modules: [
      'International Trade Procedures and Law',
      'Customs Documentation and Tariff Codes',
      'Incoterms and Trade Agreements',
      'Freight Logistics and Supply Chain Coordination',
      'Risk Management in International Freight'
    ],
    who_should_attend: 'Individuals working in international trade, shipping, logistics, or roles requiring cross-border documentation knowledge.',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Clearing+Agent'
  }
];

export const ALL_PROGRAMMES = [...LEARNERSHIP_DATA];

export const getProgrammeBySlug = (slug: string): Programme | undefined => {
  return ALL_PROGRAMMES.find(p => p.id === slug);
};

export default LEARNERSHIP_DATA;

