export const USER_INFO_COLUMNS = [
	{
		accessor: 'name',
		Header: '이름',
	},
	{
		accessor: 'nickname',
		Header: '닉네임',
	},
	{
		accessor: 'phone',
		Header: '전화번호',
	},
	{
		accessor: 'email',
		Header: '이메일',
	},
	{
		accessor: 'birth',
		Header: '생년월일',
	},
	{
		accessor: 'joindate',
		Header: '가입일시',
	},
	{
		accessor: 'votecount',
		Header: '투표 횟수',
	},
	{
		accessor: 'voteproduct',
		Header: '투표한 옷',
	},
	{
		accessor: 'lastvisit',
		Header: '마지막 접속 일시',
	},
];

export const VOTE_INFO_COLUMNS = [
	{
		accessor: 'name',
		Header: '이름',
	},
	{
		accessor: 'nickname',
		Header: '닉네임',
	},
	{
		accessor: 'votedate',
		Header: '투표 일시',
	},
	{
		accessor: 'firstround',
		Header: '8강에서 투표한 옷',
	},
	{
		accessor: 'secondround',
		Header: '4강에서 투표한 옷',
	},
	{
		accessor: 'finalround',
		Header: '결승에서 투표한 옷',
	},
];

export const CLOTHES_INFO_COLUMNS = [
	{
		accessor: 'type',
		Header: '구분',
	},
	{
		accessor: 'clothesName',
		Header: '옷 이름',
	},
	{
		accessor: 'designerName',
		Header: '디자이너',
	},
	{
		accessor: 'commentCount',
		Header: '댓글 개수',
	},
	{
		accessor: 'likeCount',
		Header: '저장 개수',
	},
	{
		accessor: 'score',
		Header: '투표 Score',
	},
	{
		accessor: 'purchaseLink',
		Header: '구매 링크',
	},
];

export const DESIGNER_INFO_COLUMNS = [
	{
		accessor: 'userName',
		Header: '이름',
	},
	{
		accessor: 'introduce',
		Header: '소개글',
	},
	{
		accessor: 'instagram',
		Header: '인스타그램 링크',
	},
	{
		accessor: 'designerProfile',
		Header: '프로필 사진',
	},
	{
		accessor: 'productsIdAndNameByDesigner',
		Header: '등록된 옷',
	},
	{
		accessor: 'sketchesIdAndNameByDesigner',
		Header: '등록된 일러스트',
	},
];

export const COMMENT_INFO_COLUMNS = [
	{
		accessor: 'name',
		Header: '작성자 member_id',
	},
	{
		accessor: 'about',
		Header: '작성자 닉네임',
	},
	{
		accessor: 'about',
		Header: '댓글 내용',
	},
	{
		accessor: 'about',
		Header: '작성 시간',
	},
	{
		accessor: 'product',
		Header: '삭제 시간',
	},
];

export const POINT_INFO_COLUMNS = [
	{
		accessor: 'memberId',
		Header: '유저 id',
	},
	{
		accessor: 'currentPoint',
		Header: '전체 포인트',
	},
	{
		accessor: 'accumulatedGivenPoint',
		Header: '누적 획득 포인트',
	},
	{
		accessor: 'accumulatedUsedPoint',
		Header: '누적 사용 포인트',
	},
	{
		accessor: 'history',
		Header: '포인트 내역',
	},
];

export const REWARD_INFO_COLUMNS = [
	{
		accessor: 'id',
		Header: 'member_id',
	},
	{
		accessor: 'name',
		Header: '이름',
	},
	{
		accessor: 'item.title',
		Header: '구매한 품목',
	},
	{
		accessor: 'item.created_at',
		Header: '구매한 날짜',
	},
	{
		accessor: 'phoneNumber',
		Header: '휴대폰 번호',
	},
	{
		accessor: 'address',
		Header: '주소',
	},
	{
		accessor: 'status',
		Header: '현재 상태',
	},
];

export const IGFOLLOW_INFO_COLUMNS = [
	{
		accessor: 'name',
		Header: 'member_id',
	},
	{
		accessor: 'name',
		Header: '인스타그램 아이디',
	},
];

export const IGSTORY_INFO_COLUMNS = [
	{
		accessor: 'name',
		Header: 'member_id',
	},
	{
		accessor: 'name',
		Header: '캡쳐 화면',
	},
];
