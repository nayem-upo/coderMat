"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceFeature {
  id: number;
  title: string;
  description: string;
}

interface Service {
  id: number;
  title: string;
  service_details_description: string;
  image_url: string;
  service_features: ServiceFeature[];
  short_description: string;
}

const ServiceDetails = ({ params }: { params: any }) => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/servicesdata.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const service = services.find((data) => data.id === Number(params.id));

  return (
    <main className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] min-h-screen pt-20 md:pt-32 text-white px-5">
      <h1 className="text-center font-bold text-3xl md:text-4xl">
        Service Details
      </h1>
      <h3 className="text-center md:text-xl font-semibold pt-2 md:pt-4">
        {service?.title || "Service not found"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 pt-10 md:pt-20 max-w-6xl mx-auto">
        <div>
          {/* Service Details Section */}
          <div>
            <p className="text-[#d735ff] uppercase font-bold pb-3">
              Your vision our expertise
            </p>
            <p className="md:text-xl">{service?.short_description}</p>
          </div>
          {/* Service Features */}
          {service?.service_features && service.service_features.length > 0 && (
            <div className="pt-10 max-w-6xl mx-auto">
              <p className="text-[#d735ff] uppercase font-bold pb-3">
                Service Details:
              </p>
              <ul className="space-y-6 md:text-md">
                {service.service_features.map((feature) => (
                  <li key={feature.id} className="">
                    <p className="md:text-lg">
                      <span className="font-semibold">
                        {feature.id}. {feature.title}:
                      </span>{" "}
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Service Image */}
        <div>
          <Image
            src={service?.image_url || "/default-image.jpg"}
            alt={`${service?.title}`}
            className="w-full h-auto"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </div>
      </div>
      <p className="max-w-6xl md:text-xl mx-auto py-10">
        {service?.service_details_description}
      </p>
    </main>
  );
};

export default ServiceDetails;
