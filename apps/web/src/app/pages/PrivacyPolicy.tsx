import React from "react";

import { Layout } from "@/components/ui/Layout";

const listItems = [
  {
    title: "1. Information We Collect",
    items: [
      {
        value: "1.1. Information You Provide Directly",
        type: "row"
      },
      {
        value: "Email address (if you register or contact support)",
        type: "unordered-list-item"
      },
      {
        value: "Account information (if we offer account-based features)",
        type: "unordered-list-item"
      },
      {
        value: "1.2. Information Processed Automatically",
        type: "row"
      },
      {
        value: "When using the Extension, the following data may be processed:",
        type: "row"
      },
      {
        value:
          "Text and Sound you choose to translate (processed temporarily for translation purposes; not stored permanently)",
        type: "unordered-list-item"
      },
      {
        value: "Browser type and version",
        type: "unordered-list-item"
      },
      {
        value: "Language settings",
        type: "unordered-list-item"
      },
      {
        value:
          "Technical diagnostics (errors, usage statistics, performance logs)",
        type: "unordered-list-item"
      },
      {
        value: "1.3. Optional Data",
        type: "row"
      },
      {
        value:
          "Payment details (if you purchase premium features; processed securely by third-party payment providers)",
        type: "unordered-list-item"
      },
      {
        value:
          "Wallet address (if Web3 integrations are enabled for tokenized features, such as rewards or premium access)",
        type: "unordered-list-item"
      }
    ]
  },
  {
    title: "2. How We Use Your Data",
    items: [
      {
        value: "We use collected data to:",
        type: "row"
      },
      {
        value: "Provide real-time translations.",
        type: "unordered-list-item"
      },
      {
        value: "Improve accuracy and performance of translation models.",
        type: "unordered-list-item"
      },
      {
        value: "Offer customer support.",
        type: "unordered-list-item"
      },
      {
        value: "Maintain system security and prevent misuse.",
        type: "unordered-list-item"
      },
      {
        value:
          "(If applicable) provide access to premium, subscription, or blockchain-enabled features.",
        type: "unordered-list-item"
      }
    ]
  },
  {
    title: "3. Data Storage & Security",
    items: [
      {
        value:
          "Translation text is processed in real time and is not stored on our servers after delivery.",
        type: "unordered-list-item"
      },
      {
        value:
          "Personal data (like email or account details) is stored in encrypted databases.",
        type: "unordered-list-item"
      },
      {
        value:
          "We apply end-to-end encryption for communication between your browser and our servers.",
        type: "unordered-list-item"
      },
      {
        value:
          "Access to personal data is restricted to authorized staff only.",
        type: "unordered-list-item"
      }
    ]
  },
  {
    title: "4. Data Sharing",
    items: [
      {
        value:
          "We do not sell or trade your personal information. Data may be shared only with:",
        type: "row"
      },
      {
        value:
          "Service providers (e.g., cloud hosting, translation API providers).",
        type: "unordered-list-item"
      },
      {
        value: "Payment processors for subscription transactions.",
        type: "unordered-list-item"
      },
      {
        value: "Regulatory authorities if legally required.",
        type: "unordered-list-item"
      }
    ]
  },
  {
    title: "5. Data Retention",
    items: [
      {
        value: "Temporary translation text is not stored.",
        type: "unordered-list-item"
      },
      {
        value:
          "Account information (if applicable) is kept as long as your account is active.",
        type: "unordered-list-item"
      },
      {
        value:
          "Billing records may be retained to comply with tax and financial regulations.",
        type: "unordered-list-item"
      }
    ]
  },
  {
    title: "6. Your Rights",
    items: [
      {
        value: "Under GDPR and other laws, you have the right to:",
        type: "row"
      },
      {
        value: "Access and receive a copy of your data.",
        type: "unordered-list-item"
      },
      {
        value: "Request correction of inaccurate data.",
        type: "unordered-list-item"
      },
      {
        value: "Request deletion (“right to be forgotten”).",
        type: "unordered-list-item"
      },
      {
        value: "Restrict processing or withdraw consent.",
        type: "unordered-list-item"
      },
      {
        value: "Data portability (download/export your data).",
        type: "unordered-list-item"
      },
      {
        value: "To exercise these rights, contact us.",
        type: "row"
      }
    ]
  },
  {
    title: "7. Children’s Privacy",
    items: [
      {
        value:
          "The Extension is not intended for children under 16. We do not knowingly collect data from minors.",
        type: "row"
      }
    ]
  },
  {
    title: "8. International Transfers",
    items: [
      {
        value:
          "If your data is transferred outside your country (e.g., to cloud services), we ensure it is protected under GDPR-compliant mechanisms (SCCs, adequacy decisions).",
        type: "row"
      }
    ]
  },
  {
    title: "9. Changes to Policy",
    items: [
      {
        value:
          "We may update this Privacy Policy to reflect changes in technology, law, or our services. Updates will be posted on this page with a revised effective date.",
        type: "row"
      }
    ]
  },
  {
    title: "10. Contact Us",
    items: [
      {
        value:
          "If you have any questions or concerns about this Privacy Policy, please contact us.",
        type: "row"
      }
    ]
  }
];

export const PrivacyPolicy: React.FC = () => (
  <Layout>
    <div className="p-8 container font-poppins">
      <h1 className="text-7xl font-medium mb-16 leading-tight">
        Privacy Policy
      </h1>
      <div className="space-y-10 text-3xl leading-tight font-medium md:px-14">
        <p>
          This Privacy Policy explains how we (“Company”, “we”, “our” or “us”)
          collect, use, and protect your information when you use our Real-Time
          Translation Browser Extension (the “Extension”). <br />
          We respect your privacy and are committed to protecting your personal
          information in compliance with applicable laws (GDPR, CCPA, and other
          data protection regulations).
        </p>
        {listItems.map((section, index) => (
          <div key={index}>
            <h2 className="text-3xl text-green-300 leading-tight font-semibold">
              {section.title}
            </h2>
            <div>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center">
                  {item.type === "unordered-list-item" && (
                    <div className="w-2 h-2 rounded-full bg-white mx-4 shrink-0" />
                  )}
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
