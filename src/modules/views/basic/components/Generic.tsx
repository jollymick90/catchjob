import { MyInfo } from "../../../../models/Generic";
import WrapPrivacyData from "../../../web-components/privacy/WrapPrivacyData";
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
                

            </div>
        </>
    )
}

export default Generic;
