import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { RootContainer, FlexContainer, Button, InputBox, Label } from './CommontStyle';

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

const Step3 = () => {
    const [comment, setComment] = useState<string>("");

    const handleFormValidation = () => {
        axios.post('http://localhost:2000/api/users', {
            comment: comment,
        }).then(response => console.log('DEBUG response', response))
            .catch(error => console.log('DEBUG error', error));
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    return (
        <RootContainer>
            <FlexContainer>
                <InputBox>
                    <Label htmlFor="comment">Comment</Label>
                    <Textarea
                        id="comment"
                        value={comment}
                        onChange={handleInputChange}
                    />
                </InputBox>
            </FlexContainer>
            <Button onClick={handleFormValidation}>Submit</Button>
        </RootContainer>
    );
};

export default Step3;
