#include<iostream>

using namespace std;

int fibonacci(int n)
{
    if((n==0)||(n==1))
    {
        return(n);
    }
    else
    {
        return(fibonacci(n-1)+fibonacci(n-2));
    }
}
void show(int n)
{
    int i;
    cout<<"\nFibonacci Series is as show\n";
    for(i=0;i<=n;i++)
    {
       cout<<" "<<fibonacci(i);
    }
}

int main()
{
   int n;
    cout<<"Input the number of Fibonacci Series:";
    cin>>n;
    show(n);

    return 0;
}
