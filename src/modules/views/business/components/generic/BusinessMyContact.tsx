import { MyContact } from "../../../../../models/Generic";

export interface BusinessMyContactProps {
    data?: MyContact,
    children?: React.ReactNode | undefined
}
const BusinessMyContact = (props: BusinessMyContactProps) => {

    return (
        <>
            { props.children }
        </>
    )
}
export default BusinessMyContact;