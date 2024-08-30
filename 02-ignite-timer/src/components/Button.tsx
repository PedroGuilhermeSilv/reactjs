import { ButtonContainer, type ButtonVariants } from "./Button.styles";

interface ButtonProps {
	variants?: ButtonVariants;
}

export function Button({ variants = "primary" }: ButtonProps) {
	return (
		<>
			<ButtonContainer variant={variants}> Test</ButtonContainer>
		</>
	);
}
