import Image from "next/image";
import Link from "next/link";

const vehicles = [
    {
        title: "Cars",
        desc: "105,215 ads",
        vehicleSrc: "/vehicles.png",
        href: "/",
        vehicleAlt: "Cars"
    },
    {
        title: "Buses & Microbuses",
        desc: "6,375 ads",
        vehicleSrc: "/buses.png",
        href: "/",
        vehicleAlt: "Buses & Microbuses"
    },
    {
        title: "Heavy Equipments",
        desc: "5,215 ads",
        vehicleSrc: "/cranes.png",
        href: "/",
        vehicleAlt: "Heavy Equipments"
    },
    {
        title: "Motorbikes & Scooter",
        desc: "2,474 ads",
        vehicleSrc: "/scooter.png",
        href: "/",
        vehicleAlt: "Motorbikes & Scooter"
    },

    {
        title: "Trucks & Trailers",
        desc: "9,215 ads",
        vehicleSrc: "/trucks.webp",
        href: "/",
        vehicleAlt: "Trucks & Trailers"

    },
    {
        title: "Vehicle Parts & Accessories",
        desc: "1,454 ads",
        vehicleSrc: "/vehicle-parts.jpg",
        href: "/",
        vehicleAlt: "Vehicle Parts & Accessories"
    },
    {
        title: "Water Crafts and Boats",
        desc: "210 ads",
        vehicleSrc: "/boats.jpg",
        href: "/",
        vehicleAlt: "Water Crafts and Boats"
    },


]

type Props = {

}
export const FeaturesVehicles = ({ }: Props) => {
    return (
        <div
            className="flex flex-col items-start justify-start gap-y-4 w-full">
            {vehicles.map(({ title, href, desc, vehicleSrc, vehicleAlt }) => (
                <Link
                    href={href}
                    key={href}
                    className="flex flex-row items-start justify-start gap-x-4 z-50 hover:bg-neutral-200/50 w-full p-2">
                    <Image
                        alt={vehicleAlt}
                        height={40}
                        width={40}
                        src={vehicleSrc} />
                    <div className="flex flex-col items-start justify-start gap-y-1">
                        <p className="text-sm text-neutral-900">
                            {title}
                        </p>
                        <p className="text-xs text-neutral-500">
                            {desc}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}