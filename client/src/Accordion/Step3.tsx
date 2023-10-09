import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import styled from "styled-components";
import {
    RootContainer,
    FlexContainer,
    Button,
    InputBox,
    Label,
} from "./CommontStyle";
import { StepProps, FieldNames } from "./types";
const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 10px;
  border: none;
  width: 350px;
  height: 150px;
  resize: none;
  transform: translateY(5px);
  box-shadow: inset 0 0 5px;
`;

const Step3 = ({ formData, updateFormData }: StepProps) => {
    const { firstName,
        surName,
        email,
        phoneNumber,
        gender,
        dobDay,
        dobMonth,
        dobYear,
        comment } = formData;
    const serveData = () => {
        axios.post("http://localhost:2000/api/users", {
            firstname: firstName,
            surname: surName,
            phonenumber: phoneNumber,
            email,
            dob: `${dobMonth}/${dobDay}/${dobYear}`,
            gender,
            comments: comment
        }).then(response => console.log('DEBUG response', response))
            .catch(error => console.log('DEBUG error', error))
        alert("Thank for filling out the form!");
        window.location.reload();

    };

    return (
        <RootContainer>
            <FlexContainer>
                <InputBox>
                    <Label htmlFor={FieldNames.COMMENT}>Comment</Label>
                    <Textarea
                        id={FieldNames.COMMENT}
                        value={formData[FieldNames.COMMENT]}
                        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                            updateFormData(FieldNames.COMMENT, event.target.value)
                        }
                    />
                </InputBox>
            </FlexContainer>
            <Button onClick={serveData}>Submit</Button>
        </RootContainer>
    );
};

export default Step3;
