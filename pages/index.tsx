// pages/index.tsx
import { useState, useEffect } from "react";
import Head from "next/head";
import PropertyCard from "@/components/PropertyCard";
import { PropertyProps } from "@/interfaces";

const HERO_BACKGROUND = "/images/hero-bg.jpg";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/properties');
        if (!res.ok) throw new Error("Failed to fetch properties");
        const data = await res.json();
        setProperties(data);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <>
      <Head>
        <title>Home | Property Listings</title>
      </Head>
      <div className="bg-[#F7F7F7] min-h-screen">
        <section
          className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-white px-4 text-center"
          style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
        >
          <div className="absolute inset-0 bg-[#FF5A5F] bg-opacity-60" />
          <div className="relative z-10 p-6 md:p-10 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg" style={{ color: '#fff' }}>
              Find your favorite place here!
            </h1>
            <p className="text-xl md:text-2xl font-medium drop-shadow" style={{ color: '#fff' }}>
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </section>
        <section className="px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#484848] font-sans">
            Available Properties
          </h2>
          {loading ? (
            <div className="text-center text-gray-500">Loading properties...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div className="w-full px-4 flex flex-wrap gap-6 justify-center">
              {properties.map((property) => (
                <div key={`${property.name}-${property.address.city}`} className="w-80">
                  <PropertyCard
                    property={property}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
