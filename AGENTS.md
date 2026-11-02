# 에이전트 코딩 가이드

## 프로젝트

`@pdg/crypto`는 문자열의 Base64 인코딩·디코딩과 MD5, SHA-1, SHA-256 해시를 제공하는 TypeScript npm 라이브러리다. `src/index.ts`가 각 이름 있는 API와 이들을 담은 기본 객체를 내보낸다.

- 구현과 공개 API: `src/`, `src/index.ts`
- API 테스트: `test/` (Jest와 ts-jest)
- 예제: `examples/` (별도 npm 프로젝트, 현재 콘솔 출력만 수행)
- 빌드 산출물: `dist/` (일부 Git 추적 중인 생성 파일)
- 상세 구조와 배포 주의점: [프로젝트 구조](docs/agents/project.md)
- 기능·빌드 변경 절차: [npm 패키지 개발 스킬](.agents/skills/npm-package-development/SKILL.md)

## 작업 원칙

1. 시작할 때 `git status --short`와 관련 소스·설정을 읽고 기존 변경을 보존한다.
2. 요청에 필요한 범위만 수정한다. 공개 API 변경 시 이름 있는 내보내기와 기본 객체, 타입 선언, 테스트, README와 예제를 확인한다.
3. 문서와 작업 결과는 한글로 작성한다. 식별자와 명령은 원래 표기를 사용한다.
4. `dist/`는 직접 수정하지 않는다. 빌드는 `dist/*`를 삭제하고 다시 생성하므로 실행 전 기존 변경을 보존할 방법을 확인한다.
5. 배포 경로·모듈 형식을 변경할 때는 실제 설치 소비자의 `import`, `require`와 타입 해석을 확인한다. 기존 호환성 주의점은 구조 문서를 참고한다.
6. 커밋·푸시·npm 게시 명령은 요청받은 경우에만 실행한다. `npm run pub`는 실제 게시하며 `git:commit`은 전체 변경을 스테이징한다.

## 검증

`.nvmrc`의 Node 버전을 사용한다. 의존성이 없으면 루트에서 `npm install`을 실행하고, 예제를 실행할 때는 `examples/`에도 별도로 설치한다. 잠금 파일은 `.gitignore` 대상이다.

```sh
npm run tsc
npm run lint
npm test -- --runInBand --watchman=false
```

타입 검사와 lint는 `src/`만 대상으로 한다. 빌드 변경 시 기존 `dist/` 변경을 보존한 뒤 `npm run build`를 확인한다. 이 명령은 Watchman 감시 설정 재등록 → 기본 테스트 → Rollup 순서다. Watchman이 없거나 접근 오류가 나면 위 테스트와 `./node_modules/.bin/rollup -c --bundleConfigAsCjs`를 각각 실행하고 표준 빌드 통과와 구분해 보고한다.

문서만 수정할 때는 링크·경로·명령을 실제 설정과 대조한다. 완료 보고에는 변경 내용, 실행한 검증과 결과, 미확인 사항을 남긴다.
