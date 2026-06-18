import React from 'react'

export default function ReviewForm({formData}) {
  return (
    <div>
        <h1>Review Form</h1>

        <p><strong>name:</strong>{formData.name}</p>

        <p><strong>email:</strong>{formData.email}</p>

        <p><strong>city:</strong>{formData.city}</p>

        <p><strong>state:</strong>{formData.state}</p>

        <p><strong>Pincode:</strong>{formData.pincode}</p>

    </div>

  )
}
