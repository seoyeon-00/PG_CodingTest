function solution(s) {
  // 문자열 s 전체를 소문자로 변환
  // replace는 인자로 정규표현식과 대체될 값을 작성
  // \b는 단어의 시작, 경계를 나타냄 -> 첫 글자를 대문자로 변환
  return s.toLowerCase().replace(/\b[a-z]/g, (char) => char.toUpperCase());
}
