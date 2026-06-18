import React from 'react'

export default function AddressInfo({ formData, handleChange, errors }) {
    return (
        <div>
            <div>
                <h1>Address Info</h1>
            </div>

            <div>
                <div>
                    <label htmlFor="">City</label>
                    <input type="text" name='city' placeholder='Enter the City' value={formData.city} onChange={handleChange} />
                    {errors.city && (
                        <span>{errors.city}</span>
                    )}
                </div>

                <div>
                    <label htmlFor="">State</label>
                    <input type="text" name='state' placeholder='Enter the state' value={formData.state} onChange={handleChange} />
                    {errors.state && (
                        <span>{errors.state}</span>
                    )}
                </div>

                <div>
                    <label htmlFor="">Pincode</label>
                    <input type="text" name='pincode' placeholder='Enter the Pincode' value={formData.pincode} onChange={handleChange} />
                    {errors.pincode && (
                        <span>{errors.pincode}</span>
                    )}
                </div>
            </div>
        </div>
    )
}
