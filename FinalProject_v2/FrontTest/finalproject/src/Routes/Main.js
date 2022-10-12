// 1. 이미지 업로드 div 영역 코드 
// 1.1 영역 전체 파일 드래그 가능하게
// 1.2 가운데 이미지 업로드 버튼 생성(UI 설계 필요)
// 1.3 버튼 위 소개텍스트 영역 및 출력
// 2. 광고 배너 div 영역 코드
// 2.1 이미지 교체(time지정) - 링크 설정

import Searching from './Searching.js';



function Image_upload() {

    return(
        <>
            <div>
                <br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                이미지 업로드 div영역<br/>
                <button onClick={() => {
                    // 이미지 업로드 후 페이지 이동
                    // 1. 이미지 -> 백엔드 전달
                    // 2. Link to "/searching" 이동
                }}>이미지 업로드</button>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                광고 배너 div영역
            </div>
        </>
    );
}

export default Image_upload;