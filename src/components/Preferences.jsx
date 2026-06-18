import React from 'react'

export default function Preferences({ formData, handleChange, errors }) {
    return (
        <div>
            <div>
                <h1>Preferences</h1>
            </div>
            <div>
                <label htmlFor="">Gender</label>
                <div>
                    <label htmlFor="">Male</label>
                    <input type="radio" name="gender" value="male" checked={formData?.gender === 'male'} onChange={handleChange} />

                    <label htmlFor="">Female</label>
                    <input type="radio" name="gender" value="female" checked={formData?.gender === 'female'} onChange={handleChange} />

                    {errors?.gender && (
                        <span>{errors?.gender}</span>
                    )}

                </div>
            </div>
            <div>
                <label htmlFor="">Skills</label>
                <div>
                    <label htmlFor="">React</label>
                    <input type="checkbox" name="skills" value="React" checked={formData?.skills.includes("React")} onChange={handleChange} />

                    <label htmlFor="">Node</label>
                    <input type="checkbox" name="skills" value="Node" checked={formData?.skills.includes("Node")} onChange={handleChange} />
                    {errors?.skills && (
                        <span>{errors?.skills}</span>
                    )}

                </div>
            </div>

            <div>
                <label htmlFor=""> Country</label>

                <select name='country' value={formData?.country} onChange={handleChange}>
                    <option value="">Select Country</option>
                    <option value="india">india</option>
                    <option value="china">china</option>
                    <option value="Malasia">Malasia</option>
                </select>
                {errors?.country && (
                    <span>{errors?.country}</span>
                )}
            </div>
        </div>
    )
}
