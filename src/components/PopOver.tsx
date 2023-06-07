import { CrossCircledIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import styled from "styled-components";

const PopOver = () => (
  <>
    <PopOverContainer>
      <Popover>
        <ToggleButton>
          <CrossCircledIcon />
          <ButtonLabel>Type</ButtonLabel>
        </ToggleButton>
        <PopOverContent>
          <Labels>
            <Title>Filter by Status</Title>
            <Label>Observance</Label>
            <Label>Common local holiday</Label>
            <Label>Season</Label>
          </Labels>
        </PopOverContent>
      </Popover>
    </PopOverContainer>
  </>
);

const PopOverContainer = styled.div`
  margin-top: 0;
  border-radius: 4px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;

const PopOverContent = styled(PopoverContent)`
  background: rgb(204, 204, 204);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 3.25rem;
`;

const ButtonLabel = styled.p`
  margin: 0;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
`;

const ToggleButton = styled(PopoverTrigger)`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  aria-label: "Toggle Menu";
  width: 6rem;
  margin-top: 0;
`;

const Labels = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.75rem;
`;

export default PopOver;
