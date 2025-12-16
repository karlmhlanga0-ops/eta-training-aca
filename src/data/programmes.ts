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

  learning_outcomes?: string[];
  qualified_will_be_able_to?: string[];
  entry_requirements?: string[];
  international_comparability?: string[];
  certification?: string;
  career_opportunities?: string[];
  learning_options?: string;

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
    learning_outcomes: [
      'Manage budgets and financial performance',
      'Lead teams and workforce planning',
      'Monitor operations and service levels',
      'Manage customer and supplier relations',
      'Implement quality management systems',
      'Optimise technology and processes'
    ],
    qualified_will_be_able_to: [
      'Develop and control budgets',
      'Align operational plans to SLAs',
      'Lead teams and manage performance',
      'Apply industrial relations principles',
      'Maintain quality and compliance systems',
      'Analyse and improve service processes'
    ],
    entry_requirements: [
      'NQF Level 4 (preferred) or RPL as applicable'
    ],
    international_comparability: [
      'UK: NVQ Contact Centre Operations',
      'NZ: Diploma in Contact Centre Management',
      'Australia: Diploma of Customer Contact'
    ],
    certification: 'Occupational Certificate: Contact Centre Manager (NQF 5)',
    career_opportunities: [
      'Contact Centre Manager',
      'BPO Manager',
      'Operations Manager',
      'Customer Service Manager',
      'Quality Assurance Manager'
    ],
    learning_options: 'Classroom • Blended • Workplace learning • EISA',
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
    learning_outcomes: [
      'Coordinate supply chain and logistics operations',
      'Manage procurement cycles and supplier relationships',
      'Optimise inventory and warehouse operations',
      'Analyse supply chain data for planning and decision-making',
      'Apply regulatory, compliance, and safety requirements',
      'Use ERP and digital systems to improve efficiency'
    ],
    qualified_will_be_able_to: [
      'Implement procurement strategies',
      'Manage stock levels and warehouse flow',
      'Coordinate transportation and distribution',
      'Ensure supply chain legal and safety compliance',
      'Support continuous improvement across the value chain'
    ],
    entry_requirements: ['NQF Level 4 or Recognition of Prior Learning (RPL)'],
    international_comparability: [
      'UK: Diploma in Supply Chain Operations',
      'Australia: Diploma of Logistics',
      'New Zealand: Level 5 Supply Chain Management'
    ],
    certification: 'Occupational Certificate: Supply Chain Practitioner (NQF 5)',
    career_opportunities: [
      'Logistics Coordinator',
      'Procurement Officer',
      'Inventory Controller',
      'Supply Chain Practitioner',
      'Warehouse Planner'
    ],
    learning_options: 'Classroom • Blended • Workplace learning • EISA',
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
    learning_outcomes: [
      'Handle, move, and secure freight',
      'Follow health, safety, and environmental procedures',
      'Use Material Handling Equipment (MHE)',
      'Assist with warehouse receiving, dispatching, and storage',
      'Process freight labels and documentation'
    ],
    qualified_will_be_able_to: [
      'Prepare, pack, and secure loads',
      'Operate MHE safely',
      'Conduct stock counts and cycle counts',
      'Work within logistics teams',
      'Maintain accurate cargo records'
    ],
    entry_requirements: ['NQF Level 1 or RPL'],
    international_comparability: [
      'UK: Warehouse Operative Certificates',
      'Australia: Certificate II/III in Warehousing',
      'NZ: Level 3 Logistics Certificates'
    ],
    certification: 'Occupational Certificate: Freight Handler (NQF 3)',
    career_opportunities: [
      'Freight Handler',
      'Warehouse Assistant',
      'Dispatch/Receiving Clerk',
      'Courier Operations Assistant'
    ],
    learning_options: 'Classroom • Practical warehouse training • EISA',
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
    learning_outcomes: [
      'Analyse risk and apply underwriting principles',
      'Provide financial needs analysis',
      'Market and explain insurance products',
      'Apply regulatory and legislative requirements',
      'Administer policies and client records'
    ],
    qualified_will_be_able_to: [
      'Underwrite policies',
      'Conduct risk classification',
      'Manage client portfolios',
      'Ensure FAIS and FICA compliance',
      'Handle policy and claims documentation'
    ],
    entry_requirements: ['NQF Level 4 (RPL available)'],
    international_comparability: [
      'UK: CII Insurance Certificate',
      'Australia: Diploma of Insurance Services',
      'New Zealand: Financial Services Certificates'
    ],
    certification: 'Occupational Certificate: Insurance Agent/Underwriter (NQF 5)',
    career_opportunities: [
      'Insurance Consultant',
      'Underwriter',
      'Risk Assessor',
      'Client Care Advisor'
    ],
    learning_options: 'Classroom • Blended • Workplace learning • EISA',
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
    learning_outcomes: [
      'Manage full project life cycle',
      'Develop schedules, plans, budgets, and reports',
      'Lead teams and coordinate stakeholders',
      'Apply project governance and compliance',
      'Monitor progress and manage risks'
    ],
    qualified_will_be_able_to: [
      'Create project charters and WBS',
      'Execute tasks against project plans',
      'Implement change and risk management',
      'Finalise project close-out reports'
    ],
    entry_requirements: ['NQF Level 4 (RPL available)'],
    international_comparability: [
      'PMI Fundamentals',
      'PRINCE2 Alignment',
      'UK Level 4/5 Project Management Diplomas'
    ],
    certification: 'Occupational Certificate: Project Manager (NQF 5)',
    career_opportunities: [
      'Project Manager',
      'Project Coordinator',
      'Programme Support Officer'
    ],
    learning_options: 'Classroom • Blended • Workplace learning • EISA',
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
    learning_outcomes: [
      'Assess claim validity',
      'Investigate and verify supporting documents',
      'Apply legislation and compliance',
      'Communicate with clients and service providers',
      'Maintain accurate claims records'
    ],
    qualified_will_be_able_to: [
      'Conduct investigations and validate claims',
      'Interpret policy wording and make determinations',
      'Identify and escalate fraud indicators',
      'Maintain client and claims records accurately'
    ],
    entry_requirements: ['NQF Level 3 or 4 (RPL available)'],
    international_comparability: [
      'UK: CII Claims Foundation',
      'Australia: Certificate IV in Insurance',
      'New Zealand: Insurance Services Certificates'
    ],
    certification: 'Occupational Certificate: Claims Administrator/Assessor (NQF 4)',
    career_opportunities: [
      'Claims Administrator',
      'Claims Assessor',
      'Policy Support Officer'
    ],
    learning_options: 'Classroom • Blended • Workplace learning • EISA',
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
    learning_outcomes: [
      'Operate heavy vehicles safely',
      'Conduct pre-trip and post-trip inspections',
      'Apply road traffic rules and defensive driving',
      'Manage cargo and documentation',
      'Complete trip reports and route plans'
    ],
    qualified_will_be_able_to: [
      'Operate heavy vehicles competently',
      'Perform vehicle inspections and maintenance checks',
      'Plan routes and manage deliveries',
      'Ensure compliance with regulations and permits'
    ],
    entry_requirements: ['Code 10 or 14 licence (depending on employer needs); NQF Level 1 or RPL'],
    international_comparability: [
      'UK HGV Training',
      'Australia Heavy Vehicle Licence Training',
      'NZ Commercial Driver Certificates'
    ],
    certification: 'Occupational Certificate: Professional Driver (NQF 3)',
    career_opportunities: [
      'Heavy Vehicle Driver',
      'Long-Distance Driver',
      'Delivery Driver',
      'Transport Operator'
    ],
    learning_options: 'Classroom • Driving practicals • Workplace learning • EISA',
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
    learning_outcomes: [
      'Develop and manage transport operation plans',
      'Implement fleet and asset management systems',
      'Lead teams and manage performance',
      'Apply transport legislation and safety principles',
      'Control operational budgets and cost-efficiency'
    ],
    qualified_will_be_able_to: [
      'Monitor KPIs such as fuel, maintenance, and utilisation',
      'Manage routing, dispatch, and scheduling',
      'Lead operational teams',
      'Ensure compliance and mitigate risk'
    ],
    entry_requirements: ['NQF Level 4 (RPL available)'],
    international_comparability: [
      'UK Transport Manager CPC',
      'Australia Diploma of Logistics',
      'NZ Road Transport Management'
    ],
    certification: 'Occupational Certificate: Road Transport Manager (NQF 5)',
    career_opportunities: [
      'Transport Manager',
      'Fleet Manager',
      'Depot Manager',
      'Logistics Operations Manager'
    ],
    learning_options: 'Classroom • Blended • Workplace learning • EISA',
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
    learning_outcomes: [
      'Process customs declarations and permits',
      'Apply INCOTERMS and global trade conventions',
      'Calculate duties and tariffs',
      'Coordinate freight movement across sea, air, and land',
      'Communicate with customs, agents, and clients'
    ],
    qualified_will_be_able_to: [
      'Classify goods using HS tariff codes',
      'Prepare shipping documentation',
      'Ensure compliance with SARS customs laws',
      'Track shipments and resolve delays'
    ],
    entry_requirements: ['NQF Level 4 (RPL available)'],
    international_comparability: [
      'FIATA Diploma',
      'UK Freight Forwarding Certifications',
      'NZ International Logistics Certificates'
    ],
    certification: 'Occupational Certificate: Clearing & Forwarding Agent (NQF 5)',
    career_opportunities: [
      'Customs Clearing Agent',
      'Freight Forwarder',
      'Import/Export Controller',
      'International Logistics Coordinator'
    ],
    learning_options: 'Classroom • Blended • Workplace learning • EISA',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Clearing+Agent'
  }
];

export const ALL_PROGRAMMES = [...LEARNERSHIP_DATA];

export const getProgrammeBySlug = (slug: string): Programme | undefined => {
  return ALL_PROGRAMMES.find(p => p.id === slug);
};

export default LEARNERSHIP_DATA;

