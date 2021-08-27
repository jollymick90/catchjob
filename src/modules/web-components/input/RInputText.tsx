export interface RInputTextProps {
    id: string,
    value: string,
    label?: string,
    onChange?: (ev: any) => void
}

const RInputText = (props: RInputTextProps) => {

    const { id, value, label, onChange } = props;
    const className = "flex m-2 border-gray-200 border-b-2";
    const classStyle = "border-gray-100 border-2";

    const inputT = <input
        className={className}
        id={id}
        type="text"
        value={value}
        placeholder={label}
        onChange={onChange}
    />

    const inputNoLabel = <input
        className={className}
        id={id}
        type="text"
        value={value}

        onChange={onChange}
    />

    return (
        <>
            <div className={classStyle}>
                {
                    label ?
                        <label>
                            {label}
                            {inputT}
                        </label>
                        :
                        inputNoLabel
                }

            </div>

        </>
    )
}

export default RInputText;