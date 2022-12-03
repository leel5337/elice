#변경전의 일부분만 골라서 커밋하기

#지시사항
# 1. 엘리스 토끼가 작업한 내용은 아래 두 개의 파일입니다. 아래 두 개의 파일을 추가하고 커밋 메시지를 엘리스 토끼로 하여 커밋을 추가하세요.
#      quotes/politics.txt
#      quotes/science.txt
# 2. 모자장수가 작업한 내용은 아래 세 개의 파일입니다. 아래 세 개의 파일을 추가하고 커밋 메시지를 모자장수로 하여 커밋을 추가하세요.
#      quotes/music.txt
#      quotes.py
#      README.md

cd random_quotes

# 지시사항 1번을 참고하여 코드를 작성하세요.
git commit -m "엘리스 토끼" quotes/politics.txt quotes/science.txt

# 지시사항 2번을 참고하여 코드를 작성하세요.
git add quotes/music.txt quotes.py README.md
git commit -m "모자장수"