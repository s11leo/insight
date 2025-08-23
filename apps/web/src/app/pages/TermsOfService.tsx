import React from "react";

import { Layout } from "@/components/ui/Layout";

const listItems = [
  {
    title: "1. Description of Service",
    items: [
      {
        value:
          "The Extension provides real-time text translation within supported browsers and platforms. Features may include:",
        type: "row"
      },
      {
        value:
          "Instant translation of selected text, sound and voice, chat messages, or webpages.",
        type: "unordered-list-item"
      },
      {
        value: "Multi-language support.",
        type: "unordered-list-item"
      },
      {
        value: "Premium subscription features (if applicable).",
        type: "unordered-list-item"
      },
      {
        value: "Web3 wallet integration.",
        type: "unordered-list-item"
      }
    ]
  },
  {
    title: "2. Eligibility",
    items: [
      {
        value:
          "You must be at least 16 years old to use the Service. If using the Service on behalf of an organization, you confirm you are authorized to bind that organization.",
        type: "row"
      }
    ]
  },
  {
    title: "3. User Responsibilities",
    items: [
      {
        value: "You agree to:",
        type: "row"
      },
      {
        value: "Use the Extension only for lawful purposes.",
        type: "unordered-list-item"
      },
      {
        value: "Not attempt to hack, disrupt, or misuse the Service.",
        type: "unordered-list-item"
      },
      {
        value:
          "Not upload or translate illegal, harmful, or copyrighted content without authorization.",
        type: "unordered-list-item"
      },
      {
        value: "Keep your account credentials (if applicable) secure.",
        type: "unordered-list-item"
      }
    ]
  },
  {
    title: "4. Prohibited Uses",
    items: [
      {
        value: "You may not use the Service to:",
        type: "row"
      },
      {
        value: "Violate intellectual property rights.",
        type: "unordered-list-item"
      },
      {
        value: "Circumvent restrictions or reverse-engineer the software.",
        type: "unordered-list-item"
      },
      {
        value: "Spread malware or harmful code.",
        type: "unordered-list-item"
      },
      {
        value:
          "Abuse translation APIs or use the Service for mass automation beyond fair use.",
        type: "unordered-list-item"
      }
    ]
  },
  {
    title: "5. Intellectual Property",
    items: [
      {
        value:
          "We retain ownership of the Extension, source code, and brand assets.",
        type: "unordered-list-item"
      },
      {
        value: "Users retain ownership of the content they translate.",
        type: "unordered-list-item"
      },
      {
        value:
          "You grant us a limited, temporary license to process your text solely for translation purposes.",
        type: "unordered-list-item"
      }
    ]
  },
  {
    title: "6. Fees & Subscriptions",
    items: [
      {
        value:
          "The base Extension may be free; premium features may require subscription fees.",
        type: "unordered-list-item"
      },
      {
        value:
          "Payments are processed by third-party providers; we do not store payment data.",
        type: "unordered-list-item"
      },
      {
        value: "Subscriptions auto-renew unless canceled.",
        type: "unordered-list-item"
      }
    ]
  },
  {
    title: "7. Limitation of Liability",
    items: [
      {
        value:
          "We provide the Extension “as is” without warranties of uninterrupted or error-free operation.",
        type: "unordered-list-item"
      },
      {
        value:
          "Translations may not be 100% accurate; we are not responsible for errors, omissions, or consequences of reliance.",
        type: "unordered-list-item"
      },
      {
        value:
          "We are not liable for indirect, incidental, or consequential damages.",
        type: "unordered-list-item"
      }
    ]
  },
  {
    title: "8. Termination",
    items: [
      {
        value: "We may suspend or terminate your access if:",
        type: "row"
      },
      {
        value: "You breach these Terms.",
        type: "unordered-list-item"
      },
      {
        value: "You misuse the Service (e.g., hacking, fraud, abuse).",
        type: "unordered-list-item"
      },
      {
        value: "We are required by law or regulation.",
        type: "unordered-list-item"
      },
      {
        value:
          "You may terminate use by uninstalling the Extension at any time.",
        type: "row"
      }
    ]
  },
  {
    title: "9. Governing Law & Dispute Resolution",
    items: [
      {
        value:
          "Any disputes shall be resolved through arbitration in LCIA, unless prohibited by law.",
        type: "row"
      },
      {
        value:
          "*Prior to arbitration, Parties shall seek to resolve disputes through mediation under DIFC-LCIA rules.",
        type: "row"
      }
    ]
  },
  {
    title: "10. Changes to Terms",
    items: [
      {
        value:
          "We may update these Terms at any time. Continued use of the Service after changes constitutes acceptance.",
        type: "row"
      }
    ]
  },
  {
    title: "11. Contact Us",
    items: [
      {
        value: "📩 Email:  support@insight-app.xyz",
        type: "row"
      }
    ]
  }
];

export const TermsOfService: React.FC = () => (
  <Layout>
    <div className="p-8 container font-poppins">
      <h1 className="text-7xl font-medium mb-16 leading-tight">
        Terms of Service
      </h1>
      <div className="space-y-10 text-3xl leading-tight font-medium md:px-14">
        <p>Last Updated: 22.08.2025</p>
        <p>
          These Terms of Service (“Terms”) govern your use of our Real-Time
          Translation Browser Extension (“Service”). By using the Service, you
          agree to these Terms.
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
