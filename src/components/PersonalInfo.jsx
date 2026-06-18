import React from 'react'

export default function PersonalInfo({formData , handleChange, errors}) {
  return (
    <div className='personal-container'>

        <div>
            <h1>Personal Information</h1>
        </div>

        <div>
            <label htmlFor="Name">Name</label>
            <input type="text" label='name' name='name' value={formData.name} onChange={handleChange}/>
            {errors.name && (
                <span>{errors.name}</span>
            )}
        </div>

        <div>
            <label htmlFor="Name">Email</label>
            <input type="email" label='email' name='email' value={formData.email} onChange={handleChange}/>
             {errors.email && (
                <span>{errors.email}</span>
            )}
        </div>


    </div>
  )
}
