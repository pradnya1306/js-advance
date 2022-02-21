# i=1
# fac=1
# while i<=9:
#      fac=fac*i
#      i+=1
# print(fac)

a=[1,2,3,3,4,5]
b=["name","age","class","rollno"]
c=[["p",12,"9th",32],["r",13,"10th",12],["r\q",13,"10th",12],["ra",13,"10th",12],["rz",13,"10th",12]]
k={}
h={}
for i in range(len(a)):
     h.update({b[i]:c[i]})
     k.update({a[i]:h})
print(k)