export default function Footer() {
    return (
        <footer className="bg-gray-700 text-gray-200 py-12">
            <div className="mt-12 text-center">
                <h3 className="text-lg font-semibold mb-4">Sign Up For Our Newsletter</h3>
                <form className="flex justify-center mb-11">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2  text-white border-2"
                    />
                    <button className="bg-orange-600 hover:bg-orange-700 px-6 py-4  text-white font-semibold">
                        Subscribe
                    </button>
                </form>
            </div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <div>
                    <h3 className="text-xl font-semibold mb-4">Product Category</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Hair Care</a></li>
                        <li><a href="#" className="hover:text-white">Skin Care</a></li>
                        <li><a href="#" className="hover:text-white">Digestive Care</a></li>
                        <li><a href="#" className="hover:text-white">Immunity Boosters</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">FAQs</a></li>
                        <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                        <li><a href="#" className="hover:text-white">Return Policy</a></li>
                        <li><a href="#" className="hover:text-white">Track Order</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Know Us</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Our Philosophy</a></li>
                        <li><a href="#" className="hover:text-white">Sustainability</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm">Plot No-266/3328, Gangadhar Meher Marg<br />Patia, PO-KIIT, Bhubaneswar, Odisha 751024</p>
                    <p className="mt-2 text-sm">Email: <a href="mailto:namaste@vediherbals.com" className="hover:text-white">namaste@vediherbals.com</a></p>
                    <p className="mt-2 text-sm">Phone: +91-22-48931316</p>
                </div>
            </div>
            
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                © 2026, MultiForgex All Rights Reserved
            </div>
        </footer>

    );
}