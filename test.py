import random


randomNumber = random.randint(0,100)
while True:
    answer = int(input("Enter your guess from 1 to 100: "))
    if(answer > randomNumber):
        print("number is high guess less number")
    elif(answer < randomNumber):
        print("number is low guess high number")
    else:
        print("your answer is correct" , answer)
        break
    