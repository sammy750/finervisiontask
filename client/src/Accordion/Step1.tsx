import React, { useState, ChangeEvent } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { RootContainer, FlexContainer, Input, Button, InputBox, Label } from './CommontStyle';
import 'font-awesome/css/font-awesome.min.css';
import { StepProps, FieldNames } from './types';
import getInputProps from './helpers';

const Step1 = ({ formData, updateFormData, setCurrentAccordion }: StepProps) => {
    const { firstName, surName, email } = formData;
    const [error, setError] = useState("");

    function isValidEmail(emailAddress: string) {
        return /\S+@\S+\.\S+/.test(emailAddress);
    }

    const callNext = () => {
        if (email && !isValidEmail(email)) {
            setError('Email is invalid');
            return;
        }

        if (!formData || !surName || !email) {
            alert("Please fill in all the fields.");
            return;
        }
        setCurrentAccordion(1);
    }

    return (
        <RootContainer>
            <FlexContainer>
                <InputBox>
                    <Label htmlFor={FieldNames.FIRST_NAME}>First Name</Label>
                    <Input
                        {...getInputProps(
                            FieldNames.FIRST_NAME,
                            formData[FieldNames.FIRST_NAME],
                            updateFormData
                        )}
                    />
                </InputBox>
                <InputBox>
                    <Label htmlFor={FieldNames.SURNAME}>Last Name</Label>
                    <Input
                        {...getInputProps(
                            FieldNames.SURNAME,
                            formData[FieldNames.SURNAME],
                            updateFormData
                        )}
                    />
                </InputBox>
            </FlexContainer>
            <FlexContainer>
                <InputBox>
                    <Label htmlFor={FieldNames.EMAIL}>Email Address</Label>
                    <Input
                        {...getInputProps(
                            FieldNames.EMAIL,
                            formData[FieldNames.EMAIL],
                            updateFormData
                        )}
                    />
                    {error && <h2 style={{ color: 'red', fontSize: "15px" }}>{error}</h2>}
                </InputBox>
            </FlexContainer>
            <Button onClick={callNext}>Next <i className="fa fa-angle-right"></i> </Button>
        </RootContainer>
    );
};

export default Step1;
