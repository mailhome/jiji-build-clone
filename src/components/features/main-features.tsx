import { WidthContainer } from "../width-container";
import { FeaturesVehicles } from "./feature-vehicles";
import { ProductFeatures } from "./product-features";

type Props = {

}
export const MainFeatures = ({ }: Props) => {
    return (
        <div className="w-full hidden h-full overflow-visible 2xl:block pt-4">
            <WidthContainer>
                <div className="grid grid-cols-12 w-full py-2">
                    <div className="col-span-2 w-full bg-white p-2 shadow-md border-[1px] border-slate-200 ">
                        <div className="flex flex-col overflow-auto items-start justify-start gap-y-[1px] h-[80vh] overflow-y-scroll scroll-smooth scroll-px-1">
                            <ProductFeatures
                                imgAlt="Vehicles"
                                imgScr="/vehicles.png"
                                featureTitle="Vehicles"
                                adsTitle="288,471 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Property"
                                imgScr="/house.png"
                                featureTitle="Property"
                                adsTitle="95,531 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Phones & Tablets"
                                imgScr="/phones.png"
                                featureTitle="Phones & Tablets"
                                adsTitle="78,003 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Electronics"
                                imgScr="/electronics.png"
                                featureTitle="Electronic"
                                adsTitle="230,195 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Home, Appliances & Furniture"
                                imgScr="/furnitures.png"
                                featureTitle="Home, Appliances & Furniture"
                                adsTitle="509,268 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Health & Beauty"
                                imgScr="/perfumes.png"
                                featureTitle="Health & Beauty"
                                adsTitle="70,235 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Fashion"
                                imgScr="/fashion.png"
                                featureTitle="Fashion"
                                adsTitle="170,235 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Sports, Arts & Outdoors"
                                imgScr="/equipment.png"
                                featureTitle="Sports, Arts & Outdoors"
                                adsTitle="70,585 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Seeking Work CVs"
                                imgScr="/jobseeker.png"
                                featureTitle="Seeking Work CVs"
                                adsTitle="28,686 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Jobs"
                                imgScr="/job.png"
                                featureTitle="Jobs"
                                adsTitle="1,303 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Babies & Kids"
                                imgScr="/babies.png"
                                featureTitle="Babies & Kids"
                                adsTitle="28,303 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Pets"
                                imgScr="/animals.png"
                                featureTitle="Pets"
                                adsTitle="7,601 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Agriculture & Food"
                                imgScr="/agriculture.png"
                                featureTitle="Agriculture & Food"
                                adsTitle="37,601 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Commercial Equipment & Tools "
                                imgScr="/equipment.png"
                                featureTitle="Commercial Equipment & Tools"
                                adsTitle="37,601 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                            <ProductFeatures
                                imgAlt="Repair & Construction"
                                imgScr="/repair.png"
                                featureTitle="Repair & Construction"
                                adsTitle="80,345 ads"
                                featureContent={<FeaturesVehicles />}
                            />
                        </div>
                    </div>
                </div>
            </WidthContainer>
        </div>
    );
}