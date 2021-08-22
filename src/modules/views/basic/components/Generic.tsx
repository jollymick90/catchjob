import { MyInfo } from "../../../../models/Generic";
import BasicAboutMe from "./generic/BasicAboutMe";
import BasicMyContact from "./generic/BasicMyContact";

import InfoData from "./generic/InfoData";

export interface GenericProp {
    myInfo: MyInfo
}

const Generic = ({ myInfo }: GenericProp) => {

    return (
        <>
            <div>
                <InfoData data={myInfo.name}/>
                <InfoData data={myInfo.whoiam}/>
                <InfoData data={myInfo.lastname}/>
                <InfoData data={myInfo.surname}/>
                
                <BasicMyContact data={myInfo.contact}></BasicMyContact>
                
                <BasicAboutMe data={myInfo.aboutMe}></BasicAboutMe>

            </div>
        </>
    )
}

export default Generic;
