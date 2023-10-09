import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import GlobalStyle from "./global-style";
import Step1 from './Accordion/Step1';
import Step2 from "./Accordion/Step2";
import Step3 from "./Accordion/Step3";
import { AvailableFields } from "./Accordion/types";
import type { FormData } from './types';
import formInitialState from "./constants";

const Container = styled.main`
  position: relative;
`;

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b8c7e1;
`;

const InnerSection = styled.div`
  position: relative;
  max-width: 1000px;
  padding: 1px;
  background-color: white;
  border-radius:10px
`;

const AccordionContainer = styled.div``;

const AccordionInner = styled.div`
  position: relative;
  width: 60vw;
  border-radius: 4px;
`;

const AccordionItem = styled.div`
  background-color: #dededf;
  border-radius: 10px;
  border: 2px solid #fff;
`;

const AccordionTitle = styled.h3`
  padding: 1rem;
  cursor: pointer;
  height: 50px;
  background: linear-gradient( #fbc10a, #f2b104);
  color: #f5f5f5;
  border-radius: 10px;
  margin: 0px;
  font-weight:400;
  font-size:14px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;

const AccordionBody = styled.div<{ active: boolean; bodyHeight: number }>`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`;

const AccordionContent = styled.p`
  margin: 0;
  padding: 1rem;
  height: auto;
`;

interface AccordionItemProps {
  title: string;
  content: React.ReactNode; // Updated type to allow any valid React element
}

const AccordionItems: React.FC<{
  accordionContent: AccordionItemProps[];
  refs: React.RefObject<HTMLDivElement>[];
  currentAccordion: number;
  setCurrentAccordion: React.Dispatch<React.SetStateAction<number>>;
  setBodyHeight: React.Dispatch<React.SetStateAction<number>>;
  bodyHeight: number;
}> = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight,
}) => {
    return (
      <>
        {accordionContent.map(({ title, content }, i) => (
          <AccordionItem key={`accordion-item-${i}`}>
            <AccordionTitle
              onClick={() => {
                setCurrentAccordion(i);
                const refCurrent = refs[i].current;
                if (refCurrent) {
                  setBodyHeight(refCurrent.clientHeight);
                }
              }}
            >
              {title}
            </AccordionTitle>
            <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
              <AccordionContent ref={refs[i]}>{content}</AccordionContent>
            </AccordionBody>
          </AccordionItem>
        ))}
      </>
    );
  };



export default function App() {


  const [currentAccordion, setCurrentAccordion] = useState<number>(0);
  const [bodyHeight, setBodyHeight] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>(formInitialState)

  const item0 = useRef<HTMLDivElement>(null);
  const item1 = useRef<HTMLDivElement>(null);
  const item2 = useRef<HTMLDivElement>(null);

  const updateFormData = (fieldName: AvailableFields, fieldValue: string) => {
    setFormData((prev) => {
      return {
        ...prev,
        [fieldName]: fieldValue
      }
    })
  }


  const refs = [item0, item1, item2];
  const accordionCommonProps = {
    formData, updateFormData, setCurrentAccordion
  }

  const accordionData: AccordionItemProps[] = [
    {
      title: "Step 1: Your details",
      content: <Step1 {...accordionCommonProps} />
    },
    {
      title: "Step 2: More comments",
      content: <Step2 {...accordionCommonProps} />
    },
    {
      title: "Step 3: Final comments",
      content: <Step3 {...accordionCommonProps} />
    }
  ];

  
  return (
    <>
      <GlobalStyle />
      <Container>
        <Section>
          <InnerSection>
            <AccordionContainer>
              <AccordionInner>
                <AccordionItems
                  accordionContent={accordionData}
                  refs={refs}
                  currentAccordion={currentAccordion}
                  setCurrentAccordion={setCurrentAccordion}
                  setBodyHeight={setBodyHeight}
                  bodyHeight={bodyHeight}
                />
              </AccordionInner>
            </AccordionContainer>
          </InnerSection>
        </Section>
      </Container>
    </>
  );
}

