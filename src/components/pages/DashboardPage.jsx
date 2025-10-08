import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, TrendingUp, Coins, Gift, Trees as Tree, Droplets, Zap, Award } from 'lucide-react';
import '../../styles/DashboardPage.css';

const DashboardPage = () => {
  const [animatedStats, setAnimatedStats] = useState({
    trees: 0,
    water: 0,
    energy: 0,
    rank: 0
  });

  useEffect(() => {
    const targets = { trees: 47, water: 2340, energy: 156, rank: 12 };
    const animateStats = () => {
      Object.keys(targets).forEach(key => {
        const target = targets[key];
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, 20);
      });
    };

    animateStats();
  }, []);

  return (
    <div className="page">
      <section className="dashboard-section">
        <div className="container">
          <div className="section-header">
            <h2>My Dashboard</h2>
            <p>Track your rewards and environmental impact</p>
          </div>
          <div className="dashboard-grid">
            <div className="wallet-card">
              <div className="wallet-header">
                <div className="wallet-info">
                  <p className="balance-label">Total Balance</p>
                  <div className="balance-amount">
                    <span className="balance-number">1,250</span>
                    <span className="balance-unit">points</span>
                  </div>
                </div>
                <div className="wallet-icon">
                  <Wallet size={24} />
                </div>
              </div>
              <div className="wallet-stats">
                <div className="wallet-stat">
                  <div className="stat-icon">
                    <TrendingUp size={16} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-label">This Month</span>
                    <span className="stat-value">+485</span>
                  </div>
                </div>
                <div className="wallet-stat">
                  <div className="stat-icon">
                    <Coins size={16} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-label">CO2 Saved</span>
                    <span className="stat-value">12.5 kg</span>
                  </div>
                </div>
              </div>
              <Link to="/rewards" className="btn-redeem">
                <Gift size={20} />
                <span>Redeem Rewards</span>
              </Link>
            </div>
            <div className="quick-stats">
              <div className="quick-stat-card">
                <h3>Quick Stats</h3>
                <div className="quick-stat-item">
                  <span>Items Scanned</span>
                  <span>47</span>
                </div>
                <div className="quick-stat-item">
                  <span>Rank</span>
                  <span className="rank-eco">Eco Warrior</span>
                </div>
                <div className="quick-stat-item">
                  <span>Next Reward</span>
                  <span className="next-reward">50 pts away</span>
                </div>
              </div>
              <div className="daily-challenge">
                <h4>🎯 Daily Challenge</h4>
                <p>Scan 3 items today</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '66%' }}></div>
                </div>
                <p className="progress-text">2/3 completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header">
            <h2>Your Environmental Impact</h2>
            <p>See the positive change you're making for our planet</p>
            <div className="section-divider"></div>
          </div>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-icon trees">
                <Tree size={20} />
              </div>
              <div className="impact-value">{animatedStats.trees}</div>
              <div className="impact-unit">trees</div>
              <div className="impact-title">Trees Equivalent Saved</div>
              <div className="impact-desc">Based on CO2 absorption capacity</div>
            </div>
            <div className="impact-stat">
              <div className="impact-icon water">
                <Droplets size={20} />
              </div>
              <div className="impact-value">{animatedStats.water.toLocaleString()}</div>
              <div className="impact-unit">liters</div>
              <div className="impact-title">Water Conserved</div>
              <div className="impact-desc">Through recycling processes</div>
            </div>
            <div className="impact-stat">
              <div className="impact-icon energy">
                <Zap size={20} />
              </div>
              <div className="impact-value">{animatedStats.energy}</div>
              <div className="impact-unit">kWh</div>
              <div className="impact-title">Energy Saved</div>
              <div className="impact-desc">Renewable energy equivalent</div>
            </div>
            <div className="impact-stat">
              <div className="impact-icon rank">
                <Award size={20} />
              </div>
              <div className="impact-value">{animatedStats.rank}</div>
              <div className="impact-unit">out of 1000</div>
              <div className="impact-title">Your Eco Rank</div>
              <div className="impact-desc">Among local community members</div>
            </div>
          </div>
          <div className="achievements">
            <h3>Your Eco Achievements</h3>
            <div className="achievement-grid">
              <div className="achievement-card beginner">
                <div className="achievement-icon">🌱</div>
                <h4>Eco Beginner</h4>
                <p>First 10 items recycled</p>
              </div>
              <div className="achievement-card saver">
                <div className="achievement-icon">🌊</div>
                <h4>Water Saver</h4>
                <p>Saved 1000+ liters</p>
              </div>
              <div className="achievement-card champion">
                <div className="achievement-icon">⚡</div>
                <h4>Energy Champion</h4>
                <p>Saved 100+ kWh energy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;