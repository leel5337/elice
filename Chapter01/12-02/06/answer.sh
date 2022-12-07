#원하는 파일만 커밋하기

#지시사항
# 1. 가장 먼저 git status명령어를 실행해 보세요.
# 2. 어떤 결과가 나오나요?
# 3. git reset을 이용해 README.txt파일을 준비영역에서 삭제하고, git add를 이용해 crawling.py과 rat.py를 준비영역에 추가해 보세요.
# 4. 다시 git status명령어를 사용하면 어떻게 출력되나요?

#    README.txt가 준비영역에 있다.
#    crawling.py파일이 수정되었지만 준비영역에는 없다
#    rat.py은 준비영역에 없다.

git reset README.txt

git add rat.py crawling.py