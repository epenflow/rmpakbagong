import styled from '@emotion/styled';
import { FC } from 'react';
import { IFEComp } from './IFEComp';

const FallbackWrapper = styled.main`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	h1 {
		font-size: 32px;
		text-transform: capitalize;
	}
	p {
		text-align: justify;
	}
`;
type FallbackProps = {
	text?: string;
};
const Fallback: FC<FallbackProps> = ({ text }) => {
	return (
		<FallbackWrapper>
			<IFEComp
				state={!text}
				firstChild={<h1>loading...</h1>}
				secondChild={
					<section>
						<p>{text}</p>
						<h1>loading...</h1>
					</section>
				}
			/>
		</FallbackWrapper>
	);
};

export default Fallback;
