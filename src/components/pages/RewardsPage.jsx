import React, { useState } from 'react';
import { Gift, Search, Coffee, ShoppingBag, Utensils, Star } from 'lucide-react';
import '../../styles/RewardsPage.css';

const RewardsPage = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [rewards] = useState([
    {
      id: 1,
      title: 'Starbucks Coffee Voucher',
      description: 'Get a free tall coffee at any Starbucks location',
      points: 150,
      originalPrice: 350,
      category: 'food',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300',
      popular: true,
    },
    {
      id: 2,
      title: 'Amazon Gift Card',
      description: '₹500 Amazon gift card for online shopping',
      points: 400,
      originalPrice: 500,
      category: 'shopping',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300',
      popular: false,
    },
    {
      id: 3,
      title: 'Pizza Hut Meal Voucher',
      description: 'Medium pizza with 2 sides and drinks for 2 people',
      points: 300,
      originalPrice: 800,
      category: 'dining',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=300',
      popular: true,
    },
    {
      id: 4,
      title: 'H&M Fashion Voucher',
      description: '₹1000 voucher for H&M clothing and accessories',
      points: 600,
      originalPrice: 1000,
      category: 'fashion',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300',
      popular: false,
    },
    {
      id: 5,
      title: 'Dominos Pizza Voucher',
      description: 'Free regular pizza with any topping of your choice',
      points: 200,
      originalPrice: 450,
      category: 'food',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=300',
      popular: false,
    },
    {
      id: 6,
      title: 'BookMyShow Voucher',
      description: '₹300 voucher for movie tickets and events',
      points: 250,
      originalPrice: 300,
      category: 'entertainment',
      rating: 4.4,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300',
      popular: true,
    },
  ]);

  const userBalance = 1250;

  const filteredRewards = rewards.filter(reward => {
    const matchesCategory = currentCategory === 'all' || reward.category === currentCategory;
    const matchesSearch = reward.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         reward.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filterRewards = (category) => {
    setCurrentCategory(category);
  };

  const RewardCard = ({ reward }) => {
    const canAfford = userBalance >= reward.points;
    const savings = Math.round((1 - (reward.points / reward.originalPrice)) * 100);

    return (
      <div className="reward-card">
        <div className="reward-image">
          <img src={reward.image} alt={reward.title} />
          {reward.popular && <div className="popular-badge">🔥 Popular</div>}
          <div className="rating-badge">
            <Star size={12} />
            <span>{reward.rating}</span>
          </div>
        </div>
        <div className="reward-content">
          <h3 className="reward-title">{reward.title}</h3>
          <p className="reward-description">{reward.description}</p>
          <div className="reward-pricing">
            <div>
              <div className="reward-points">{reward.points} pts</div>
              <div className="original-price">₹{reward.originalPrice}</div>
            </div>
            <div className="savings">
              <div className="savings-label">Savings</div>
              <div className="savings-value">{savings}% off</div>
            </div>
          </div>
          <button 
            className={`reward-btn ${canAfford ? 'available' : 'unavailable'}`}
            disabled={!canAfford}
          >
            {canAfford ? 'Redeem Now' : 'Insufficient Points'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="page">
      <section className="rewards-section">
        <div className="container">
          <div className="section-header">
            <h2>Redeem Rewards</h2>
            <p>Exchange your points for amazing rewards and experiences</p>
            <div className="balance-display">
              <Gift size={20} />
              <span>Your Balance: {userBalance} points</span>
            </div>
          </div>
          <div className="rewards-filters">
            <div className="search-box">
              <Search size={20} />
              <input 
                type="text" 
                placeholder="Search rewards..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="category-filters">
              <button 
                className={`filter-btn ${currentCategory === 'all' ? 'active' : ''}`}
                onClick={() => filterRewards('all')}
              >
                <Gift size={16} />
                <span>All</span>
              </button>
              <button 
                className={`filter-btn ${currentCategory === 'food' ? 'active' : ''}`}
                onClick={() => filterRewards('food')}
              >
                <Coffee size={16} />
                <span>Food & Drinks</span>
              </button>
              <button 
                className={`filter-btn ${currentCategory === 'shopping' ? 'active' : ''}`}
                onClick={() => filterRewards('shopping')}
              >
                <ShoppingBag size={16} />
                <span>Shopping</span>
              </button>
              <button 
                className={`filter-btn ${currentCategory === 'dining' ? 'active' : ''}`}
                onClick={() => filterRewards('dining')}
              >
                <Utensils size={16} />
                <span>Dining</span>
              </button>
            </div>
          </div>
          <div className="rewards-grid">
            {filteredRewards.length > 0 ? (
              filteredRewards.map(reward => (
                <RewardCard key={reward.id} reward={reward} />
              ))
            ) : (
              <div className="no-rewards">
                <Gift size={64} />
                <h3>No rewards found</h3>
                <p>Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RewardsPage;