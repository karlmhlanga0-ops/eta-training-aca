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
  brochure_url?: string;

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
    image_url: 'https://placehold.co/800x600/3b82f6/ffffff?text=Contact+Centre',
    brochure_url: '/brochures/learnerships/Contact-Centre-Manager.pdf'
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
    image_url: 'https://placehold.co/800x600/3b82f6/ffffff?text=Supply+Chain',
    brochure_url: '/brochures/learnerships/Supply-Chain-Practitioner.pdf'
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
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Freight+Handling',
    brochure_url: '/brochures/learnerships/Freight-Handler.pdf'
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
    image_url: 'https://placehold.co/800x600/3b82f6/ffffff?text=Insurance+Risk',
    brochure_url: '/brochures/learnerships/Insurance-Agent-Underwriter.pdf'
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
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Project+Mgt',
    brochure_url: '/brochures/learnerships/Project-Manager.pdf'
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
    image_url: 'https://placehold.co/800x600/3b82f6/ffffff?text=Claims+Admin',
    brochure_url: '/brochures/learnerships/Insurance-Claims-Administrator-or-Assessor.pdf'
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
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Truck+Driver',
    brochure_url: '/brochures/learnerships/truck-driver.pdf'
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
    image_url: 'https://placehold.co/800x600/3b82f6/ffffff?text=Transport+Manager',
    brochure_url: '/brochures/learnerships/Road-Transport-Manager.pdf'
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
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Clearing+Agent',
    brochure_url: '/brochures/learnerships/Clearing-Forwarding-Agent.pdf'
  },
  {
    id: 'retail-supervisor',
    name: 'Retail Supervisor',
    category: 'Learnership',
    nqf_level: 4,
    saqa_id: 121316,
    seta: 'Retail SETA',
    credits: 140,
    duration: '12 Months',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Skills Development (Category B)',
    short_description: 'A qualification essential for organisations operating in retail environments that require strong frontline supervision and operational control.',
    long_description: "This NQF Level 4 qualification equips learners with the capability to manage teams, oversee daily store operations, and deliver exceptional customer service—directly contributing to sales performance and operational efficiency. Learners develop supervisory skills in a blended format combining classroom learning with practical workplace experience.",
    key_modules: [
      'Retail Operations and Store Management',
      'Stock Control and Merchandising',
      'Customer Service Excellence',
      'Sales and Performance Management',
      'Team Supervision and Leadership'
    ],
    who_should_attend: 'Individuals working in retail environments, including supervisors, team leaders, and employees transitioning into supervisory roles.',
    learning_outcomes: [
      'Supervise retail staff and daily operations',
      'Manage stock levels and merchandising standards',
      'Handle customer interactions and complaints',
      'Monitor sales performance and targets',
      'Ensure compliance with retail procedures'
    ],
    qualified_will_be_able_to: [
      'Lead and coordinate retail teams effectively',
      'Maintain store standards and operational efficiency',
      'Improve customer experience and satisfaction',
      'Track and report on sales performance',
      'Ensure compliance with organisational policies'
    ],
    entry_requirements: ['NQF Level 3 (RPL available)'],
    international_comparability: [
      'UK Retail Supervisor Standards',
      'Australian Certificate IV in Retail Management',
      'New Zealand Retail Management Qualifications'
    ],
    certification: 'Occupational Certificate: Retail Supervisor (NQF 4)',
    career_opportunities: [
      'Retail Supervisor',
      'Store Team Leader',
      'Department Supervisor',
      'Assistant Store Manager'
    ],
    learning_options: 'Classroom • Blended • Workplace Learning • EISA',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Retail+Supervisor',
    brochure_url: '/brochures/learnerships/Retail-Supervisor.pdf'
  },
  {
    id: 'retail-chain-store-manager',
    name: 'Retail Chain Store Manager',
    category: 'Learnership',
    nqf_level: 5,
    saqa_id: 103150,
    seta: 'Retail SETA',
    credits: 160,
    duration: '12 Months',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Skills Development (Priority Element)',
    short_description: 'A qualification designed for organisations requiring strong store-level leadership capable of driving profitability, operational efficiency, and team performance.',
    long_description: "This NQF Level 5 qualification is designed for store managers and high-potential employees preparing for store leadership roles. Learners develop strategic and operational management skills to oversee retail branches and align store performance with business objectives. The programme combines theoretical knowledge with practical workplace application.",
    key_modules: [
      'Retail Business Management',
      'Financial and Sales Performance Management',
      'Operations Planning and Execution',
      'Leadership and Team Development',
      'Customer Experience Strategy'
    ],
    who_should_attend: 'Store managers, assistant managers, and high-potential employees preparing for store leadership roles.',
    learning_outcomes: [
      'Manage store profitability and budgets',
      'Lead teams to achieve performance targets',
      'Plan and execute store operations',
      'Analyse sales and operational data',
      'Enhance customer experience across stores'
    ],
    qualified_will_be_able_to: [
      'Drive revenue and control operational costs',
      'Lead and develop high-performing teams',
      'Align store operations with business strategy',
      'Monitor and improve store performance',
      'Implement operational improvements'
    ],
    entry_requirements: ['NQF Level 4 (RPL available)'],
    international_comparability: [
      'UK Retail Management Diplomas',
      'Australian Diploma of Retail Leadership',
      'International Store Management Certifications'
    ],
    certification: 'Occupational Certificate: Retail Chain Store Manager (NQF 5)',
    career_opportunities: [
      'Store Manager',
      'Branch Manager',
      'Retail Operations Manager',
      'Area Supervisor'
    ],
    learning_options: 'Classroom • Blended • Workplace Learning • EISA',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Store+Manager',
    brochure_url: '/brochures/learnerships/Retail-Chain-Store-Manager.pdf'
  },
  {
    id: 'software-developer',
    name: 'Software Developer',
    category: 'Learnership',
    nqf_level: 5,
    saqa_id: 118707,
    seta: 'CETA',
    credits: 180,
    duration: '12 Months',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Skills Development (Priority Element)',
    short_description: 'A qualification that supports organisations in building internal digital capability by developing skilled software developers.',
    long_description: "This NQF Level 5 qualification enables learners to design, develop, test, and maintain systems that improve operational efficiency and enable digital transformation. The programme combines theoretical foundations in programming with practical development experience, preparing graduates to contribute immediately to software development projects.",
    key_modules: [
      'Programming Fundamentals',
      'Software Development and Design',
      'Database Management',
      'Systems Integration',
      'Testing and Debugging'
    ],
    who_should_attend: 'Aspiring developers, IT graduates, and individuals seeking careers in software development.',
    learning_outcomes: [
      'Develop software applications',
      'Write and test code',
      'Design system solutions',
      'Integrate systems and databases',
      'Apply software development methodologies'
    ],
    qualified_will_be_able_to: [
      'Build and maintain applications',
      'Debug and optimise system performance',
      'Collaborate in development teams',
      'Implement scalable software solutions',
      'Support digital transformation initiatives'
    ],
    entry_requirements: ['NQF Level 4 (with Mathematics) (RPL available)'],
    international_comparability: [
      'Microsoft Certified Developer Pathways',
      'UK Software Development Apprenticeships',
      'Global Coding Bootcamp Standards'
    ],
    certification: 'Occupational Certificate: Software Developer (NQF 5)',
    career_opportunities: [
      'Software Developer',
      'Junior Programmer',
      'Application Developer',
      'Systems Developer'
    ],
    learning_options: 'Classroom • Blended • Workplace Learning • EISA',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Software+Developer',
    brochure_url: '/brochures/learnerships/Software-Developer.pdf'
  },
  {
    id: 'management-assistant',
    name: 'Management Assistant',
    category: 'Learnership',
    nqf_level: 5,
    saqa_id: 101876,
    seta: 'Services SETA',
    credits: 150,
    duration: '12 Months',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Skills Development (Priority Element)',
    short_description: 'A qualification that equips learners with the skills to provide high-level administrative and executive support, ensuring efficient business operations.',
    long_description: "This NQF Level 5 qualification equips learners with the skills to provide high-level administrative and executive support, ensuring efficient business operations and effective coordination across teams and departments. Learners develop competencies in office management, communication, record-keeping, and event coordination through blended learning.",
    key_modules: [
      'Office Administration and Coordination',
      'Business Communication',
      'Information and Records Management',
      'Event and Meeting Coordination',
      'Professional Practice'
    ],
    who_should_attend: 'Administrative professionals, office assistants, and individuals supporting management teams.',
    learning_outcomes: [
      'Manage office operations and schedules',
      'Communicate effectively with stakeholders',
      'Coordinate meetings and events',
      'Maintain records and documentation',
      'Support management teams'
    ],
    qualified_will_be_able_to: [
      'Provide executive-level administrative support',
      'Improve organisational efficiency',
      'Manage communication and documentation',
      'Coordinate internal and external engagements',
      'Support decision-making processes'
    ],
    entry_requirements: ['NQF Level 4 (RPL available)'],
    international_comparability: [
      'UK Business Administration Diplomas',
      'Australian Business Administration Certificates',
      'International Office Management Standards'
    ],
    certification: 'Occupational Certificate: Management Assistant (NQF 5)',
    career_opportunities: [
      'Management Assistant',
      'Executive Assistant',
      'Office Administrator',
      'Project Administrator'
    ],
    learning_options: 'Classroom • Blended • Workplace Learning • EISA',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Management+Assistant',
    brochure_url: '/brochures/learnerships/Management-Assistant.pdf'
  },
  {
    id: 'entrepreneurial-business-manager',
    name: 'Entrepreneurial Business Manager',
    category: 'Learnership',
    nqf_level: 4,
    saqa_id: 124447,
    seta: 'Services SETA',
    credits: 140,
    duration: '12 Months',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Skills Development (Category B)',
    short_description: 'A qualification designed to drive entrepreneurship, enterprise development, and innovation within organisations and the broader economy.',
    long_description: "This NQF Level 4 qualification drives entrepreneurship, enterprise development, and innovation. Learners are equipped with the practical skills required to start, manage, and grow sustainable businesses, contributing to economic growth and job creation. The programme combines business theory with practical venture development.",
    key_modules: [
      'Business Planning and Development',
      'Financial Management for Small Business',
      'Marketing and Sales Strategy',
      'Operations Management',
      'Entrepreneurship and Innovation'
    ],
    who_should_attend: 'Aspiring entrepreneurs, small business owners, and individuals involved in enterprise and supplier development initiatives.',
    learning_outcomes: [
      'Develop and implement business plans',
      'Manage business finances and cash flow',
      'Market products and services effectively',
      'Operate and manage a business',
      'Apply entrepreneurial thinking'
    ],
    qualified_will_be_able_to: [
      'Start and manage a sustainable business',
      'Identify and act on market opportunities',
      'Manage business operations efficiently',
      'Grow and scale business ventures',
      'Contribute to enterprise development initiatives'
    ],
    entry_requirements: ['NQF Level 3 (RPL available)'],
    international_comparability: [
      'UK Enterprise and Small Business Qualifications',
      'Australian Certificate IV in Entrepreneurship',
      'Global SME Development Frameworks'
    ],
    certification: 'Occupational Certificate: Entrepreneurial Business Manager (NQF 4)',
    career_opportunities: [
      'Entrepreneur',
      'Small Business Owner',
      'Business Manager',
      'Start-up Founder'
    ],
    learning_options: 'Classroom • Blended • Workplace Learning • EISA',
    format: 'Blended (Online & Workplace)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Business+Manager',
    brochure_url: '/brochures/learnerships/Entrepreneurial-Business-Manager.pdf'
  }
];

export const LEADERSHIP_PROGRAMMES: Programme[] = [
  {
    id: 'emerging-leaders',
    name: 'Emerging Leaders Programme',
    category: 'Masterclass',
    nqf_level: 0, // Not a regulated qualification
    saqa_id: 0,
    seta: 'Empodera',
    credits: 0,
    duration: 'Flexible (modular)',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Leadership Development',
    short_description: 'A foundational leadership development programme designed to build capability in high-potential employees and first-time managers.',
    long_description: "The Emerging Leaders Programme is designed to build foundational leadership capability in high-potential employees and first-time managers. The programme focuses on developing self-awareness, communication, and core leadership skills to enable participants to transition effectively into leadership roles and contribute meaningfully to team performance. This tier emphasizes the fundamentals of leading self and others.",
    key_modules: [
      'Leading Self and Personal Mastery',
      'Emotional Intelligence and Self-Awareness',
      'Communication and Influencing Skills',
      'Team Leadership Fundamentals',
      'Problem-Solving and Decision-Making'
    ],
    who_should_attend: 'First-time managers, supervisors, and high-potential employees preparing for leadership roles.',
    learning_outcomes: [
      'Develop self-awareness and emotional intelligence',
      'Master foundational communication and influencing',
      'Lead teams with confidence and clarity',
      'Solve problems and make sound decisions',
      'Transition effectively into leadership roles'
    ],
    qualified_will_be_able_to: [
      'Lead teams effectively with strong communication',
      'Build trust and psychological safety within teams',
      'Make decisions aligned with organisational values',
      'Develop their own leadership capability continuously',
      'Support their team\'s growth and performance'
    ],
    entry_requirements: ['Identified as high-potential or newly promoted to supervisory/management roles'],
    international_comparability: [
      'UK Leadership Foundations',
      'Global First-Time Manager Programmes',
      'International EQ Development Standards'
    ],
    certification: 'Emerging Leaders Programme Certificate',
    career_opportunities: [
      'Team Leader',
      'Supervisor',
      'Manager',
      'Department Lead'
    ],
    learning_options: 'Classroom • Blended • Virtual • Cohort-based',
    format: 'Blended (Interactive workshops & self-paced modules)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Emerging+Leaders',
    brochure_url: '/brochures/leadership/Emerging-Leaders-Programme.pdf'
  },
  {
    id: 'middle-management',
    name: 'Middle Management Programme',
    category: 'Masterclass',
    nqf_level: 0, // Not a regulated qualification
    saqa_id: 0,
    seta: 'Empodera',
    credits: 0,
    duration: 'Flexible (modular)',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Leadership Development',
    short_description: 'A strategic development programme designed to strengthen middle managers in leading teams, executing strategy, and driving operational performance.',
    long_description: "The Middle Management Programme is designed to strengthen the capability of middle managers to lead teams, execute strategy, and drive operational performance. It focuses on bridging the gap between strategy and execution, equipping managers with the tools to manage performance, lead people effectively, and deliver results in complex environments. This tier develops capability in performance management, strategic thinking, and stakeholder engagement.",
    key_modules: [
      'Leading Teams and Driving Accountability',
      'Performance Management and Delivery',
      'Strategic Thinking and Execution',
      'Stakeholder Management',
      'Managing in Complex and Dynamic Environments'
    ],
    who_should_attend: 'Middle managers, functional managers, and experienced supervisors responsible for team and operational performance.',
    learning_outcomes: [
      'Lead high-performing teams to delivery',
      'Drive organisational strategy at the operational level',
      'Manage performance with accountability and fairness',
      'Navigate stakeholder complexity and interests',
      'Deliver results in changing environments'
    ],
    qualified_will_be_able_to: [
      'Execute strategy through effective team leadership',
      'Drive performance management and accountability',
      'Manage multiple stakeholder relationships',
      'Lead through uncertainty and change',
      'Develop talent and build succession pipelines'
    ],
    entry_requirements: ['2+ years in a management role; ideally completed foundational leadership programme'],
    international_comparability: [
      'UK Middle Management Development',
      'Global Operations Leadership Programmes',
      'International Performance Management Standards'
    ],
    certification: 'Middle Management Programme Certificate',
    career_opportunities: [
      'Senior Manager',
      'Operations Manager',
      'Functional Director',
      'Area Manager'
    ],
    learning_options: 'Classroom • Blended • Virtual • Action Learning Sets',
    format: 'Blended (Case studies, group projects, workplace application)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Middle+Management',
    brochure_url: '/brochures/leadership/Middle-Management-Programme.pdf'
  },
  {
    id: 'senior-leadership',
    name: 'Senior Leadership Programme',
    category: 'Masterclass',
    nqf_level: 0, // Not a regulated qualification
    saqa_id: 0,
    seta: 'Empodera',
    credits: 0,
    duration: 'Flexible (modular)',
    price_key: 'PRICE_12_MONTHS',
    bbbee_impact: 'Executive Development',
    short_description: 'A high-impact development journey for executives and senior leaders responsible for organisational direction and transformation.',
    long_description: "The Senior Leadership Programme is a high-impact development journey designed for executives and senior leaders responsible for organisational direction and transformation. The programme focuses on strategic leadership, decision-making in complexity, and leading organisations through change, equipping leaders to drive long-term value and sustainable growth. This tier develops executive capability in vision-setting, transformation leadership, and enterprise-wide stakeholder management.",
    key_modules: [
      'Strategic Leadership and Organisational Direction',
      'Leading in Complexity and Uncertainty (VUCA)',
      'Executive Decision-Making',
      'Innovation and Transformation',
      'Stakeholder and Ecosystem Leadership'
    ],
    who_should_attend: 'Senior leaders, executives, and decision-makers responsible for organisational strategy and performance.',
    learning_outcomes: [
      'Define and communicate compelling organisational vision',
      'Lead transformation and strategic initiatives',
      'Make decisions in complexity and uncertainty',
      'Build and manage enterprise ecosystems',
      'Drive sustainable value creation and growth'
    ],
    qualified_will_be_able_to: [
      'Set strategic direction and align organisations',
      'Lead major transformation and change programmes',
      'Navigate VUCA environments with confidence',
      'Build high-performing executive teams',
      'Create sustainable competitive advantage'
    ],
    entry_requirements: ['C-suite or equivalent; 5+ years in senior leadership role; strategic responsibility'],
    international_comparability: [
      'UK Executive Leadership Programmes',
      'Global C-Suite Development',
      'International Transformation Leadership Standards'
    ],
    certification: 'Senior Leadership Programme Certificate',
    career_opportunities: [
      'Chief Executive Officer',
      'Chief Operating Officer',
      'Executive Director',
      'Board Member'
    ],
    learning_options: 'Executive workshops • Coaching • Peer learning • Strategic immersions',
    format: 'Blended (Executive briefings, immersions, coaching, peer forums)',
    image_url: 'https://placehold.co/800x600/3349df/ffffff?text=Senior+Leadership',
    brochure_url: '/brochures/leadership/Senior-Leadership-Programme.pdf'
  }
];

export const ALL_PROGRAMMES = [...LEARNERSHIP_DATA, ...LEADERSHIP_PROGRAMMES];

export const getProgrammeBySlug = (slug: string): Programme | undefined => {
  return ALL_PROGRAMMES.find(p => p.id === slug);
};

export default LEARNERSHIP_DATA;

