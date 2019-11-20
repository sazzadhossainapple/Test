#include<iostream>
using namespace std;
 void read_data(int n,int a[])
 {
     int i;
     for(i=0;i<n;i++)
     {
         cin>>a[i];
     }
 }

 void insertion(int a[],int n)
 {
     int i,j,key;
     for(i=1;i<n;i++)
     {
         key=a[i];
         j=i-1;
         while((a[j]>key) && (j>=0))
         {
             a[j+1]=a[j];
             j=j-1;
         }

         a[j+1]=key;
     }

 }
void show_data(int n,int a[])
 {
     int i;
     for(i=0;i<n;i++)
     {
         cout<<a[i]<<" ";
     }
 }

 int main()
 {
     int n;
     int a[60];
     cout<<"Enter of input array size;"<<endl;
     cin>>n;
     cout<<"Enter of a number of element:"<<endl;
     read_data(n,a);
     insertion(a,n);
     cout<<"Show the data;"<<endl;
     show_data(n,a);
     return 0;

 }
