import amihan from '../assets/Amihan Bedside Table.jpg';
import tala from '../assets/Tala Headboard.jpg';
import luntian from '../assets/Luntian Bed Frame.jpg';
import hiraya from '../assets/Hiraya Dining Table.jpg';
import sinag from '../assets/Sinag Dining Chair.jpg';
import diwa from '../assets/Center_Table.webp';
import lakbay from '../assets/Lakbay Lounge Chair.jpg';
import bahandi from '../assets/Bahandi Cabinet.jpg';
import haraya from '../assets/Haraya Office Desk.jpg';
import mutya from '../assets/Mutya Accent Chair.jpg';
import habagat from '../assets/Habagat Patio Chair.jpg';
import dalisay from '../assets/Dalisay Outdoor Table.jpg';

export const products = [
  { id: 1, name: 'Amihan Bedside Table', category: 'Bedroom', price: 7850, image: amihan, shortDescription: 'A compact bedside piece with warm wood grain.', description: 'A refined bedside table inspired by quiet tropical evenings, crafted for practical storage and understated warmth.', stock: 8, dimensions: '50 × 42 × 58 cm', material: 'Solid acacia wood', finish: 'Natural matte oil' },
  { id: 2, name: 'Tala Headboard', category: 'Bedroom', price: 14900, image: tala, shortDescription: 'Sculptural slatted headboard with a calm profile.', description: 'A statement headboard with rhythmic timber slats that brings handcrafted character to modern bedrooms.', stock: 5, dimensions: '165 × 6 × 120 cm', material: 'Mahogany and rattan', finish: 'Warm walnut' },
  { id: 3, name: 'Luntian Bed Frame', category: 'Bedroom', price: 32900, image: luntian, shortDescription: 'Low-profile bed grounded in natural materials.', description: 'A generous solid-wood bed frame with clean joinery and a low silhouette designed for restful contemporary interiors.', stock: 4, dimensions: '190 × 210 × 95 cm', material: 'Kiln-dried mahogany', finish: 'Smoked oak' },
  { id: 4, name: 'Hiraya Dining Table', category: 'Dining', price: 38900, image: hiraya, shortDescription: 'A substantial gathering table with softened edges.', description: 'Designed for long meals and shared stories, Hiraya balances a substantial timber top with an architectural base.', stock: 3, dimensions: '200 × 95 × 76 cm', material: 'Solid acacia wood', finish: 'Natural satin' },
  { id: 5, name: 'Sinag Dining Chair', category: 'Dining', price: 6950, image: sinag, shortDescription: 'Lightweight dining chair with woven detail.', description: 'A comfortable dining chair pairing a shaped timber frame with handwoven rattan for breathable everyday seating.', stock: 14, dimensions: '48 × 54 × 82 cm', material: 'Ash wood and rattan', finish: 'Honey natural' },
  { id: 6, name: 'Diwa Coffee Table', category: 'Living Room', price: 12400, image: diwa, shortDescription: 'Quiet geometry for the center of the living room.', description: 'Diwa uses simple proportions and expressive grain to create an elegant anchor for relaxed living spaces.', stock: 7, dimensions: '110 × 60 × 38 cm', material: 'Solid acacia wood', finish: 'Dark espresso' },
  { id: 7, name: 'Lakbay Lounge Chair', category: 'Living Room', price: 18750, image: lakbay, shortDescription: 'Deep lounge comfort with handcrafted character.', description: 'A relaxed lounge chair with a sculpted wood frame and tailored neutral upholstery for reading and conversation.', stock: 6, dimensions: '72 × 82 × 78 cm', material: 'Mahogany and linen blend', finish: 'Forest stain' },
  { id: 8, name: 'Bahandi Cabinet', category: 'Living Room', price: 27400, image: bahandi, shortDescription: 'Storage with woven doors and refined brass details.', description: 'Bahandi conceals generous storage behind woven fronts, combining traditional texture with a clean modern case.', stock: 4, dimensions: '140 × 45 × 82 cm', material: 'Acacia, rattan, brass', finish: 'Natural oak' },
  { id: 9, name: 'Haraya Office Desk', category: 'Office', price: 21900, image: haraya, shortDescription: 'A focused work desk with discreet cable storage.', description: 'A composed workspace with a broad timber surface, slim drawers, and integrated cable management.', stock: 5, dimensions: '150 × 70 × 75 cm', material: 'Ash veneer and solid ash', finish: 'Light natural' },
  { id: 10, name: 'Mutya Accent Chair', category: 'Living Room', price: 15900, image: mutya, shortDescription: 'An elegant accent chair with a tailored seat.', description: 'Mutya brings a softly curved silhouette and handcrafted frame to bedrooms, lounges, and reading corners.', stock: 9, dimensions: '66 × 70 × 80 cm', material: 'Solid ash and boucle', finish: 'Deep green' },
  { id: 11, name: 'Habagat Patio Chair', category: 'Outdoor', price: 9800, image: habagat, shortDescription: 'Airy outdoor seating made for covered patios.', description: 'A weather-conscious chair with open slats and generous proportions for calm mornings outdoors.', stock: 10, dimensions: '60 × 64 × 80 cm', material: 'Treated teak', finish: 'Outdoor natural oil' },
  { id: 12, name: 'Dalisay Outdoor Table', category: 'Outdoor', price: 24500, image: dalisay, shortDescription: 'A clean teak table for alfresco gatherings.', description: 'Dalisay offers a durable slatted top and restrained frame, designed for covered terraces and garden dining.', stock: 5, dimensions: '180 × 90 × 75 cm', material: 'Treated teak', finish: 'Outdoor natural oil' },
];

export const categories = ['All', 'Living Room', 'Dining', 'Bedroom', 'Office', 'Outdoor'];
