import React, { useState } from 'react';
import { audioHaptics } from '../../utils/audioHaptics';
import { MockupBuiltByBanner } from './MockupBuiltByBanner';
import {
  ShoppingBag,
  Plus,
  Minus,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  MapPin,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

interface PlatterItem {
  id: string;
  name: string;
  serves: string;
  price: number;
  image: string;
  tags: string[];
  desc: string;
}

const PLATTERS: PlatterItem[] = [
  {
    id: 'croissant-board',
    name: 'Parisian Brioche & Viennoiserie Board',
    serves: 'Serves 10–12 Guests',
    price: 95,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    tags: ['Best Seller', 'Baked Fresh 5AM'],
    desc: 'Flaky butter croissants, pain au chocolat, almond twists, and house whipped berry preserve.'
  },
  {
    id: 'sourdough-lunch',
    name: 'Artisan Sourdough Deli Platter',
    serves: 'Serves 12–15 Guests',
    price: 145,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    tags: ['Organic Grains', 'Local Cheeses'],
    desc: 'House-cured prosciutto, slow-roasted turkey, aged gruyère, and arugula on rustic sourdough baguettes.'
  },
  {
    id: 'tartlet-collection',
    name: 'Seasonal Fruit & Pastry Tartlet Collection',
    serves: '24 Pieces',
    price: 120,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    tags: ['Handcrafted', 'Gluten-Free Option'],
    desc: 'Meyer lemon curd, fresh berries with Madagascar vanilla bean pastry cream, and dark chocolate ganache.'
  },
  {
    id: 'beverage-dispenser',
    name: 'Single-Origin Cold Brew & Drip Box',
    serves: 'Serves 16–20 Cups',
    price: 55,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    tags: ['Oat & Whole Milk', 'Cups Included'],
    desc: 'Smooth 18-hour cold brew or Ethiopian drip coffee, complete with raw sugar, honey, and compostable cups.'
  }
];

export const SweetRiseBakeryMockup: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'croissant-board': 1,
    'sourdough-lunch': 1,
    'tartlet-collection': 0,
    'beverage-dispenser': 1
  });

  const [dietaryOptions, setDietaryOptions] = useState<string[]>(['Nut-Free Kitchen Handling']);
  const [selectedDate, setSelectedDate] = useState('2026-09-15');
  const [selectedTime, setSelectedTime] = useState('09:30 AM');
  const [guestCount, setGuestCount] = useState(25);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const toggleDietary = (option: string) => {
    audioHaptics.playClick(1500);
    setDietaryOptions(prev =>
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  const handleQtyChange = (id: string, delta: number) => {
    audioHaptics.playClick(delta > 0 ? 1600 : 1200);
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const subtotal = PLATTERS.reduce((sum, item) => sum + (quantities[item.id] || 0) * item.price, 0);
  const tax = Math.round(subtotal * 0.0825);
  const delivery = subtotal > 0 ? 25 : 0;
  const total = subtotal + tax + delivery;
  const deposit = Math.round(total * 0.5);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (subtotal === 0) return;
    audioHaptics.playClick(1800);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderConfirmed(true);
      audioHaptics.playChime();
    }, 1200);
  };

  const resetOrder = () => {
    audioHaptics.playClick();
    setOrderConfirmed(false);
  };

  return (
    <div className="flex flex-col min-h-full bg-[#fcfbf9] text-[#2c2724] font-sans antialiased select-none">
      {/* Bakery Header */}
      <header className="bg-white border-b border-[#ece7e1] sticky top-0 z-30 px-4 sm:px-8 py-3.5 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#e87a5d]/10 flex items-center justify-center text-[#e87a5d] font-serif font-bold text-lg">
              S
            </div>
            <div>
              <span className="font-serif font-bold text-base text-[#2c2724] tracking-tight block">
                SweetRise Artisan Bakery
              </span>
              <span className="text-[10px] text-[#8c827a] font-sans block -mt-0.5">
                Local Organic Flour & Café · Est. 2018
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="hidden md:flex items-center gap-1.5 text-[#6b625b]">
              <MapPin className="w-3.5 h-3.5 text-[#e87a5d]" />
              <span>482 Market St · Pick-up or Austin Metro Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-[#f4eee8] px-3 py-1.5 rounded-full font-medium text-[#2c2724]">
              <ShoppingBag className="w-3.5 h-3.5 text-[#e87a5d]" />
              <span>{Object.values(quantities).reduce((a, b) => a + b, 0)} platters</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#f9f3ec] to-[#fcfbf9] border-b border-[#ece7e1] py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e87a5d]/15 text-[#b94e32] text-xs font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>Corporate & Weekend Catering Configurator</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif text-[#2c2724] font-bold tracking-tight">
              Bespoke Pastries & Platters for Your Next Event.
            </h1>
            <p className="text-xs sm:text-sm text-[#6b625b] leading-relaxed">
              Order directly online with transparent pricing. Zero phone tag, upfront deposits, and real-time kitchen calendar sync.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#ece7e1] shadow-sm text-xs space-y-2 shrink-0">
            <div className="flex items-center gap-2 text-[#2e7d32] font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Kitchen Booking Status: Open</span>
            </div>
            <div className="text-[#8c827a] font-light">
              Current Lead Time: <strong className="text-[#2c2724]">48 Hours Minimum</strong>
            </div>
            <div className="text-[11px] text-[#6b625b] border-t border-[#ece7e1] pt-2 flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-[#e87a5d]" />
              <span>Questions? Call Bakery Desk: (512) 555-0194</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Order Builder Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 flex-grow w-full">
        {orderConfirmed ? (
          /* Order Confirmed Screen */
          <div className="max-w-xl mx-auto bg-white rounded-3xl border border-[#ece7e1] p-8 sm:p-10 shadow-sm text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#2e7d32]/10 text-[#2e7d32] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8c827a]">
                Order #SRB-9482 Confirmed
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#2c2724]">
                Catering Slot Reserved!
              </h2>
              <p className="text-xs sm:text-sm text-[#6b625b] leading-relaxed">
                Deposit of <strong>${deposit}.00</strong> authorized via Stripe. A calendar invite and prep itinerary have been dispatched to the head baker.
              </p>
            </div>

            {/* Simulated Live SMS Notification */}
            <div className="p-4 rounded-2xl bg-[#f4eee8] border border-[#ece7e1] text-left text-xs space-y-1.5 font-mono">
              <div className="text-[10px] text-[#8c827a] uppercase font-bold">
                📱 Automated Twilio SMS Dispatched:
              </div>
              <div className="text-[#2c2724] bg-white p-2.5 rounded-xl border border-[#ece7e1]">
                "SweetRise Bakery: Hi! Your catering order #SRB-9482 for {selectedDate} at {selectedTime} is locked. Track baking status here: srb.la/9482"
              </div>
            </div>

            <button
              onClick={resetOrder}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#e87a5d] hover:bg-[#d4684b] transition-all cursor-pointer shadow-sm"
            >
              Configure Another Order
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Platter Catalog (8 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#ece7e1]">
                <h2 className="text-lg font-serif font-bold text-[#2c2724]">
                  1. Select Event Platters
                </h2>
                <span className="text-xs text-[#8c827a]">Prices inclusive of serving platters</span>
              </div>

              <div className="space-y-4">
                {PLATTERS.map((item) => {
                  const qty = quantities[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className={`p-4 rounded-2xl border transition-all duration-200 bg-white flex flex-col sm:flex-row items-center gap-4 ${
                        qty > 0 ? 'border-[#e87a5d] shadow-sm' : 'border-[#ece7e1] hover:border-[#ded6cc]'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-28 h-24 object-cover rounded-xl shrink-0"
                      />

                      <div className="flex-grow space-y-1 text-center sm:text-left">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                          <span className="text-xs font-serif font-bold text-[#2c2724]">
                            {item.name}
                          </span>
                          {item.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[9px] font-sans px-2 py-0.5 rounded-full bg-[#f4eee8] text-[#8c827a] font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className="text-[11px] text-[#6b625b] line-clamp-2">
                          {item.desc}
                        </p>
                        <div className="text-xs font-semibold text-[#b94e32]">
                          ${item.price}.00 <span className="text-[10px] text-[#8c827a] font-light">· {item.serves}</span>
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 bg-[#f4eee8] p-1.5 rounded-full shrink-0">
                        <button
                          type="button"
                          onClick={() => handleQtyChange(item.id, -1)}
                          disabled={qty === 0}
                          className="w-7 h-7 rounded-full bg-white text-[#2c2724] disabled:opacity-30 hover:bg-[#ece7e1] flex items-center justify-center text-xs transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold font-mono text-[#2c2724]">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQtyChange(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-white text-[#2c2724] hover:bg-[#ece7e1] flex items-center justify-center text-xs transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dietary Requirements */}
              <div className="p-5 rounded-2xl bg-white border border-[#ece7e1] space-y-3">
                <h3 className="text-xs font-serif font-bold text-[#2c2724]">
                  Dietary Accommodations & Kitchen Prep
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Gluten-Sensitive Labeling', 'Dairy-Free Options', 'Nut-Free Kitchen Handling', 'Vegetarian Only'].map(
                    (opt) => {
                      const active = dietaryOptions.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleDietary(opt)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                            active
                              ? 'bg-[#e87a5d] text-white'
                              : 'bg-[#f4eee8] text-[#6b625b] hover:bg-[#ece7e1]'
                          }`}
                        >
                          {active && <CheckCircle2 className="w-3 h-3" />}
                          <span>{opt}</span>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* Right: Event Schedule & Order Summary Sticky Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border border-[#ece7e1] p-6 shadow-sm space-y-6 sticky top-20">
                <div className="space-y-1">
                  <h3 className="text-base font-serif font-bold text-[#2c2724]">
                    2. Event Details & Scheduling
                  </h3>
                  <p className="text-[11px] text-[#8c827a]">
                    Reserve your date directly on our kitchen baking queue.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-[#6b625b] flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#e87a5d]" />
                        <span>Delivery Date</span>
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#ece7e1] text-xs bg-[#fcfbf9] text-[#2c2724] font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-[#6b625b] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#e87a5d]" />
                        <span>Target Time</span>
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#ece7e1] text-xs bg-[#fcfbf9] text-[#2c2724] font-medium"
                      >
                        <option>08:00 AM (Breakfast)</option>
                        <option>09:30 AM (Morning Meeting)</option>
                        <option>11:45 AM (Lunch Break)</option>
                        <option>02:00 PM (Afternoon Tea)</option>
                      </select>
                    </div>
                  </div>

                  {/* Guest Count Slider */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-[#f9f3ec]">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#2c2724]">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#e87a5d]" />
                        <span>Estimated Headcount</span>
                      </span>
                      <span className="font-mono text-[#b94e32]">{guestCount} Guests</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full accent-[#e87a5d] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Price Summary Breakdown */}
                <div className="border-t border-[#ece7e1] pt-4 space-y-2 text-xs">
                  <div className="flex justify-between text-[#6b625b]">
                    <span>Platters Subtotal</span>
                    <span className="font-mono text-[#2c2724]">${subtotal}.00</span>
                  </div>
                  <div className="flex justify-between text-[#6b625b]">
                    <span>Local Tax (8.25%)</span>
                    <span className="font-mono text-[#2c2724]">${tax}.00</span>
                  </div>
                  <div className="flex justify-between text-[#6b625b]">
                    <span>Van Delivery & Setup</span>
                    <span className="font-mono text-[#2c2724]">${delivery}.00</span>
                  </div>
                  <div className="flex justify-between text-sm font-serif font-bold text-[#2c2724] pt-2 border-t border-[#ece7e1]">
                    <span>Estimated Total</span>
                    <span className="font-mono text-[#b94e32]">${total}.00</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-[#2e7d32] bg-[#2e7d32]/10 p-2 rounded-xl mt-2">
                    <span>50% Upfront Deposit Due</span>
                    <span className="font-mono">${deposit}.00</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={handleCheckout}
                  disabled={subtotal === 0 || isSubmitting}
                  className="w-full py-3 px-4 rounded-2xl text-xs font-semibold text-white bg-[#e87a5d] hover:bg-[#d4684b] disabled:opacity-40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
                >
                  {isSubmitting ? (
                    <span>Authorizing Stripe Deposit...</span>
                  ) : (
                    <>
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Lock In Date with ${deposit}.00 Deposit</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#8c827a] text-center font-light">
                  <ShieldCheck className="w-3 h-3 text-[#2e7d32]" />
                  <span>Stripe 256-Bit Encrypted · 48h Full Cancellation Refund</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Built by US Footer Signature */}
      <MockupBuiltByBanner projectCategory="growth-website" clientName="SweetRise Artisan Bakery" />
    </div>
  );
};
