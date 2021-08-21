import { MyInfo } from "../../../models/Generic";

export interface GenericProp {
    myInfo: MyInfo
}

const Generic = ({ myInfo }: GenericProp) => {

    return (
        <>
            <div>
                <div className="border-2 border-gray-200 ">
                    {
                        myInfo.name
                    }
                </div>

            </div>
        </>
    )
}

export default Generic;
