"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, ChefHat, Clock, Heart, Leaf, MessageCircle, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Vista"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Exceptional Dining Experience"
          description="Discover authentic flavors and elegant atmosphere at Bella Vista, where every meal is a celebration of culinary excellence"
          tag="Fine Dining"
          tagIcon={Star}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Table", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
          imageAlt="Elegant restaurant interior"
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="Founded in 2018, Bella Vista combines traditional recipes with modern culinary techniques to create an unforgettable dining experience"
          tag="Since 2018"
          tagIcon={Clock}
          bulletPoints={[
            {
              title: "Fresh Ingredients",
              description: "Locally sourced, seasonal ingredients prepared daily",
              icon: Leaf
            },
            {
              title: "Expert Chefs",
              description: "Award-winning culinary team with decades of experience",
              icon: Award
            },
            {
              title: "Elegant Atmosphere",
              description: "Sophisticated dining environment perfect for any occasion",
              icon: Heart
            }
          ]}
          imageSrc="https://images.pexels.com/photos/34400310/pexels-photo-34400310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
          imageAlt="Head chef preparing signature dish"
        />
      </div>
      
      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Featured Menu"
          description="Savor our most popular dishes, crafted with passion and the finest ingredients"
          tag="Chef's Selection"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              name: "Truffle Pasta Primavera",
              price: "$34",
              imageSrc: "https://images.pexels.com/photos/34382330/pexels-photo-34382330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Truffle pasta with seasonal vegetables",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Wagyu Beef Tenderloin",
              price: "$58",
              imageSrc: "https://images.pexels.com/photos/18015000/pexels-photo-18015000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Grilled wagyu beef with herbs",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Chocolate Soufflé",
              price: "$18",
              imageSrc: "https://images.pexels.com/photos/12872903/pexels-photo-12872903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Decadent chocolate soufflé",
              initialQuantity: 1
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Culinary Team"
          description="The passionate chefs and staff who make every visit extraordinary"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Chef Marco Rodriguez",
              role: "Executive Chef",
              imageSrc: "https://images.pexels.com/photos/1850625/pexels-photo-1850625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chef Marco Rodriguez portrait"
            },
            {
              id: "2",
              name: "Chef Sophia Chen",
              role: "Pastry Chef",
              imageSrc: "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chef Sophia Chen portrait"
            }
          ]}
        />
      </div>
      
      <div id="reviews" data-section="reviews">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Read reviews from diners who have experienced our exceptional cuisine and service"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahfoodie",
              testimonial: "Absolutely incredible dining experience! The truffle pasta was perfection and the service was impeccable.",
              imageSrc: "https://images.pexels.com/photos/4350101/pexels-photo-4350101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson dining"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mikeeats",
              testimonial: "Best restaurant in the city! The wagyu beef was cooked to perfection and the atmosphere is so romantic.",
              imageSrc: "https://images.pexels.com/photos/29251136/pexels-photo-29251136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen at dinner"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emilyreviews",
              testimonial: "Five stars! Every dish exceeded my expectations. The chocolate soufflé was the perfect ending to our meal.",
              imageSrc: "https://images.pexels.com/photos/27083015/pexels-photo-27083015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez dining experience"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@daviddines",
              testimonial: "Bella Vista sets the standard for fine dining. Exceptional food, outstanding service, perfect ambiance.",
              imageSrc: "https://images.pexels.com/photos/4695783/pexels-photo-4695783.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim restaurant visit"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table"
          description="Book your dining experience at Bella Vista. We look forward to serving you exceptional cuisine in our elegant atmosphere."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "date", type: "date", placeholder: "Preferred Date", required: true },
            { name: "guests", type: "number", placeholder: "Number of Guests", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or dietary restrictions...",
            rows: 4,
            required: false
          }}
          buttonText="Make Reservation"
          imageSrc="https://images.pexels.com/photos/221106/pexels-photo-221106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Bella Vista restaurant exterior"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Bella Vista"
          columns={[
            {
              items: [
                { label: "Menu", href: "menu" },
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "Reviews", href: "reviews" },
                { label: "Reservations", href: "contact" },
                { label: "Private Events", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Hours", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Catering", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}