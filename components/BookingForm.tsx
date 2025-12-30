
import React, { useState } from 'react';
import { BookingFormData } from '../types';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Residential',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const WHATSAPP_NUMBER = "2349037847206";
    const text = `*New Interior Design Booking*
---
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.serviceType}
*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
  };

  const inputStyles = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-[#ffebd7] transition-colors placeholder:text-gray-600 text-gray-200";

  return (
    <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-[2.5rem] space-y-6 shadow-2xl relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-500 ml-1 uppercase tracking-wider">Full Name</label>
          <input 
            type="text" 
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe" 
            className={inputStyles}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-500 ml-1 uppercase tracking-wider">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+234 ..." 
            className={inputStyles}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-500 ml-1 uppercase tracking-wider">Email Address</label>
          <input 
            type="email" 
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="hello@example.com" 
            className={inputStyles}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-500 ml-1 uppercase tracking-wider">Project Type</label>
          <select 
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={inputStyles}
          >
            <option className="bg-neutral-900" value="Residential">Residential Design</option>
            <option className="bg-neutral-900" value="Commercial">Commercial/Office</option>
            <option className="bg-neutral-900" value="Renovation">Kitchen/Bath Renovation</option>
            <option className="bg-neutral-900" value="Styling">Interior Styling</option>
            <option className="bg-neutral-900" value="Others">Others</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-500 ml-1 uppercase tracking-wider">Message</label>
        <textarea 
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your dream space..." 
          className={inputStyles}
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full bg-[#ffddb2] text-black font-bold py-4 rounded-xl hover:bg-[#ffddb2]/90 transition-all flex items-center justify-center gap-2 text-lg uppercase tracking-widest shadow-lg shadow-black/20"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Send Booking Request
      </button>
    </form>
  );
};

export default BookingForm;
