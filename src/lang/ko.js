export default {
  route: {
    dashboard: '대시보드',
    introduction: '소개',
    documentation: '문서',
    guide: '가이드',
    permission: '권한',
    pagePermission: '페이지 권한',
    directivePermission: '데렉티브 권한',
    icons: '아이콘',
    components: '컴포넌트',
    componentIndex: '컴포넌트 인덱스',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: '드롭다운 리스트',
    splitPane: '스플릿 패널(분할 패널)',
    avatarUpload: '아바타 업로드',
    dropzone: '드롭존',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: '믹스인',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragKanban: 'Drag Kanban',
    charts: '차트',
    keyboardChart: '키보드 차트',
    lineChart: '라인 차트',
    mixChart: '합성 차트',
    example: '예제',
    Table: '테이블',
    dynamicTable: '다이나믹 테이블',
    dragTable: '드래그 테이블',
    inlineEditTable: '인라인 테이블',
    complexTable: '복합 테이블',
    treeTable: '트리 테이블',
    customTreeTable: '커스텀 트리 테이블',
    tab: '탭',
    form: '폼',
    createArticle: '아티클 작성',
    editArticle: '아티클 수정',
    articleList: '아티클 리스트',
    errorPages: '에러 페이지',
    page401: '401',
    page404: '404',
    errorLog: '에러 로그',
    excel: 'Excel',
    exportExcel: '엑셀파일로 추출',
    selectExcel: '선택항목만 추출',
    uploadExcel: '엑셀파일 업로드',
    zip: 'Zip',
    exportZip: 'Zip파일로 추출',
    theme: '테마',
    clipboardDemo: '클립보드',
    i18n: 'I18n'
  },
  navbar: {
    logOut: '로그아웃',
    dashboard: '대시보드',
    github: 'Github',
    screenfull: '풀스크린',
    theme: '테마'
  },
  login: {
    title: '로그인',
    logIn: '로그인',
    username: '유저명',
    password: '비밀번호',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    roles: '당신의 권한',
    switchRoles: '권한 변경'
  },
  guide: {
    description: '본 가이드 페이지는 프로젝트를 처음 시작한 분들에게 유용합니다. 프로젝트의 기능을 간략하게 소개 할 수 있습니다. 데모는 다음을 기반으로합니다.',
    button: '가이드 시작'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: '페이지가 스크롤되고, 헤더는 상단에 고정됩니다.',
    backToTopTips1: '페이지가 지정된 위치로 스크롤되면 오른쪽 상단에 Back to Top 버튼이 나타납니다.',
    backToTopTips2: '버튼의 스타일, 표시여부, 높이, 정의 할 수 있습니다. 텍스트 프롬프트가 필요한 경우, element-ui el-tooltip 요소를 외부 적으로 사용할 수 있습니다',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export selected items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  theme: {
    change: 'Theme change',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  }
}
