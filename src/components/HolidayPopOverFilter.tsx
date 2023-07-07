import { CrossCircledIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import styled from "styled-components";
import RadioButton from "./RadioButton";

type PopOverProps = {
  defaultRadioValue: string;
  onRadioChange: (holidayType: string) => void;
};

const holidayTypes = [
  {
    label: "Show All",
    id: "",
  },
  {
    label: "National",
    id: "national",
  },
  {
    label: "Local",
    id: "local",
  },
  {
    label: "Observance",
    id: "observance",
  },
  {
    label: "Religious",
    id: "religious",
  },
];

export const HolidayPopOverFilter = ({
  defaultRadioValue,
  onRadioChange,
}: PopOverProps) => (
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
            <List>
              {holidayTypes.map((holidayType, index) => (
                <>
                  <RadioButton
                    checked={defaultRadioValue === holidayType.id}
                    key={holidayType.id + index}
                    label={holidayType.label}
                    id={holidayType.id}
                    name="holidayType"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onRadioChange(e.target.id);
                    }}
                  />
                  {index === 0 && <Separator />}
                </>
              ))}
            </List>
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
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 0.5rem;
  margin-left: 4.5rem;
  border-radius: 0.25rem;
`;

const ButtonLabel = styled.p`
  margin: 0;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid rgb(99, 102, 241);
  margin: 0.25rem 0;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ToggleButton = styled(PopoverTrigger)`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  aria-label: "Toggle Menu";
  width: 6rem;
  margin-top: 0;
  background-color: white;
  border: 2px solid lightgray;
  padding: 0.2rem;
  outline: none;
  color: #6366f1;
  :focus {
    border-color: #6366f1;
  }
  ::placeholder {
    color: #333333;
  }
`;

const Labels = styled.div`
  display: flex;
  flex-direction: column;
`;
