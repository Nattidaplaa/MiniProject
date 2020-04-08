import React from 'react'

const InputFrom = () => {
    return (
        <div>
            <h2>Add Member</h2>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>
                        <input className='inpt' type="text" onChange={(e) => onChange({ ...data, name: e.target.value })} />
                    </td>
                </tr>
            </tbody>
        </div>
    )
}

export default InputFrom