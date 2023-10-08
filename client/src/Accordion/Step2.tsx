import React, { useState, ChangeEvent } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { RootContainer, FlexContainer, Input, Button, InputBox, Label } from './CommontStyle';

const Select = styled.select`
  padding: 10px;
  border-radius: 10px;
  border: none;
  width: 250px;
  transform: translateY(5px);
  background: linear-gradient( #e3eaea, #eaeaeb);
  box-shadow: inset 0 0 5px;
`;

const Step2 = () => {
    const [phonenumber, setPhoneNumber] = useState("");
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [dob, setDOB] = useState({
        month: '',
        day: '',
        year: '',
    });
    const [error, setError] = useState("");


    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDOB((prevDOB) => ({
            ...prevDOB,
            [name]: parseInt(value, 10),
        }));
    };

    function isValidPhone(phonenumber: string) {
        return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phonenumber);
    }

    const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isValidPhone(event.target.value)) {
            setError('Phone number is invalid');
        } else {
            setError("");
        }
        setPhoneNumber(event.target.value);
    }

    const handleStep2Next = () => {
        if (!phonenumber || !selectedOption || !dob) {
            alert("Please fill in all the fields.");
            return;
        }
    }

    return (
        <RootContainer>
            <FlexContainer>
                <InputBox>
                    <Label htmlFor="phonenumber">Telephone Number</Label>
                    <Input
                        type="text"
                        name="phonenumber"
                        id="phonenumber"
                        value={phonenumber}
                        onChange={handleChangePhone}
                    />
                    {error && <h2 style={{ color: 'red', fontSize: "15px" }}>{error}</h2>}
                </InputBox>
                <InputBox>
                    <Label htmlFor="gender">Select Gender</Label>
                    <Select
                        id="gender"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        placeholder="Select Gender"
                    >
                        <option value="" disabled hidden>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </Select>
                </InputBox>
            </FlexContainer>
            <FlexContainer>
                <InputBox>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Input
                            type="text"
                            id="month"
                            name="month"
                            value={dob.month}
                            onChange={handleInputChange}
                            placeholder="MM"
                            maxLength={2}
                            style={{ width: '44px', margin: '2px' }}
                        />
                        <Input
                            type="text"
                            id="day"
                            name="day"
                            value={dob.day}
                            onChange={handleInputChange}
                            placeholder="DD"
                            maxLength={2}
                            style={{ width: '44px', margin: '2px' }}
                        />
                        <Input
                            type="text"
                            id="year"
                            name="year"
                            value={dob.year}
                            onChange={handleInputChange}
                            placeholder="YYYY"
                            maxLength={4}
                            style={{ width: '88px', margin: '2px' }}
                        />
                    </div>

                </InputBox>
            </FlexContainer>
            <Button onClick={handleStep2Next}>Next <i className="fa fa-angle-right"></i></Button>
        </RootContainer>
    );
};

export default Step2;
