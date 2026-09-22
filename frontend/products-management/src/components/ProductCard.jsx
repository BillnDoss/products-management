//                      prop
function ProductCard({ product }) {
    console.log(product);
    // destructuring
    const { name, description, price, category, imageUrl } = product;

    return (
        // Tailwind CSS
        <div className="flex flex-col overflow-hidden bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-sm">
            {/* Visual Placeholder / Category Badge */}
            <div className="relative bg-slate-50 h-48 flex items-center justify-center p-6 border-b border-slate-50">
                <span className="absolute top-4 left-4 bg-slate-900/5 backdrop-blur-md text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">{category}</span>
                {/* Simple placeholder icon style using the first letter */}
                <div className=" rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl font-bold shadow-sm">
                    <img src={imageUrl} alt="Product Image" />
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-slate-900 text-lg leading-snug line-clamp-1">{name}</h3>
                    <span className="font-bold text-indigo-600 text-lg whitespace-nowrap">${price.toFixed(2)}</span>
                </div>

                <p className="text-sm text-slate-500 line-clamp-2 mb-5 flex-1">{description}</p>

                {/* Action Button */}
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
