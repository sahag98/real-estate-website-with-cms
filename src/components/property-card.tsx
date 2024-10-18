import React from "react"
import Image from "next/image"

import PropertyCardImage from "./property-card-image"

const PropertyCard = async ({ property }: any) => {
  const fullAddress = `${property.location.address.line}, ${property.location.address.city}, ${property.location.address.state}`

  return (
    <div className="flex w-full flex-col justify-between gap-2 rounded-md border  p-5">
      {/* <p>{result.primary_photo?.href}</p> */}
      {/* <PropertyCardImage /> */}
      <Image
        src={property.location.street_view_url}
        width={1000}
        height={1000}
        className="aspect-square w-full"
        alt={property.location.address.line}
      />
      <h4 className="text-xl font-semibold">
        {property.location.address.line}
      </h4>
      <p>{`${property.location.address.city}, ${property.location.address.state}`}</p>
      {/* <p>{service.description}</p> */}
    </div>
  )
}

export default PropertyCard
