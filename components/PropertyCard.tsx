// components/PropertyCard.tsx
import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces";
import Link from "next/link";

interface CardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<CardProps> = ({ property }) => {
  return (
    <Link href={`/property/${encodeURIComponent(property.name)}`} passHref legacyBehavior>
      <a className="w-full">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-200 flex flex-col h-full w-full">
          <div className="relative w-full aspect-[4/3] bg-gray-200">
            <Image
              src={property.image}
              alt={`Image of ${property.name}`}
              fill
              className="object-cover w-full h-full rounded-t-2xl"
              priority
              onError={() => {
                console.error('Image failed to load:', property.image);
                console.error('Property:', property.name);
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', property.name);
              }}
            />
            <span className="absolute top-3 left-3 bg-[#00A699] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
              ⭐ {property.rating}
            </span>
          </div>
          <div className="p-3 flex-1 flex flex-col gap-1">
            <h3 className="text-base font-bold truncate text-[#484848] font-sans mb-1">{property.name}</h3>
            <p className="text-xs text-gray-500 truncate mb-1">
              {property.address.city}, {property.address.country}
            </p>
            <p className="text-lg font-bold text-[#FF5A5F] mb-1">
              ${property.price.toLocaleString()} <span className="text-xs font-normal text-gray-500">/ night</span>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PropertyCard;
