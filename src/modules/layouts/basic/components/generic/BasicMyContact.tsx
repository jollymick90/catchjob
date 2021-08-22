import { MyContact } from "../../../../../models/Generic";

export interface BasicMyContactProps {
    data?: MyContact,
    children?: React.ReactNode | undefined
}
const BasicMyContact = (props: BasicMyContactProps) => {

    return (
        <>
            { props.children }
        </>
    )
}
export default BasicMyContact;