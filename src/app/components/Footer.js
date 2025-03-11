import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="bg-[#4d4bd2] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
        <Image src="/logos/logoipsum-344.svg" alt="Logo" width={120} height={40} />
        <p className="mt-4 text-sm">
        Empowering businesses with cutting-edge technology solutions.
        </p>
        </div>

        {/* Navigation Links */}
        <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/about" className="hover:underline">About Us</Link></li>
        <li><Link href="/services" className="hover:underline">Services</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        </div>

        {/* Contact Details */}
        <div>
        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
        <p>Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
        <p>Phone: <a href="tel:+123456789" className="hover:underline">+1 234 567 89</a></p>
        <p>Address: 123 Tech Street, Innovation City</p>
        </div>

        {/* Newsletter Subscription */}
        <div>
        <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
        <form className="flex space-x-2">
        <Input type="email" placeholder="Enter your email" className="text-black" />
        <Button variant="secondary">Subscribe</Button>
        </form>
        </div>
        </div>

        {/* Social & Legal */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between px-6">
        {/* Social Icons */}
        <div className="flex space-x-4">
        <Link href="https://facebook.com" aria-label="Facebook"><FaFacebook size={24} /></Link>
        <Link href="https://twitter.com" aria-label="Twitter"><FaTwitter size={24} /></Link>
        <Link href="https://instagram.com" aria-label="Instagram"><FaInstagram size={24} /></Link>
        <Link href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin size={24} /></Link>
        </div>

        {/* Copyright & Legal Links */}
        <p className="text-sm mt-4 md:mt-0">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        <Link href="/privacy" className="ml-2 hover:underline">Privacy Policy</Link> |
        <Link href="/terms" className="ml-2 hover:underline">Terms of Service</Link>
        </p>
        </div>
        </footer>
    );
};

export default Footer;
