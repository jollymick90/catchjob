import { SDString } from "../../../models/Generic";

export interface RDataPrivacyInputTextProps {
    id: string,
    value: SDString,
    label?: string,
    onChange?: (ev: any) => void
}

const RDataPrivacyInputText = (props: RDataPrivacyInputTextProps) => {

    const { id, value, label, onChange } = props;
    const classStyle = "flex border-gray-100 border-2 p-2";
    const classStyleInput = "border-gray-200 border-b-2";

    const onChangeInput = (e: any) => {

        const valueInput = e.target.value;
        const newValue = { ...value };
        newValue.value = valueInput;

        if (onChange)
            onChange(newValue);
    }

    const onChangeCheckbox = (e: any) => {

        const valueCheckbox = e.target.checked;
        const newValue = { ...value };
        newValue.hide = valueCheckbox;

        if (onChange)
            onChange(newValue);
    }

    return (
        <>
            <div className={classStyle}>
                <div className="">
                    {
                        label ?
                            <label>
                                {label}
                                <input
                                    className={classStyleInput}
                                    id={id}
                                    type="text"
                                    value={value.value}
                                    placeholder={label}
                                    onChange={onChangeInput}
                                />
                            </label>
                            :
                            <input
                                className={classStyleInput}
                                id={id}
                                type="text"
                                value={value.value}
                                onChange={onChangeInput}
                            />
                    }

                </div>
                <div className="ml-2">
                    <label>Invisibile</label>
                    <input
                        id={id}
                        className="ml-6"
                        type="checkbox"
                        onChange={onChangeCheckbox}
                    />
                </div>
            </div>
        </>
    )
}

export default RDataPrivacyInputText;