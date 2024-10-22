# class A:            # membership operator
#     def __init__(self,*args,**kwargs):
#         self.args=args
#         self.kwargs=kwargs
#     def __contains__(self,key):  #self=oa   #other=cleck element(key)
#         res=(key in self.args) or (key in self.kwargs)
#         return res
    
# key=2
# oa=A(1,2,3,4,5,6,7,8,9,a=10,b=50,c=96)
# print(9 in oa)
# print(59 in oa)
# print(oa.kwargs['a'])
# print('c' in oa)





class A:            # membership operator
    def __init__(self,*args,**kwargs):
        self.args=args
        self.kwargs=kwargs
    def __getitem__(self,index):
        return self.args[index]
    
key=2
oa=A(1,2,3,4,5,6,7,8,9,a=10,b=50,c=96)
print(oa[4])
print(oa[10])