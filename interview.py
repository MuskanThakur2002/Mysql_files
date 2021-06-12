A = [0,1,4,5,6,7]
B = [3,4,9,8,7,2]
def median_fun(n):
    if len(n)%2!=0 and len(n)!=0:
        c=(len(m)-1+1)/2
        return n[int(c)]
    elif len(n)%2==0 :
        d=n[int((len(n)-1)/2)]
        e=n[int((len(n)+1)/2)]
        c=(d+e)/2
        return c
m=A+B
for i in range(len(m)):
    for j in range(len(m)-1-i):
        if m[j]>m[j+1]:
            t=m[j]
            m[j]=m[j+1]
            m[j+1]=t
s=m
print(s)
print(median_fun(s))


# 
# 
# words = ["There's", "a", "bluebird", "in","my", "heart", "that", "wants", "to", "get", "out","but", "I'm", "too", "clever"]
# words = ["I", "am", "Muskan", "and", "I", "am", "very", "cute."]
# maxWidth = 16
# n=""
# for i in range(len(words)):
#     n=n+words[i]+" "
#     if len(n)>=18:
#         print(n)
#         n=""
# 
N=int(input("Enter the nummber :)"))
x = 65
for i in range(1,N+1):
    for j in range(1,i+1):
        ch = chr(x)
        print(ch,end=" ")
        print(j,end=" ")
        x+=1
    x-=1
    print(ch,end=' ')
    for k in range(j-1,0,-1):
        x-=1
        ch = chr(x)
        print(k,end=" ")
        print(ch,end=" ")   
    print('')
# def var(list):
# 	max=list[0]
# 	i=0
# 	while i<len(list):
# 		if list[i]>max:
# 			max=list[i]
# 		i=i+1
# 	return max
# var1=[1,2,7,4,5]
# print(var(var1))