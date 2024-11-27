import random
import math

print("input")
NUM = math.floor(random.random() * 100)
i = 0
while True:
    i += 1
    k = int(input())
    if NUM < k:
        print("more litle")
    elif NUM > k :
        print("more big")
    else:
        print(f"correct {i}")
        break
