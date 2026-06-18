import { useEffect, useState } from 'react'
import PersonalInfo from '../components/PersonalInfo'
import AddressInfo from '../components/AddressInfo'
import ReviewForm from '../components/ReviewForm'
import Preferences from '../components/Preferences'


const initialData = {
    name: "",
    email: "",
    gender: "",
    skills: [],
    country: "",
    city: "",
    state: "",
    pincode: ""
}

export default function MultiStepForm() {
    const [formData, setFormData] = useState(initialData);
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const savedData = localStorage.getItem('multiform')

        if (savedData) {
            setFormData(JSON.parse(savedData))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('multiform', JSON.stringify(formData))
    }, [formData])



    const handlechange = (e) => {
        const { name, value, checked, type } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: checked ? [...prev[name], value] : [...prev[name].filter((item) => item !== value)]
            }));
        }
        else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    }

    const nextStep = () => {
        if (!validateStep()) return;
        setStep((prev) => prev + 1)
    }

    const prevStep = () => {
        setStep((prev) => prev - 1)
    }

    const handleSubmit = () => {
        console.log(formData)
        localStorage.removeItem("multiform")
        setFormData(initialData)
        setStep(1);
    }

    const validateStep = () => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.name.trim()) {
                newErrors.name = "Name is Required";
            }

            if (!formData.email.trim()) {
                newErrors.email = "email is Required";
            }
        }

        if (step == 2) {
            if (!formData.gender) {
                newErrors.gender = "Please select gender"
            }

            if (!formData.skills.length === 0) {
                newErrors.skills = "Please select skills"
            }
            if (!formData.country) {
                newErrors.country = "Please select country"
            }
        }

        if (step === 3) {
            if (!formData.city.trim()) {
                newErrors.city = "City is Required";
            }

            if (!formData.state.trim()) {
                newErrors.state = "state is Required";
            }

            if (!formData.pincode.trim()) {
                newErrors.pincode = "pincode is Required";
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }
    return (
        <div>

            {step == 1 && (
                <PersonalInfo
                    formData={formData}
                    handleChange={handlechange}
                    errors={errors}

                />
            )}

            {step == 2 && (
                <Preferences
                    formData={formData}
                    handleChange={handlechange}
                    errors={errors}
                />
            )}

            {step == 3 && (
                <AddressInfo
                    formData={formData}
                    handleChange={handlechange}
                    errors={errors}
                />

            )}

            {step == 4 && (
                <ReviewForm
                    formData={formData}
                    handleChange={handlechange}
                    errors={errors}
                />
            )}

            <div>

                {step > 1 && (
                    <button type='submit' onClick={prevStep}>Previous</button>
                )}

                {step < 4 ? (
                    <button type='submit' onClick={nextStep}>Next</button>
                ) :
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                }

            </div>
        </div>
    )
}
