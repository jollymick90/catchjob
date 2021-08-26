export interface RInputTextProps {
    id: string,
    value: string,
    label?: string,
    onChange?: (ev: any) => void
}

const RInputText = (props: RInputTextProps) => {

    const { id, value, label, onChange } = props;

    return (
        <>
            <div className="p-2 ">
                {
                    label ?
                        <label>
                            {label}
                            <input
                                className="border-gray-200 border-2"
                                id={id}
                                type="text"
                                value={value}
                                placeholder={label}
                                onChange={onChange}
                            />
                        </label>
                        :
                        <input
                            className="border-gray-200 border-2"
                            id={id}
                            type="text"
                            value={value}

                            onChange={onChange}
                        />
                }

            </div>

        </>
    )
}

export default RInputText;