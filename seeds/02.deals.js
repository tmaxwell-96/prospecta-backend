/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("deals").del();
  await knex("deals").insert([
    {
      id: 1,
      company_id: 1,
      deal_name: "Sale of 200 units, expected March",
      description:
        "Spoke with the main contact and they are looking forward to 200 units but conditional on funding on their part. Should check back in February",
      value: 10000,
      percent_certainty: "80%",
      expected_sale_date: "2023-03-01", // Replace with an actual date in the next months
    },
    {
      id: 2,
      company_id: 2,
      deal_name: "Expansion Partnership, Q2",
      description:
        "Exploring potential partnership opportunities for expansion in the second quarter.",
      value: 15000,
      percent_certainty: "90%",
      expected_sale_date: "2023-05-01", // Replace with an actual date in the next months
    },
    {
      id: 3,
      company_id: 3,
      deal_name: "Product Launch Collaboration",
      description:
        "Discussing collaboration for the launch of a new product in the upcoming months.",
      value: 12000,
      percent_certainty: "85%",
      expected_sale_date: "2023-04-01", // Replace with an actual date in the next months
    },
    {
      id: 4,
      company_id: 4,
      deal_name: "Supply Chain Optimization",
      description:
        "Exploring strategies to optimize the supply chain and reduce costs.",
      value: 18000,
      percent_certainty: "75%",
      expected_sale_date: "2023-06-01", // Replace with an actual date in the next months
    },
    {
      id: 5,
      company_id: 5,
      deal_name: "Technology Upgrade Agreement",
      description:
        "Negotiating an agreement for upgrading the technology infrastructure.",
      value: 20000,
      percent_certainty: "88%",
      expected_sale_date: "2023-04-15", // Replace with an actual date in the next months
    },
    {
      id: 6,
      company_id: 6,
      deal_name: "Strategic Investment Proposal",
      description:
        "Presenting a strategic investment proposal for mutual benefit.",
      value: 25000,
      percent_certainty: "82%",
      expected_sale_date: "2023-05-10", // Replace with an actual date in the next months
    },
    {
      id: 7,
      company_id: 7,
      deal_name: "Joint Research Project",
      description:
        "Collaborating on a joint research project to explore new opportunities.",
      value: 16000,
      percent_certainty: "87%",
      expected_sale_date: "2023-03-20", // Replace with an actual date in the next months
    },
    {
      id: 8,
      company_id: 8,
      deal_name: "Global Expansion Discussion",
      description:
        "Engaging in discussions regarding the possibility of global expansion.",
      value: 22000,
      percent_certainty: "78%",
      expected_sale_date: "2023-06-15", // Replace with an actual date in the next months
    },
    {
      id: 9,
      company_id: 9,
      deal_name: "Sustainability Partnership",
      description:
        "Exploring a partnership focused on sustainability initiatives.",
      value: 13000,
      percent_certainty: "92%",
      expected_sale_date: "2023-04-25", // Replace with an actual date in the next months
    },
    {
      id: 10,
      company_id: 10,
      deal_name: "Digital Marketing Campaign",
      description:
        "Planning a digital marketing campaign to enhance brand visibility.",
      value: 17000,
      percent_certainty: "84%",
      expected_sale_date: "2023-05-05", // Replace with an actual date in the next months
    },
    {
      id: 11,
      company_id: 11,
      deal_name: "AI Integration Collaboration",
      description:
        "Discussing collaboration for integrating AI technology into existing systems.",
      value: 19000,
      percent_certainty: "79%",
      expected_sale_date: "2023-06-10", // Replace with an actual date in the next months
    },
    {
      id: 12,
      company_id: 12,
      deal_name: "Health and Wellness Program",
      description:
        "Exploring options for implementing a health and wellness program for employees.",
      value: 14000,
      percent_certainty: "91%",
      expected_sale_date: "2023-04-10", // Replace with an actual date in the next months
    },
    {
      id: 13,
      company_id: 13,
      deal_name: "Customized Software Development",
      description:
        "Negotiating a deal for the development of customized software solutions.",
      value: 21000,
      percent_certainty: "83%",
      expected_sale_date: "2023-05-20", // Replace with an actual date in the next months
    },
    {
      id: 14,
      company_id: 14,
      deal_name: "E-commerce Platform Upgrade",
      description:
        "Discussing an upgrade plan for the existing e-commerce platform.",
      value: 23000,
      percent_certainty: "86%",
      expected_sale_date: "2023-06-20", // Replace with an actual date in the next months
    },
    {
      id: 15,
      company_id: 15,
      deal_name: "Employee Training Program",
      description: "Planning a comprehensive training program for employees.",
      value: 20000,
      percent_certainty: "88%",
      expected_sale_date: "2023-03-25", // Replace with an actual date in the next months
    },
    {
      id: 16,
      company_id: 16,
      deal_name: "Blockchain Implementation",
      description:
        "Exploring the implementation of blockchain technology for enhanced security.",
      value: 18000,
      percent_certainty: "77%",
      expected_sale_date: "2023-04-05", // Replace with an actual date in the next months
    },
    {
      id: 17,
      company_id: 17,
      deal_name: "Data Analytics Collaboration",
      description:
        "Collaborating on utilizing data analytics for business insights.",
      value: 25000,
      percent_certainty: "80%",
      expected_sale_date: "2023-06-05", // Replace with an actual date in the next months
    },
    {
      id: 18,
      company_id: 18,
      deal_name: "IT Infrastructure Upgrade",
      description:
        "Negotiating an agreement for upgrading the IT infrastructure.",
      value: 16000,
      percent_certainty: "89%",
      expected_sale_date: "2023-03-15", // Replace with an actual date in the next months
    },
    {
      id: 19,
      company_id: 19,
      deal_name: "Product Diversification Strategy",
      description:
        "Exploring strategies for diversifying the product portfolio.",
      value: 15000,
      percent_certainty: "81%",
      expected_sale_date: "2023-05-15", // Replace with an actual date in the next months
    },
    {
      id: 20,
      company_id: 20,
      deal_name: "Employee Benefits Enhancement",
      description:
        "Enhancing employee benefits to improve overall satisfaction and retention.",
      value: 17000,
      percent_certainty: "93%",
      expected_sale_date: "2023-04-20", // Replace with an actual date in the next months
    },
    {
      id: 21,
      company_id: 21,
      deal_name: "Cybersecurity Partnership",
      description:
        "Exploring a partnership to strengthen cybersecurity measures.",
      value: 19000,
      percent_certainty: "85%",
      expected_sale_date: "2023-06-01", // Replace with an actual date in the next months
    },
    {
      id: 22,
      company_id: 22,
      deal_name: "Customer Loyalty Program",
      description:
        "Planning the implementation of a customer loyalty program for increased retention.",
      value: 14000,
      percent_certainty: "78%",
      expected_sale_date: "2023-04-01", // Replace with an actual date in the next months
    },
    {
      id: 23,
      company_id: 23,
      deal_name: "Smart Manufacturing Integration",
      description:
        "Discussing the integration of smart manufacturing technologies for efficiency.",
      value: 22000,
      percent_certainty: "90%",
      expected_sale_date: "2023-05-10", // Replace with an actual date in the next months
    },
    {
      id: 24,
      company_id: 24,
      deal_name: "Renewable Energy Collaboration",
      description:
        "Collaborating on initiatives related to renewable energy and sustainability.",
      value: 20000,
      percent_certainty: "82%",
      expected_sale_date: "2023-06-15", // Replace with an actual date in the next months
    },
    {
      id: 25,
      company_id: 25,
      deal_name: "Mobile App Development",
      description:
        "Negotiating a deal for the development of a customized mobile application.",
      value: 21000,
      percent_certainty: "87%",
      expected_sale_date: "2023-03-20", // Replace with an actual date in the next months
    },
    {
      id: 26,
      company_id: 26,
      deal_name: "AI-driven Customer Support",
      description:
        "Implementing AI-driven solutions to enhance customer support processes.",
      value: 23000,
      percent_certainty: "79%",
      expected_sale_date: "2023-05-05", // Replace with an actual date in the next months
    },
    {
      id: 27,
      company_id: 27,
      deal_name: "Product Packaging Redesign",
      description:
        "Discussing a redesign of product packaging for improved market appeal.",
      value: 16000,
      percent_certainty: "88%",
      expected_sale_date: "2023-06-10", // Replace with an actual date in the next months
    },
    {
      id: 28,
      company_id: 28,
      deal_name: "Virtual Reality Integration",
      description:
        "Exploring the integration of virtual reality technology for unique customer experiences.",
      value: 18000,
      percent_certainty: "75%",
      expected_sale_date: "2023-04-10", // Replace with an actual date in the next months
    },
    {
      id: 29,
      company_id: 29,
      deal_name: "Global Market Entry Strategy",
      description:
        "Developing a strategy for entering new international markets and expanding global presence.",
      value: 25000,
      percent_certainty: "91%",
      expected_sale_date: "2023-05-20", // Replace with an actual date in the next months
    },
    {
      id: 30,
      company_id: 30,
      deal_name: "AI-driven Product Recommendations",
      description:
        "Implementing AI algorithms for personalized product recommendations to customers.",
      value: 17000,
      percent_certainty: "84%",
      expected_sale_date: "2023-06-20", // Replace with an actual date in the next months
    },
    {
      id: 31,
      company_id: 5,
      deal_name: "New Product Launch Partnership",
      description:
        "Exploring a partnership for the launch of an innovative product.",
      value: 28000,
      percent_certainty: "85%",
      expected_sale_date: "2023-04-10",
    },
    {
      id: 32,
      company_id: 18,
      deal_name: "IT System Integration",
      description:
        "Negotiating the integration of new IT systems for improved efficiency.",
      value: 22000,
      percent_certainty: "78%",
      expected_sale_date: "2023-05-15",
    },
    {
      id: 33,
      company_id: 9,
      deal_name: "Sustainable Packaging Collaboration",
      description:
        "Collaborating on implementing sustainable packaging solutions.",
      value: 18000,
      percent_certainty: "90%",
      expected_sale_date: "2023-06-01",
    },
    {
      id: 34,
      company_id: 12,
      deal_name: "Employee Training and Development Program",
      description:
        "Planning a comprehensive training program for employee skill development.",
      value: 25000,
      percent_certainty: "82%",
      expected_sale_date: "2023-04-25",
    },
    {
      id: 35,
      company_id: 24,
      deal_name: "Renewable Energy Partnership",
      description:
        "Exploring a partnership to promote renewable energy initiatives.",
      value: 30000,
      percent_certainty: "88%",
      expected_sale_date: "2023-05-20",
    },
    {
      id: 36,
      company_id: 8,
      deal_name: "Global Market Expansion Strategy",
      description:
        "Developing a strategy for entering new global markets and expanding market presence.",
      value: 26000,
      percent_certainty: "91%",
      expected_sale_date: "2023-06-10",
    },
    {
      id: 37,
      company_id: 15,
      deal_name: "Customer Loyalty Program Implementation",
      description:
        "Implementing a customer loyalty program for enhanced customer retention.",
      value: 20000,
      percent_certainty: "85%",
      expected_sale_date: "2023-04-20",
    },
    {
      id: 38,
      company_id: 1,
      deal_name: "Strategic Investment Proposal",
      description:
        "Presenting a strategic investment proposal for mutual benefit.",
      value: 30000,
      percent_certainty: "92%",
      expected_sale_date: "2023-05-05",
    },
    {
      id: 39,
      company_id: 20,
      deal_name: "Employee Benefits Enhancement",
      description:
        "Enhancing employee benefits to improve overall satisfaction and retention.",
      value: 21000,
      percent_certainty: "86%",
      expected_sale_date: "2023-06-20",
    },
    {
      id: 40,
      company_id: 11,
      deal_name: "AI Integration Collaboration",
      description:
        "Discussing collaboration for integrating AI technology into existing systems.",
      value: 28000,
      percent_certainty: "89%",
      expected_sale_date: "2023-04-15",
    },
    {
      id: 41,
      company_id: 7,
      deal_name: "Joint Research and Development Project",
      description:
        "Collaborating on a joint research and development project for innovation.",
      value: 24000,
      percent_certainty: "77%",
      expected_sale_date: "2023-05-10",
    },
    {
      id: 42,
      company_id: 29,
      deal_name: "AI-driven Product Recommendations",
      description:
        "Implementing AI algorithms for personalized product recommendations to customers.",
      value: 22000,
      percent_certainty: "84%",
      expected_sale_date: "2023-06-05",
    },
    {
      id: 43,
      company_id: 3,
      deal_name: "Product Diversification Strategy",
      description:
        "Exploring strategies for diversifying the product portfolio.",
      value: 28000,
      percent_certainty: "79%",
      expected_sale_date: "2023-03-25",
    },
    {
      id: 44,
      company_id: 23,
      deal_name: "Smart Manufacturing Integration",
      description:
        "Discussing the integration of smart manufacturing technologies for efficiency.",
      value: 26000,
      percent_certainty: "88%",
      expected_sale_date: "2023-04-05",
    },
    {
      id: 45,
      company_id: 19,
      deal_name: "Product Launch Collaboration, Q2",
      description:
        "Collaborating on a product launch scheduled for the second quarter.",
      value: 24000,
      percent_certainty: "75%",
      expected_sale_date: "2023-06-01",
    },
    {
      id: 46,
      company_id: 16,
      deal_name: "Blockchain Implementation",
      description:
        "Exploring the implementation of blockchain technology for enhanced security.",
      value: 28000,
      percent_certainty: "81%",
      expected_sale_date: "2023-05-15",
    },
    {
      id: 47,
      company_id: 2,
      deal_name: "Expansion Partnership, Q3",
      description:
        "Exploring potential partnership opportunities for expansion in the third quarter.",
      value: 27000,
      percent_certainty: "93%",
      expected_sale_date: "2023-04-10",
    },
    {
      id: 48,
      company_id: 13,
      deal_name: "Customized Software Development",
      description:
        "Negotiating a deal for the development of customized software solutions.",
      value: 23000,
      percent_certainty: "87%",
      expected_sale_date: "2023-06-15",
    },
    {
      id: 49,
      company_id: 30,
      deal_name: "Virtual Reality Integration",
      description:
        "Exploring the integration of virtual reality technology for unique customer experiences.",
      value: 29000,
      percent_certainty: "80%",
      expected_sale_date: "2023-04-01",
    },
    {
      id: 50,
      company_id: 22,
      deal_name: "Customer Satisfaction Improvement Initiative",
      description:
        "Implementing initiatives to enhance customer satisfaction and loyalty.",
      value: 25000,
      percent_certainty: "89%",
      expected_sale_date: "2023-05-20",
    },
    {
      id: 51,
      company_id: 14,
      deal_name: "Supply Chain Optimization",
      description:
        "Optimizing the supply chain for increased efficiency and cost savings.",
      value: 26000,
      percent_certainty: "88%",
      expected_sale_date: "2023-06-10",
    },
    {
      id: 52,
      company_id: 6,
      deal_name: "E-commerce Platform Integration",
      description:
        "Integrating with an e-commerce platform for expanded online sales.",
      value: 24000,
      percent_certainty: "85%",
      expected_sale_date: "2023-04-20",
    },
    {
      id: 53,
      company_id: 28,
      deal_name: "Smart City Infrastructure Project",
      description:
        "Participating in a smart city infrastructure development initiative.",
      value: 30000,
      percent_certainty: "90%",
      expected_sale_date: "2023-05-05",
    },
    {
      id: 54,
      company_id: 10,
      deal_name: "Health and Wellness Program",
      description: "Implementing a health and wellness program for employees.",
      value: 22000,
      percent_certainty: "82%",
      expected_sale_date: "2023-06-01",
    },
    {
      id: 55,
      company_id: 21,
      deal_name: "Cross-border Partnership, Q3",
      description:
        "Exploring a partnership for cross-border initiatives in the third quarter.",
      value: 28000,
      percent_certainty: "89%",
      expected_sale_date: "2023-04-15",
    },
    {
      id: 56,
      company_id: 3,
      deal_name: "AI-driven Marketing Campaign",
      description: "Implementing AI-driven strategies for marketing campaigns.",
      value: 25000,
      percent_certainty: "86%",
      expected_sale_date: "2023-05-20",
    },
    {
      id: 57,
      company_id: 17,
      deal_name: "Employee Recognition Program",
      description:
        "Launching a program to recognize and reward employee achievements.",
      value: 26000,
      percent_certainty: "93%",
      expected_sale_date: "2023-04-10",
    },
    {
      id: 58,
      company_id: 5,
      deal_name: "Advanced Data Analytics Implementation",
      description:
        "Implementing advanced data analytics tools for informed decision-making.",
      value: 27000,
      percent_certainty: "77%",
      expected_sale_date: "2023-06-05",
    },
    {
      id: 59,
      company_id: 12,
      deal_name: "Strategic Marketing Collaboration",
      description:
        "Collaborating on strategic marketing initiatives for market expansion.",
      value: 23000,
      percent_certainty: "91%",
      expected_sale_date: "2023-04-25",
    },
    {
      id: 60,
      company_id: 25,
      deal_name: "Product Launch, Q2",
      description:
        "Planning a product launch scheduled for the second quarter.",
      value: 29000,
      percent_certainty: "84%",
      expected_sale_date: "2023-06-20",
    },
    {
      id: 61,
      company_id: 9,
      deal_name: "International Trade Partnership",
      description:
        "Exploring partnership opportunities for international trade.",
      value: 24000,
      percent_certainty: "79%",
      expected_sale_date: "2023-05-10",
    },
    {
      id: 62,
      company_id: 19,
      deal_name: "IT Security Enhancement",
      description:
        "Enhancing IT security measures for data protection and privacy.",
      value: 28000,
      percent_certainty: "81%",
      expected_sale_date: "2023-04-05",
    },
    {
      id: 63,
      company_id: 8,
      deal_name: "Customized Product Development",
      description:
        "Negotiating a deal for the development of customized products.",
      value: 26000,
      percent_certainty: "88%",
      expected_sale_date: "2023-05-15",
    },
    {
      id: 64,
      company_id: 14,
      deal_name: "Innovation Workshop",
      description: "Hosting an innovation workshop to generate creative ideas.",
      value: 24000,
      percent_certainty: "75%",
      expected_sale_date: "2023-04-01",
    },
    {
      id: 65,
      company_id: 29,
      deal_name: "Collaborative Research Project",
      description: "Collaborating on a research project for mutual benefit.",
      value: 25000,
      percent_certainty: "89%",
      expected_sale_date: "2023-05-20",
    },
    {
      id: 66,
      company_id: 16,
      deal_name: "Employee Training and Development Program",
      description:
        "Planning a comprehensive training program for employee skill development.",
      value: 26000,
      percent_certainty: "80%",
      expected_sale_date: "2023-03-25",
    },
    {
      id: 67,
      company_id: 23,
      deal_name: "Smart Manufacturing Integration",
      description:
        "Discussing the integration of smart manufacturing technologies for efficiency.",
      value: 28000,
      percent_certainty: "89%",
      expected_sale_date: "2023-04-05",
    },
    {
      id: 68,
      company_id: 11,
      deal_name: "AI-driven Customer Support",
      description:
        "Implementing AI-driven solutions to enhance customer support processes.",
      value: 26000,
      percent_certainty: "77%",
      expected_sale_date: "2023-06-01",
    },
    {
      id: 69,
      company_id: 7,
      deal_name: "Product Packaging Redesign",
      description:
        "Discussing a redesign of product packaging for improved market appeal.",
      value: 28000,
      percent_certainty: "88%",
      expected_sale_date: "2023-05-10",
    },
    {
      id: 70,
      company_id: 30,
      deal_name: "Renewable Energy Collaboration",
      description:
        "Collaborating on initiatives related to renewable energy and sustainability.",
      value: 30000,
      percent_certainty: "82%",
      expected_sale_date: "2023-06-15",
    },
    {
      id: 71,
      company_id: 22,
      deal_name: "Mobile App Development",
      description:
        "Negotiating a deal for the development of a customized mobile application.",
      value: 31000,
      percent_certainty: "87%",
      expected_sale_date: "2023-03-20",
    },
    {
      id: 72,
      company_id: 26,
      deal_name: "AI-driven Product Recommendations",
      description:
        "Implementing AI algorithms for personalized product recommendations to customers.",
      value: 27000,
      percent_certainty: "91%",
      expected_sale_date: "2023-04-10",
    },
    {
      id: 73,
      company_id: 18,
      deal_name: "Innovative Marketing Campaign",
      description:
        "Planning and executing an innovative marketing campaign for brand visibility.",
      value: 29000,
      percent_certainty: "84%",
      expected_sale_date: "2023-05-05",
    },
    {
      id: 74,
      company_id: 13,
      deal_name: "Expansion Partnership, Q4",
      description:
        "Exploring potential partnership opportunities for expansion in the fourth quarter.",
      value: 28000,
      percent_certainty: "79%",
      expected_sale_date: "2023-06-20",
    },
    {
      id: 75,
      company_id: 4,
      deal_name: "Customer Feedback Enhancement",
      description:
        "Implementing strategies to enhance the collection and analysis of customer feedback.",
      value: 24000,
      percent_certainty: "85%",
      expected_sale_date: "2023-04-15",
    },
    {
      id: 76,
      company_id: 27,
      deal_name: "Cross-industry Collaboration",
      description:
        "Exploring collaboration opportunities with companies from different industries.",
      value: 26000,
      percent_certainty: "91%",
      expected_sale_date: "2023-05-01",
    },
    {
      id: 77,
      company_id: 20,
      deal_name: "Employee Benefits Enhancement",
      description:
        "Enhancing employee benefits to improve overall satisfaction and retention.",
      value: 22000,
      percent_certainty: "86%",
      expected_sale_date: "2023-06-10",
    },
    {
      id: 78,
      company_id: 15,
      deal_name: "Customized Software Development",
      description:
        "Negotiating a deal for the development of customized software solutions.",
      value: 30000,
      percent_certainty: "93%",
      expected_sale_date: "2023-04-05",
    },
    {
      id: 79,
      company_id: 1,
      deal_name: "Virtual Reality Integration",
      description:
        "Exploring the integration of virtual reality technology for unique customer experiences.",
      value: 27000,
      percent_certainty: "80%",
      expected_sale_date: "2023-05-15",
    },
    {
      id: 80,
      company_id: 24,
      deal_name: "Customer Satisfaction Improvement Initiative",
      description:
        "Implementing initiatives to enhance customer satisfaction and loyalty.",
      value: 25000,
      percent_certainty: "89%",
      expected_sale_date: "2023-06-01",
    },
  ]);
};
