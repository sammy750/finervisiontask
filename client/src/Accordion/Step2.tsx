import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import styled from "styled-components";
import {
    RootContainer,
    FlexContainer,
    Input,
    Button,
    InputBox,
    Label,
} from "./CommontStyle";
import { StepProps, FieldNames } from "./types";
import getInputProps from "./helpers";

const Select = styled.select`
  padding: 10px;
  border-radius: 10px;
  border: none;
  width: 250px;
  transform: translateY(5px);
  background: linear-gradient(#e3eaea, #eaeaeb);
  box-shadow: inset 0 0 5px;
`;

const Step2 = ({ formData, updateFormData, setCurrentAccordion }: StepProps) => {
    const { dobDay, dobMonth, dobYear, gender, phoneNumber } = formData;
    const [error, setError] = useState("");

    function isValidPhone(phonenumber: string) {
        return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
            phonenumber
        );
    }

    const callNext = () => {
        // if (!isValidPhone(phoneNumber)) {
        //     setError('Please Enter Valid Phone Number');
        //     return;
        // }

        if (!dobDay || !dobMonth || !dobYear || !gender || !phoneNumber) {
            alert("Please fill in all the fields.");
            return;
        }
        setCurrentAccordion(2)
    }


    return (
        <RootContainer>
            <FlexContainer>
                <InputBox>
                    <Label htmlFor={FieldNames.PHONE_NUMBER}>Telephone Number</Label>
                    <Input
                        {...getInputProps(
                            FieldNames.PHONE_NUMBER,
                            formData[FieldNames.PHONE_NUMBER],
                            updateFormData
                        )}
                    />
                    {error && <h2 style={{ color: "red", fontSize: "15px" }}>{error}</h2>}
                </InputBox>
                <InputBox>
                    <Label htmlFor={FieldNames.GENDER}>Select Gender</Label>
                    <Select
                        id={FieldNames.GENDER}
                        value={formData[FieldNames.GENDER]}
                        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                            updateFormData(FieldNames.GENDER, event.target.value)
                        }
                        placeholder="Select Gender"
                    >
                        <option value="" disabled hidden>
                            Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </Select>
                </InputBox>
            </FlexContainer>
            <FlexContainer>
                <InputBox>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Input
                            {...getInputProps(
                                FieldNames.DOB_MONTH,
                                formData[FieldNames.DOB_MONTH],
                                updateFormData
                            )}
                            placeholder="MM"
                            maxLength={2}
                            style={{ width: "44px", margin: "2px" }}
                        />
                        <Input
                            {...getInputProps(
                                FieldNames.DOB_DAY,
                                formData[FieldNames.DOB_DAY],
                                updateFormData
                            )}
                            placeholder="DD"
                            maxLength={2}
                            style={{ width: "44px", margin: "2px" }}
                        />
                        <Input
                            {...getInputProps(
                                FieldNames.DOB_YEAR,
                                formData[FieldNames.DOB_YEAR],
                                updateFormData
                            )}
                            placeholder="YYYY"
                            maxLength={4}
                            style={{ width: "88px", margin: "2px" }}
                        />
                    </div>
                </InputBox>
            </FlexContainer>
            <Button onClick={callNext}>
                Next <i className="fa fa-angle-right"></i>
            </Button>
        </RootContainer>
    );
};

export default Step2;
