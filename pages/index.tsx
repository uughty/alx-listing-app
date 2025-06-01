import Layout from "@/components/layout/Layout";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="text-center py-16 bg-cover bg-center bg-[url('https://example.com/image1.jpg')] text-white">
        <h2 className="text-4xl font-bold mb-2">Find Your Dream Property</h2>
        <p className="text-lg">Luxury listings in exotic locations</p>
      </section>

      {/* Filters */}
      <section className="my-6 flex flex-wrap gap-2 justify-center">
        {["Luxury Villa", "Beachfront", "City View", "Mountain View", "Pet Friendly"].map((filter) => (
          <button
            key={filter}
            className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded-full"
          >
            {filter}
          </button>
        ))}
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={index} className="border rounded-lg shadow-md overflow-hidden">
            <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{property.name}</h3>
              <p className="text-gray-500 text-sm">
                {property.address.city}, {property.address.country}
              </p>
              <p className="mt-2 text-sm">
                {property.category.join(", ")}
              </p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-lg font-bold">${property.price}</span>
                {property.discount && (
                  <span className="text-red-500 text-sm">-{property.discount}%</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
