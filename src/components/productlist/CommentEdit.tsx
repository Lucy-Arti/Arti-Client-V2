import { PostReply, editCmt, editReply } from '@/apis/comments';
import { userPhotoAtom } from '@/app/recoilContextProvider';
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const CommentEdit = (
    props:{
        commentId:number, 
        content:string,
        isReply:boolean,
        setEditCompoOpen:React.Dispatch<React.SetStateAction<boolean>>,
        setReRenderCmts: React.Dispatch<React.SetStateAction<boolean>>,
    }) => {
    const [edittedCmt, setEdittedCmt] = useState(props.content);
    const [btnActive, setBtnActive] = useState('');
    const userProfile = useRecoilValue(userPhotoAtom);
    const totalHeight = document.documentElement.scrollHeight;

    //button onclick시 내용 없으면 안 넘어가도록
    useEffect(()=>{
        if(edittedCmt === ''){
            setBtnActive('');
        } else {
            setBtnActive('active');
        }
    }, [edittedCmt])

    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEdittedCmt(e.target.value);
    }

    const editComment = async(e:React.MouseEvent, id:number, content:string) => {
        e.stopPropagation();
        if(props.isReply){
            const result = await editReply(id, content);
            if(result === false){
                console.log('업로드 실패'); 
            } else {
                console.log(result.data);
                props.setReRenderCmts(true);
            }
            props.setEditCompoOpen(false);
        } else {
            const result = await editCmt(id, content);
            if(result === false){
                console.log('업로드 실패'); 
            } else {
                console.log(result.data);
                props.setReRenderCmts(true);
            }
            props.setEditCompoOpen(false);
        }
    }

  return (
    <FlexColumn height={totalHeight} onClick={() => props.setEditCompoOpen(false)}>
        <CmtBackgroundColor>
        <CmtInputWrapper onClick={(e) => e.stopPropagation()}>
            <div className='profile-img'>
                <img src={userProfile} width='100%' />
            </div>
            <InputBox>
                {/* <input placeholder={holderText} value={inputCmt!} onChange={(e)=>setInputCmt(e.target.value)} /> */}
                <input value={edittedCmt} onChange={(e)=>onChangeInput(e)} />
                <InputBtn className={btnActive} onClick={(e)=>{editComment(e,props.commentId, edittedCmt)}}>수정</InputBtn>
            </InputBox>
        </CmtInputWrapper>
        </CmtBackgroundColor>
    </FlexColumn>
  )
}

export default CommentEdit

const FlexColumn = styled.div<{ height: number }>`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	top: 0;
	right: 50%;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	height: ${(props) => props.height};
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 10;
	@media (min-width: 576px) {
		width: 576px;
	}
`;

const CmtBackgroundColor = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const CmtInputWrapper = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    & > .profile-img{
        width: 3rem;
        height: 3rem;
        border-radius: 15px;
        overflow: hidden;
        & > img{
            width: 100%;
            object-fit: cover;
        }
    }
`

const InputBox = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    align-items: center;
    border: 1px solid rgba(168, 168, 168, 1);
    border-radius: 5px;
    height: 4.5rem;
    & > input{
        width: 80%;
        padding-left: 1rem;
        border: none;
        height: fit-content;
        font-size: 1.5rem;
        &:focus{
            outline: none;
        }
    }
`

const InputBtn = styled.div`
    display: flex;
    width: 15%;
    height: 2.5rem;
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(240, 240, 240, 1);
    color: rgba(168, 168, 168, 1);
    &.active{
        color: black;
        background-color: rgba(165, 232, 101, 1);
        &:hover{
            cursor: pointer;
        }
    }
`