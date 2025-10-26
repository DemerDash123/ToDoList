dataShop = {
    "mango":100,
    "banana":230,
    "apple":120,
    "orange":80,
    "grape":90,
    "pineapple":50,
    "peach":60
}
print(dataShop.get("Hi"))
count = 0
while True:
    print(dataShop.keys())
    answer = input("Enter your frutes press (q) to quit: ")
    if(answer == "q"):
        break
    elif(str(dataShop.get(str(answer))) == "None" ):
        print("you enter something wrong")
    else:
        print(dataShop.get(str(answer)))
        print("None")
        print(dataShop.get(str(answer)) == "None")
        print(f"{answer} is cost {dataShop.get(answer)}")
        count += float(dataShop.get(answer))

print(count)