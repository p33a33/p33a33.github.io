import * as React from "react";
import type { HeadFC } from "gatsby";
import "./resume.scss";
import gitIcon from "../images/logo--github.svg";
import linkedinIcon from "../images/logo--linkedin.svg";
import emailIcon from "../images/email.svg";
import javascriptIcon from "../images/icons8-javascript.svg";
import typescriptIcon from "../images/typescriptlang-icon.svg";
import reactIcon from "../images/React-icon.svg";

const IndexPage = () => {
    return (
        <main className="main">
            <div className="container">
                {/* 이력서 제목 */}

                {/* 간단한 자기소개 */}
                <div className="section">
                    <h1 className="resume-title">
                        프론트엔드 개발자 조성민입니다.
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "flex-end",
                            gap: 16,
                        }}
                    >
                        <a href="https://github.com/p33a33" target="_blank">
                            <img src={gitIcon} width={36} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/%EC%84%B1%EB%AF%BC-%EC%A1%B0-8a22ab202/"
                            target="_blank"
                        >
                            <img src={linkedinIcon} width={40} />
                        </a>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                                fontWeight: 700,
                            }}
                        >
                            <img src={emailIcon} width={40} />
                            p33a33@gmail.com
                        </div>
                    </div>
                    <div className="content">
                        <p className="intro">
                            서울에서 2년차 프론트엔드 엔지니어로 일하고
                            있습니다.
                            <br />
                            조직의 사업적 성과와 프로덕트의 개선에서 보람을
                            느낍니다. <br />
                            새로운 시도에 관대하고, 자기주도적으로 일할 수 있는
                            조직에서 최고의 효율을 낼 수 있다고 생각합니다.{" "}
                            <br />
                            평생 실무자로 남는것을 목표로,
                            <b> 하루하루 더 나은 코드</b>를 쓸 수 있도록 배움을
                            거듭해 나갑니다.
                        </p>
                    </div>
                </div>

                {/* 경력사항 */}
                <div className="section">
                    <h2 className="section-title">경력사항</h2>

                    <div className="content">
                        <div className="left">
                            <h3>에이팀벤처스</h3>{" "}
                            <div className="period">(2021. 3. ~ 현재)</div>
                            <div style={{ fontSize: 16, fontWeight: 500 }}>
                                Frontend Engeenier
                            </div>
                        </div>
                        <div className="right">
                            <div className="project">
                                <h4>
                                    제조업 매칭 플랫폼 <b>CAPA</b>
                                </h4>
                                <div className="item-title">프로젝트 설명</div>
                                <div className="item-description">
                                    제조가 필요한 고객이 견적을 요청하고,
                                    제조능력이 있는 파트너와 연결되는
                                    플랫폼입니다. 파트너와 도면을 보면서 채팅을
                                    통해 상담할 수 있습니다.
                                </div>
                                <div className="item-title">주요 작업내용</div>
                                <div className="item-description">
                                    <ul>
                                        <li>
                                            웹용 도면뷰어 <b>CAPA Viewer</b>를
                                            개발하는 R&D팀과 협업하여 고객과
                                            파트너가 뷰어를 통해 특정 부품이나
                                            부분에 주석을 남기고, 댓글을 남길
                                            수있는 기능을 개발했습니다.
                                        </li>
                                        <li>
                                            <b> 견적요청서 작성 UI와 로직</b>을
                                            개발했습니다.
                                        </li>
                                        <li>
                                            신규 제조서비스를 위한
                                            <b> 견적요청서</b>를 개발했습니다.
                                            신규요청서에{" "}
                                            <b>새로운 레이아웃의 UI를 구현</b>
                                            하여 HACKLE을 사용해 A/B테스트를
                                            진행했습니다.
                                        </li>
                                        <li>
                                            파트너에게 받은 견적을 확정하고 해당
                                            파트너에게{" "}
                                            <b>프로젝트를 발주하는 기능</b>을
                                            개발했습니다.
                                        </li>
                                        <li>
                                            서비스의
                                            <b> 랜딩페이지 UI 개편</b>을
                                            진행했습니다.
                                        </li>
                                    </ul>
                                </div>
                                <div className="item-title">기술 스택</div>
                                <div className="item-description">
                                    Typescript, React, Redux, Apollo client,
                                    Graphql, Material-ui, Styled-components,
                                    PostMessage API
                                </div>
                            </div>

                            <div className="project">
                                <h4>
                                    제조서비스 공급자용 서비스
                                    <b> CAPA PARTNERS</b>
                                </h4>
                                <div className="item-title">프로젝트 설명</div>
                                <div className="item-description">
                                    CAPA를 통해 요청한 고객들의 프로젝트에
                                    견적서를 제출하고, 발주까지 진행할 수 있는
                                    서비스입니다.
                                </div>
                                <div className="item-title">주요 작업내용</div>
                                <div className="item-description">
                                    <ul>
                                        <li>
                                            가격경쟁을 넘어 파트너의 역량을 잘
                                            보여줄 수 있는{" "}
                                            <b>파트너 회사 소개서</b> 기능을
                                            개발했습니다.
                                        </li>
                                    </ul>
                                </div>
                                <div className="item-title">기술 스택</div>
                                <div className="item-description">
                                    Typescript, React, Redux, Apollo client,
                                    Graphql, Material-ui, Styled-components
                                </div>
                            </div>

                            <div className="project">
                                <h4>
                                    도면 클라우드 저장소 서비스
                                    <b> CAPA CLOUD </b>
                                </h4>
                                <div className="item-title">프로젝트 설명</div>
                                <div className="item-description">
                                    도면 파일을 클라우드에 저장하고, 웹에서
                                    2D/3D 도면을 조회할 수 있는 서비스입니다.
                                    현재는 CLOUD 라는 서비스로 제공중이지
                                    않으며, 이 프로젝트를 기반으로
                                    <b> CAPA CONNECT</b> 서비스가
                                    런칭되었습니다.
                                </div>
                                <div className="item-title">주요 작업내용</div>
                                <div className="item-description">
                                    <ul>
                                        <li>
                                            Axios 기반으로
                                            <b> 복수 파일의 병렬 업로드</b>를
                                            구현하고,{" "}
                                            <b>
                                                업로드 진행상황을 표시하는 UI를
                                                개발
                                            </b>
                                            했습니다.
                                        </li>
                                    </ul>
                                </div>
                                <div className="item-title">기술 스택</div>
                                <div className="item-description">
                                    Typescript, React, Apollo Client, Axios,
                                    Graphql
                                </div>
                            </div>

                            <div className="project">
                                <h4>개발환경/문화 기여</h4>
                                <div className="item-title">프로젝트 설명</div>
                                <div className="item-description">
                                    주어진 태스크 외에 별개로 추가적으로
                                    개발환경이나 개발문화의 개선을 위해
                                    주도적으로 진행한 프로젝트입니다.
                                </div>
                                <div className="item-title">주요 작업내용</div>
                                <div className="item-description">
                                    <h5>개발환경 / 업무환경 개선</h5>
                                    <ul>
                                        <li>
                                            모든 프론트 프로젝트에
                                            <b> 파일 경로 Alias를 적용</b>하여,
                                            파일 가독성을 개선했습니다.
                                        </li>{" "}
                                        <li>
                                            프로젝트
                                            <b>
                                                {" "}
                                                webpack 설정에 SWC-loader를 적용
                                            </b>
                                            하여, 빌드시간을 개선했습니다.
                                        </li>
                                        <li>
                                            백오피스에{" "}
                                            <b>테스트 계정 관리 페이지</b>와{" "}
                                            컨텐츠팀의{" "}
                                            <b>
                                                자료 등록을 위한 페이지를 개발
                                            </b>
                                            했습니다.
                                        </li>
                                    </ul>

                                    <h5>개발문화 개선</h5>
                                    <ul>
                                        <li>
                                            주도적으로{" "}
                                            <b>Git branch 관리 전략을 설정</b>
                                            했습니다.
                                        </li>
                                        <li>
                                            Merge를 위해{" "}
                                            <b>Pull Request 규칙을 설정</b>하고,{" "}
                                            <b>
                                                코드 리뷰를 통한 PR 승인을
                                                적용하여
                                            </b>{" "}
                                            개발 문화 개선에 기여했습니다.
                                        </li>
                                    </ul>
                                </div>
                                <div className="item-title">기술 스택</div>
                                <div className="item-description">
                                    <ul>
                                        <li>
                                            파일 경로 Alias : Typescript complie
                                            option
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2 className="section-title">기술스택</h2>

                    <div className="tech-stack" style={{ rowGap: "8px" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: 8,
                                fontSize: 20,
                                fontWeight: 700,
                            }}
                        >
                            <img
                                src={javascriptIcon}
                                style={{ borderRadius: 8 }}
                                width={36}
                            />
                            Javascript
                        </div>
                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 16,
                                fontSize: 18,
                                lineHeight: "160%",
                            }}
                        >
                            <li>
                                Arrow function, Destructuring, Template Literal
                                등 <b>ES6 이상 문법 사용</b>에 익숙합니다.
                            </li>
                            <li>
                                Async Await, Promise를 사용하여{" "}
                                <b>적절하게 비동기 작업을 처리</b>할 수
                                있습니다.
                            </li>
                        </ul>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: 8,
                                fontSize: 20,
                                fontWeight: 700,
                            }}
                        >
                            <img
                                src={typescriptIcon}
                                style={{ borderRadius: 8 }}
                                width={36}
                            />
                            Typescript
                        </div>
                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 16,
                                fontSize: 18,
                                lineHeight: "160%",
                            }}
                        >
                            <li>
                                <b>Generic</b>을 이용해 재사용성을 고려한
                                타이핑을 할 수 있습니다.
                            </li>
                            <li>
                                적절한 <b>Interface 구성</b>으로 확장가능한
                                타이핑을 할 수 있습니다.
                            </li>
                        </ul>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                fontSize: 20,
                                fontWeight: 700,
                            }}
                        >
                            <img
                                src={reactIcon}
                                style={{ borderRadius: 8 }}
                                width={36}
                            />
                            React
                        </div>
                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 16,
                                fontSize: 18,
                                lineHeight: "160%",
                            }}
                        >
                            <li>
                                반복적인 로직에 대해 적절하게 <b>Custom Hook</b>
                                을 구성할 수 있습니다.
                            </li>
                            <li>
                                <b>적절한 상태 분리</b>를 통해 불필요한 렌더링을
                                방지할 수 있습니다.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="section">
                    <h2 className="section-title">교육</h2>

                    <div className="content">
                        <div className="left">
                            <h3>코드스테이츠</h3>
                            <br />
                            <div className="period">(2020. 6. ~ 2020. 11.)</div>
                        </div>
                        <div className="right">
                            <div className="project">
                                <h4>
                                    Advanced Softeware Engineering, Immersive
                                    Program 22th 수료
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 학력 */}
                <div className="section">
                    <h2 className="section-title">학력</h2>

                    <div className="content">
                        <div className="left">
                            <h3>평택대학교</h3>
                            <br />
                            <div className="period">(2010. 3. ~ 2016. 8.)</div>
                        </div>
                        <div className="right">
                            <div className="project">
                                <h4>경영학과 학사</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
