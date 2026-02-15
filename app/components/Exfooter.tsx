export default function Exfooter() {
    return(
        <div className="bg-gradient-to-r from-blue-200 to-blue-300 text-gray-900 text-center p-11 m-11">
            <h1 className="text-5xl font-bold">Consult Our Health Care Department</h1>
            <p className="mt-11 text-lg">For personalized Ayurvedic advice and treatments, reach out to our expert health care team. We're here to guide you on your wellness journey.</p>
            <input type="tel" placeholder="Enter your phone no. ..." className="px-5 py-2 mt-11 border-green-500 focus:outline-none focus:ring-2"/>
            <button className="px-5 py-2 bg-amber-500 font-bold ml-5">Contact Us</button>
        </div>
    );
}