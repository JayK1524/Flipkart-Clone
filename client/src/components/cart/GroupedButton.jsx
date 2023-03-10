import React, { useState } from "react";
import { ButtonGroup, Button, styled } from "@mui/material";

const ButtonWrapper = styled(ButtonGroup)`
	margin-top: 30px;
`;

const StyledButton = styled(Button)`
	border-radius: 10%;
`;

const GroupedButton = () => {
	const [counter, setCounter] = useState(1);

	const handleIncrement = () => {
		setCounter((counter) => counter + 1);
	};

	const handleDecrement = () => {
		setCounter((counter) => counter - 1);
	};

	return (
		<ButtonWrapper>
			<StyledButton onClick={handleDecrement} disabled={counter === 0}>
				-
			</StyledButton>
			<Button disabled>{counter}</Button>
			<StyledButton onClick={handleIncrement}>+</StyledButton>
		</ButtonWrapper>
	);
};

export default GroupedButton;
