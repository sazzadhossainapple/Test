
#include<iostream>
using namespace std;
void read(int n,int a[])
{
    int i;
    cout<<"Enter of a elements number:"<<endl;
    for(i=0; i<n; i++)

    {
        cin>>a[i];
    }
}

void show(int n,int a[])
{
    int i;
    cout<<"Press data:"<<endl;
    for(i=0; i<n; i++)
    {
        cout<<a[i]<<" ";
    }
}
int  partition (int a[],int p,int r,int n)
{
    int x,i,j;
    x=a[r];
    i=p-1;
    for(j=p; j<=r-1; j++)
    {
        if(a[j]<=x)
        {
            i=i+1;
            swap(a[j],a[i]);
        }
        swap(a[i+1],a[r]);
        show(n,a);

    }

    return i+1;
}

void quick_sort(int a[],int p,int r,int n)
{
    int q;
    if(p<r)
    {
        q=partition(a,p,r,n);
        quick_sort(a,p,q-1,n);
        quick_sort(a,q+1,r,n);

    }
}
int main()
{
    int n;
    int a[40];
    cout<<"Inputs array size:"<<endl;
    cin>>n;
    read(n,a);
    quick_sort(a,0,n-1,n);
    show(n,a);
    return 0;
}

