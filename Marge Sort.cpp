
#include<iostream>
using namespace std;
void input(int n,int a[])
{
    int i;
    for(i=0; i<n; i++)
    {
        cin>>a[i];
    }
}
void merge(int a[], int p, int q, int r)
{
    int i, j, k;
    int n1 = q - p + 1;
    int n2 =  r - q;
    int L[n1], R[n2];

    for (i = 0; i < n1; i++)
    {
        L[i] = a[p + i];
    }
    for (j = 0; j < n2; j++)
    {


        R[j] = a[q + 1+ j];
    }

    L[n1+1]=5000;
    R[n2+1]=5000;
    i = 0;
    j = 0;
    for(k=p; k<=r; k++)
    {
        if(L[i]<=R[j])
        {
            a[k]=L[i];
            i=i+1;
        }
        else
        {
            a[k]=R[j];
            j=j+1;
        }
    }

}

void mergeSort(int a[], int p, int r)
{
    int q;
    if (p < r)
    {

        int q = (p+r)/2;
        mergeSort(a, p, q);
        mergeSort(a, q+1, r);
        merge(a, p, q, r);
    }
}
void show_data(int n,int a[])
{
    int i;
    for(i=0; i<n; i++)
    {
        cout<<a[i]<<" ";
    }
}
int main()
{
    int i,n,a[30];
    cin>>n;

    input(n,a);
    mergeSort(a,0,n-1);

    show_data(n,a);
    return 0;
}

