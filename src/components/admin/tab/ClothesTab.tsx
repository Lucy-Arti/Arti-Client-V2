import React from 'react';
import styled from 'styled-components';

const ClothesTab = () => {
	return (
		<Section>
			<Top>
				<div className="title">옷</div>
				<Btn>+등록하기</Btn>
			</Top>
      
		</Section>
	);
};

export default ClothesTab;

const Section = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Top = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.title {
		color: var(--Font1, #333);
		font-family: Pretendard;
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 600;
		line-height: 3.5rem; /* 140% */
	}
`;
const Btn = styled.button`
	border: none;
	outline: none;
	text-decoration: none;
	-webkit-appearance: none;
	display: inline-flex;
	padding: 0.25rem 1.25rem;
	justify-content: center;
	align-items: center;
	gap: 1.25rem;
  color: var(--white, #FFF);
font-family: Pretendard;
font-size: 2.5rem;
font-style: normal;
font-weight: 600;
background: #000;
`;