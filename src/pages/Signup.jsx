import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button, Typography, } from "@material-tailwind/react";
import { validateName, validateEmail, validatePassword } from '../utils/validation';

const Signup = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [isTermsAgreed, setIsTermsAgreed] = useState(false);

    useEffect(() => {
        if (name || name === "") {
            setNameError(validateName(name));
        }

        if (email || email === "")
            setEmailError(validateEmail(email));

        if (password || password === "")
            setPasswordError(validatePassword(password));

    }, [name, email, password]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!nameError && !emailError && !passwordError) {
            const data = { name, email, password };
            alert('Signed Up');
        }
        return;
    };

    return (
        <>
            <img src="/assets/images/Background.jpg" className="absolute inset-0 z-0 h-full w-full object-cover" />
            <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
            <div className="container mx-auto p-4">
                <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                    <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                        <Typography variant="h3" color="white">
                            Sign Up
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input variant="standard" type="text" id="name" label="Name" size="lg"
                            error={nameError ? true : false}
                            onChange={(event) => { setName(event.target.value); }}
                        />
                        {nameError && <small className="text-red-500 text-sm font-medium">{nameError}</small>}
                        <Input variant="standard" type="email" label="Email" size="lg"
                            error={emailError ? true : false}
                            onChange={(event) => { setEmail(event.target.value); }}
                        />
                        {emailError && <small className="text-red-500 text-sm font-medium">{emailError}</small>}
                        <Input variant="standard" type="password" label="Password" size="lg"
                            error={passwordError ? true : false}
                            onChange={(event) => { setPassword(event.target.value); }}
                        />
                        {passwordError && <small className="text-red-500 text-sm font-medium">{passwordError}</small>
                        }
                        <div className="-ml-2.5">
                            <Checkbox label="I agree the Terms and Conditions" onClick={(event) => setIsTermsAgreed(!isTermsAgreed)} />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" type="submit" fullWidth onClick={handleSubmit} disabled={!isTermsAgreed}>
                            Sign Up
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Already have an account?
                            <Link to="/login">
                                <Typography as="span" variant="small" color="blue" className="ml-1 font-bold">
                                    Log in
                                </Typography>
                            </Link>
                        </Typography>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
};

export default Signup;