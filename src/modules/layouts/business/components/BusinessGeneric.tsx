import { MyInfo } from "../../../../models/Generic";
import BusinessAboutMe from "./generic/BusinessAboutMe";
import BusinessMyContact from "./generic/BusinessMyContact";

import BusinessInfoData from "./generic/BusinessInfoData";

export interface BusinessGenericProp {
    myInfo: MyInfo
}

const BusinessGeneric = ({ myInfo }: BusinessGenericProp) => {

    return (
        <>
            <div>
                <BusinessInfoData data={myInfo.name}/>
                <BusinessInfoData data={myInfo.whoiam}/>
                <BusinessInfoData data={myInfo.lastname}/>
                <BusinessInfoData data={myInfo.surname}/>
                
                <BusinessMyContact data={myInfo.contact}></BusinessMyContact>
                
                <BusinessAboutMe data={myInfo.aboutMe}></BusinessAboutMe>

            </div>
        </>
    )
}

export default BusinessGeneric;
