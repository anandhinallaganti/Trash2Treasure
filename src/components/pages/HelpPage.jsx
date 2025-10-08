import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Search, ChevronDown, ChevronUp } from 'lucide-react';
import '../../styles/HelpPage.css';

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCategory, setCurrentCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I start earning points?',
      answer: 'Simply download the app, create an account, and start scanning waste items with your camera. Our AI will verify and award points automatically.',
      category: 'getting-started',
    },
    {
      id: 2,
      question: 'What types of waste can I scan?',
      answer: 'You can scan plastic bottles, glass containers, aluminum cans, paper products, electronics, and many other recyclable items. Each item has different point values based on environmental impact.',
      category: 'scanning',
    },
    {
      id: 3,
      question: 'How are points calculated?',
      answer: 'Points are calculated based on the environmental impact of recycling each item, including CO2 saved, energy conserved, and water preserved. Rarer or more impactful items earn more points.',
      category: 'points',
    },
    {
      id: 4,
      question: 'When can I redeem my rewards?',
      answer: 'You can redeem rewards anytime once you have sufficient points. Most rewards start from as low as 50 points, and there are options for everyone!',
      category: 'rewards',
    },
    {
      id: 5,
      question: 'How long does it take to receive rewards?',
      answer: 'Digital rewards (vouchers, gift cards) are delivered instantly. Physical rewards typically take 3-5 business days to ship to your registered address.',
      category: 'rewards',
    },
    {
      id: 6,
      question: 'Can I refer friends?',
      answer: 'Yes! Share your referral code with friends. When they join and scan their first item, you both earn bonus points. There\'s no limit to how many friends you can refer.',
      category: 'referral',
    },
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = currentCategory === 'all' || faq.category === currentCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="page">
      <section className="help-section">
        <div className="container">
          <div className="section-header">
            <h2>Help & Support</h2>
            <p>Got questions? We're here to help you make the most of your Trash2Treasure experience</p>
          </div>
          <div className="help-grid">
            <div className="contact-options">
              <div className="contact-card">
                <h3>Get in Touch</h3>
                <div className="contact-methods">
                  <a href="#" className="contact-method chat">
                    <div className="contact-icon">
                      <MessageCircle size={20} />
                    </div>
                    <div className="contact-info">
                      <p className="contact-title">Live Chat</p>
                      <p className="contact-desc">Available 24/7</p>
                    </div>
                  </a>
                  <a href="tel:+918977570809" className="contact-method phone">
                    <div className="contact-icon">
                      <Phone size={20} />
                    </div>
                    <div className="contact-info">
                      <p className="contact-title">Call Us</p>
                      <p className="contact-desc">+91 8977570809</p>
                    </div>
                  </a>
                  <a href="mailto:vishnu.konda40@gmail.com" className="contact-method email">
                    <div className="contact-icon">
                      <Mail size={20} />
                    </div>
                    <div className="contact-info">
                      <p className="contact-title">Email</p>
                      <p className="contact-desc">vishnu.konda40@gmail.com</p>
                    </div>
                  </a>
                </div>
                <div className="quick-tip">
                  <h4>💡 Quick Tip</h4>
                  <p>For faster support, have your user ID ready when contacting us. You can find it in your profile settings.</p>
                </div>
              </div>
            </div>
            <div className="faq-section">
              <div className="faq-container">
                <h3>Frequently Asked Questions</h3>
                <div className="faq-search">
                  <Search size={20} />
                  <input 
                    type="text" 
                    placeholder="Search FAQs..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="faq-categories">
                  <button 
                    className={`faq-category ${currentCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setCurrentCategory('all')}
                  >
                    All Questions
                  </button>
                  <button 
                    className={`faq-category ${currentCategory === 'getting-started' ? 'active' : ''}`}
                    onClick={() => setCurrentCategory('getting-started')}
                  >
                    Getting Started
                  </button>
                  <button 
                    className={`faq-category ${currentCategory === 'scanning' ? 'active' : ''}`}
                    onClick={() => setCurrentCategory('scanning')}
                  >
                    Scanning Items
                  </button>
                  <button 
                    className={`faq-category ${currentCategory === 'points' ? 'active' : ''}`}
                    onClick={() => setCurrentCategory('points')}
                  >
                    Points & Rewards
                  </button>
                </div>
                <div className="faq-list">
                  {filteredFAQs.length > 0 ? (
                    filteredFAQs.map(faq => (
                      <div key={faq.id} className={`faq-item ${openFAQ === faq.id ? 'active' : ''}`}>
                        <button className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                          <span>{faq.question}</span>
                          {openFAQ === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {openFAQ === faq.id && (
                          <div className="faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="no-faqs">
                      <h4>No FAQs found</h4>
                      <p>Try adjusting your search or category filter</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;