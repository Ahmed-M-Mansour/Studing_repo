perStudentPetCount = [0, 1, 0, 2, 1, 1, 4, 0, 0, 0, 3, 2, 1, 3, 0, 2, 2, 4] 
numOfStudent = len(perStudentPetCount)  
print(numOfStudent)
print(perStudentPetCount[5])

sum = 0 
for individualPetCount in perStudentPetCount:
	sum = sum + individualPetCount
print(sum)

average = sum / numOfStudent

print(average)