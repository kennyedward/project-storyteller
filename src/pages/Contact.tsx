
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ArrowRight, Mail, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bricolage text-4xl md:text-5xl font-semibold mb-8">Get in Touch</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="font-manrope text-lg text-neutral-700 mb-12">
                I'm currently available for freelance work and collaborations. 
                Feel free to reach out if you have any questions or would like to discuss a project.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bricolage text-sm font-medium mb-1">Email</h3>
                    <a href="mailto:hello@portfolio.com" className="font-manrope text-neutral-700 hover:text-black transition-colors">hello@portfolio.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bricolage text-sm font-medium mb-1">LinkedIn</h3>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="font-manrope text-neutral-700 hover:text-black transition-colors">linkedin.com/in/portfolio</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bricolage text-sm font-medium mb-1">Twitter</h3>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="font-manrope text-neutral-700 hover:text-black transition-colors">@portfolio</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-bricolage text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg font-manrope focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-bricolage text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg font-manrope focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-bricolage text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg font-manrope focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center font-manrope bg-black text-white py-3 px-8 rounded-full hover:bg-neutral-800 transition-colors group"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
