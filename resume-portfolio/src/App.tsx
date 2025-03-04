import React from 'react';
import { Mail, Phone, MapPin, Linkedin, FileText, GraduationCap, Briefcase, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-wider text-gray-900 text-center">
            ISHITA SHARMA
          </h1>
          <p className="mt-4 text-xl text-center text-gray-600 tracking-wide">
            FINANCE & AUDIT PROFESSIONAL
          </p>
          
          {/* Contact Information */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-600">
            <a href="tel:+919718810401" className="flex items-center gap-2 hover:text-gray-900">
              <Phone size={18} />
              <span>+91-97188-10401</span>
            </a>
            <a href="mailto:ishita.sharma476@gmail.com" className="flex items-center gap-2 hover:text-gray-900">
              <Mail size={18} />
              <span>ishita.sharma476@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Ghaziabad, UP</span>
            </div>
            <a href="https://linkedin.com/in/ishita-sharma-fin" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 hover:text-gray-900">
              <Linkedin size={18} />
              <span>ishita-sharma-fin</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Profile Summary */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText size={24} />
            Profile Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Detail-oriented 3+ years of experience in tax compliance, ITR & GST filings, auditing, & company formations. 
            Skilled in leveraging accounting software to ensure regulatory adherence and financial accuracy. 
            Proven track record in assisting clients with taxation compliance & providing comprehensive accounting and finance support.
          </p>
        </section>

        {/* Work Experience */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase size={24} />
            Work Experience
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Audit Executive</h3>
            <p className="text-gray-600 italic">Sharma Ashwani & Associates | APR 2023 - PRESENT</p>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Conducting Statutory and Tax Audits, ensuring compliance with Financial regulations.</li>
              <li>Managing GST, Income Tax, and TDS Compliance.</li>
              <li>Preparing Financial Statements, including Balance Sheets, P&L, and Cash Flow Statements.</li>
              <li>Assisting in Tax Audits and filing forms 3CA/3CB and 3CD.</li>
              <li>Drafting and filing legal compliance forms.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Articled Assistant</h3>
            <p className="text-gray-600 italic">VAAR Corporate Solution Pvt Ltd (HR EASE) | MAY 2021 - JUL 2022</p>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Assisted in Accounting and Auditing functions, including vouching and verification.</li>
              <li>Managed TDS compliance and Income Tax Return filing for corporate and non-corporate entities.</li>
              <li>Prepared Computation of Income and filed tax returns.</li>
              <li>Ensured ROC compliance and prepared Form 15CB.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <GraduationCap size={24} />
            Education
          </h2>
          
          <div className="grid gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">MBA in Finance (Pursuing)</h3>
              <p className="text-gray-600">Amity University | 2024 - 2026</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800">B.COM HONS, Accounting & Finance</h3>
              <p className="text-gray-600">Delhi University | 2016 - 2019</p>
              <p className="text-gray-700">Grade: First Division</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">CS Foundation</h3>
              <p className="text-gray-600">The Institute of Company Secretaries of India | 2016</p>
              <p className="text-gray-700">Grade: Passed with distinction (70%)</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">CA CPT</h3>
              <p className="text-gray-600">The Institute of Chartered Accountants of India | 2016</p>
              <p className="text-gray-700">Grade: 60%</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Award size={24} />
            Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'ROC Compliance Filing',
              'Income Tax Computation and Filing',
              'Statutory Audits & Financial Reporting',
              'Accounting & Auditing Procedures',
              'Proficiency in Webtel and Genius Software',
              'Client Taxation Compliance Assistance',
              'TDS & GST Return Preparation & Filing',
              'Financial Statement Preparation'
            ].map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-gray-700">
                {skill}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-600">
          © {new Date().getFullYear()} Ishita Sharma. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;