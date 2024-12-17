import { FeatureWrapper } from "./feature-wrapper";
import { MainFeatures } from "./main-features";
import { PostContent } from "./post-content";



export const Features = () => {
    return (
        <div className="w-full h-full bg-slate-200">
            <div className="grid grid-cols-3 md:grid-cols-6 items-center justify-center 2xl:hidden bg-white ">
                <FeatureWrapper
                    imgAlt=""
                    imgSrc=""
                    className="text-red-700"
                    desc="Post Ad"
                    post_ad
                    post_content={<PostContent />} />

                <FeatureWrapper
                    imgAlt="vehicle"
                    imgSrc="/vehicles.png"
                    desc="Vehicles"
                    className="-mt-4"
                />
                <FeatureWrapper
                    imgAlt="house"
                    imgSrc="/house.png"
                    desc="Houses"
                    className="-mt-4"
                />


                <FeatureWrapper
                    imgAlt="phones and tablets"
                    imgSrc="/phones.png"
                    desc="Houses & Tablets"
                    className="-mt-4"
                />
                <FeatureWrapper
                    imgAlt="electronics"
                    imgSrc="/electronics.png"
                    desc="Electronics"
                    className="-mt-4"
                />
                <FeatureWrapper
                    imgAlt="furnitures"
                    imgSrc="/furnitures.png"
                    desc="Home, Appliances & Furniture"
                    className="-mt-4 px-4 text-center"
                />


                <FeatureWrapper
                    imgAlt="Health & Beauty"
                    imgSrc="/perfumes.png"
                    desc="Health & Beauty"
                    className="-mt-4"
                />
                <FeatureWrapper
                    imgAlt="Fashion"
                    imgSrc="/fashion.png"
                    desc="Fashion"
                    className="-mt-4"
                />
                <FeatureWrapper
                    imgAlt="Sports, Arts & Outdoors"
                    imgSrc="/equipment.png"
                    desc="Sports, Arts & Outdoors"
                    className="-mt-4 px-4 text-center"
                />


                <FeatureWrapper
                    imgAlt="Seeking Work CVs"
                    imgSrc="/jobseeker.png"
                    desc="Seeking Work CVs"
                    className=""
                />
                <FeatureWrapper
                    imgAlt="Services"
                    imgSrc="/services.png"
                    desc="Services"
                    className="-mt-4"
                />
                <FeatureWrapper
                    imgAlt="Job"
                    imgSrc="/job.png"
                    desc="Job"
                    className="-mt-4 px-4 align-middle"
                />
                <FeatureWrapper
                    imgAlt="Babies & Kids"
                    imgSrc="/babies.png"
                    desc="Babies & Kids"
                    className=""
                />
                <FeatureWrapper
                    imgAlt="Pets"
                    imgSrc="/animals.png"
                    desc="Pets"
                    className=""
                />
                <FeatureWrapper
                    imgAlt="Agriculture & Food"
                    imgSrc="/agriculture.png"
                    desc="Agriculture & Food"
                    className="mt-2"
                />

                <FeatureWrapper
                    imgAlt="Commercial"
                    imgSrc="/equipment.png"
                    desc="Commercial"
                    className=""
                />
                <FeatureWrapper
                    imgAlt="Repair & Construction"
                    imgSrc="/repair.png"
                    desc="Repair & Construction"
                    className="mt-2 px-10 text-center align-middle"
                />

            </div>
            <MainFeatures />
        </div>
    );
}