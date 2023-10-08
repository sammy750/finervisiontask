import React, { useState, ChangeEvent } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { RootContainer, FlexContainer, Input, Button, InputBox, Label } from './CommontStyle';
import 'font-awesome/css/font-awesome.min.css';

const Step1 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [error, setError] = useState("");

    function isValidEmail(emailAddress: string) {
        return /\S+@\S+\.\S+/.test(emailAddress);
    }

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError("");
        }
        setEmailAddress(event.target.value);
    }

    const handleStep1Next = () => {
        if (!firstName || !lastName || !emailAddress) {
            alert("Please fill in all the fields.");
            return;
        }
    }

    return (
        <RootContainer>
            <FlexContainer>
                <InputBox>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                    />
                </InputBox>
                <InputBox>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                    />
                </InputBox>
            </FlexContainer>
            <FlexContainer>
                <InputBox>
                    <Label htmlFor="emailAddress">Email Address</Label>
                    <Input
                        type="text"
                        name="emailAddress"
                        id="emailAddress"
                        value={emailAddress}
                        onChange={handleChangeEmail}
                    />
                    {error && <h2 style={{ color: 'red', fontSize: "15px" }}>{error}</h2>}
                </InputBox>
            </FlexContainer>
            <Button onClick={handleStep1Next}>Next <i className="fa fa-angle-right"></i> </Button>
        </RootContainer>
    );
};

export default Step1;
