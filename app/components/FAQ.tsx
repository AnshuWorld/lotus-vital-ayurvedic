export default function FAQ() {
    return (
        <section className="max-w-3xl mx-auto p-6 my-10 bg-white/70">
            <h2 className="text-5xl text-center font-extrabold mb-5">FAQs</h2>
            <details className="mb-4 border-b border-gray-800">
                <summary className="py-3 text-lg font-semibold text-gray-800 hover:text-green-700">
                    What makes our Ayurvedic products different from regular ones?
                </summary>
                <p className="pb-4 pl-3 text-black">
                    Our products are rooted in authentic Ayurvedic wisdom. We carefully select natural herbs, oils, and minerals to create formulas that promote balance and wellness, without relying on synthetic chemicals.
                </p>
            </details>
            <details className="mb-4 border-b border-gray-800">
                <summary className="py-3 text-lg font-semibold text-gray-800 hover:text-green-700">
                    Are our Ayurvedic products safe to use daily?
                </summary>
                <p className="pb-4 pl-3 text-black">
                    Yes, our products are designed for regular use. Since they are plant-based and natural, they are generally safe. We recommend following the usage instructions provided, and consulting a professional if you have specific health concerns.
                </p>
            </details>
            <details className="mb-4 border-b border-gray-800">
                <summary className="py-3 text-lg font-semibold text-gray-800 hover:text-green-700">
                    Do our Ayurvedic products have side effects?
                </summary>
                <p className="pb-4 pl-3 text-black">
                    When used as directed, side effects are rare. Ayurveda emphasizes harmony with the body. However, everyone is unique, so we advise checking ingredients if you have known allergies.
                </p>
            </details>
            <details className="mb-4 border-b border-gray-800">
                <summary className="py-3 text-lg font-semibold text-gray-800 hover:text-green-700">
                    How long does it take to see results with our products?
                </summary>
                <p className="pb-4 pl-3 text-black">
                    Ayurveda focuses on long-term wellness rather than instant fixes. Some customers notice improvements within days or weeks, but consistent use brings the most lasting benefits.
                </p>
            </details>
            <details className="mb-4 border-b border-gray-800">
                <summary className="py-3 text-lg font-semibold text-gray-800 hover:text-green-700">
                    Are our Ayurvedic products suitable for all ages?
                </summary>
                <p className="pb-4 pl-3 text-black">
                    Most of our products are safe for adults and children, but dosage and application may vary. Please check the label for age-specific recommendations.
                </p>
            </details>
        </section>
    );
}
