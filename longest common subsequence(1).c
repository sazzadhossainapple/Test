#include<stdio.h>
#include<string.h>
int main()
{
    char a[20], b[20];
    int i, j, l1, l2;
    printf("Enter the first input: ");
    gets(a);
    printf("Enter the first input: ");
    gets(b);
    l2=strlen(a);
    l1=strlen(b);
    char ar_dir[l1+1][l2+1];
    int ar_val[l1+1][l2+1];

    for(i=0; i<=l1; i++)
    {
        ar_val[i][0]=0;
        ar_dir[i][0]=' ';
    }
    for(j=0; j<=l2; j++)
    {
        ar_val[0][j]=0;
        ar_dir[0][j]=' ';
    }
    for(i=1; i<=l1; i++)
    {
        for(j=1; j<=l2; j++)
        {
            if(b[i-1]==a[j-1])
            {
                ar_val[i][j]=ar_val[i-1][j-1]+1;
                ar_dir[i][j]='C';
            }
            else if(ar_val[i-1][j]>=ar_val[i][j-1])
            {
                ar_val[i][j]=ar_val[i-1][j];
                ar_dir[i][j]='U';
            }
            else
            {
                ar_val[i][j]=ar_val[i][j-1];
                ar_dir[i][j]='S';
            }
        }
        printf("\n");
    }
    for(i=0; i<=l1; i++)
    {
        for(j=0; j<=l2; j++)
        {
            printf("%d%c   ",ar_val[i][j], ar_dir[i][j]);
        }
        printf("\n");
    }
    return 0;
}
