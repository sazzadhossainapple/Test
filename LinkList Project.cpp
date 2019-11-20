#include<iostream>
using namespace std;

struct Node
{
    int data;
    struct Node *next;
};

int main ()
{
    struct Node *head, *temp,*temp1,*x,*y,*z,*p;
    int choice, n,flag=0, i;

    while(1)
    {
        cout<<"Menu\n"<<endl;
        cout<<"1. Create a list\n2.Show the list\n3. Insert a node at the end\n4. Insert at the beginning\n";
        cout<<"5. Insert after a specific node\n6. Insert before a specific node\n7. Delete from the end\n8. Delete from the beginning\n";
        cout<<"9. Delete after a specific node\n10. Delete before a specific node\n11.  Search in the list\n12. Exit\n";

        cout<<"Enter your choice"<<endl;
        cin>>choice;
        if(choice == 1)
        {
            cout<<"Welcome to linked list creation!"<<endl;
            cout<<"Let's create the head first"<<endl;
            head = new Node;
            cout<<"Enter head->data"<<endl;
            cin>>head->data;
            head->next = NULL;
            cout<<"Head is created"<<endl;

            cout<<"How many nodes you want to create?"<<endl;
            cin>>n;
            x = head;
            for(i=0; i<n; i++)
            {
                temp = new Node;
                cout<<"Enter node data: "<<endl;
                cin>>temp->data;
                temp->next = NULL;

                x->next = temp;
                x = x->next;


            }
            n++;
            cout<<"Congrats! Your list is created!"<<endl;
        }

        else if(choice==2)
        {
            cout<<"Now the list will be shown"<<endl;
            y = head;
            for(i=0; i<n; i++)
            {
                if(head== NULL)
                {
                    cout<<"Currently, there is no data in the list"<<endl;
                    break;
                }
                cout<<y->data<<" ";
                y = y->next;
            }

            cout<<endl;
        }
        else if(choice == 3)
        {
            cout<<"Insert a node at the end"<<endl;
            temp1=new Node;
            cout<<"\nEnter of a temp1 data:"<<endl;
            cin>>temp1->data;
            x->next=temp1;
            x=x->next;
            z=head;
            n++;
            cout<<z->data<<" ";
            z=z->next;
            cout<<endl;
            cout<<"Congrats! Your list is created!"<<endl;
        }

        else if(choice == 4)
        {
            cout<<"Insert at the beginning option"<<endl;
            temp1=new Node;
            cout<<"\nEnter of a temp1 data:"<<endl;
            cin>>temp1->data;
            temp1->next=head;
            head=temp1;
            z=head;
            n++;
            cout<<z->data<<" ";
            z=z->next;
            cout<<endl;
            cout<<"Congrats! Your list is created!"<<endl;
        }
        else if(choice==5)
        {
            cout<<"Insert after a specific node"<<endl;
            temp1=new Node;
            cout<<"\nEnter of a  temp1 data:"<<endl;
            cin>>temp1->data;
            x=head;
            for(i=0; i<n; i++)
            {
                if(x->data==20)
                {
                    p=x->next;
                    x->next=temp1;
                    temp1->next=p;
                    break;
                }
                else
                {
                    x=x->next;
                }
            }
            z=head;
            n++;
            cout<<z->data<<" ";
            z=z->next;;
        }
        else if(choice==6)
        {
            cout<<" Insert before a specific node"<<endl;
            temp1=new Node;
            cout<<"\nEnter of a temp1 data:"<<endl;
            cin>>temp1->data;
            x=head;
            for(i=0; i<n; i++)
            {
                if(x->next->data==20)
                {
                    p=x->next;
                    x->next=temp1;
                    temp1->next=p;
                    break;
                }
                else
                {
                    x=x->next;
                }
            }
            z=head;
            n++;
            cout<<z->data<<" ";
            z=z->next;

        }
        else if(choice==7)
        {
            cout<<"Delete from the end"<<endl;
            if(x->next->next== NULL)
            {
                delete(x->next);
                x->next=NULL;
                x=x->next;
            }
            z=head;
            n--;
            cout<<z->data<<" ";
            z=z->next;

        }
        else if(choice==8)
        {
            cout<<"Delete from the beginning"<<endl;
            x=head->next;
            delete(head);
            head=x;
            z=head;
            n--;
            cout<<z->data<<" ";
            z=z->next;
        }
        else if(choice==9)
        {
            cout<<"Delete after a specific node"<<endl;
            y=head;
            for(i=0; i<n-1; i++)
            {
                if(y->next->data==20)
                {
                    p=y->next;
                    y->next=y->next->next;
                    delete(p);
                }
                else
                {
                    y=y->next;
                }
            }
            z=head;
            n--;
            cout<<z->data<<" ";
            z=z->next;


        }
        else if(choice==10)
        {
            cout<<"Delete before a specific node"<<endl;
            y=head;
            for(i=0; i<n-1; i++)
            {
                if(y->next->next->data=20)
                {
                    p=y->next;
                    y->next=y->next->next;
                    delete(p);
                    break;
                }
                else
                {
                    y=y->next;
                }
            }

            z=head;
            n--;
            cout<<z->data<<" ";
            z=z->next;
        }

        else if(choice == 11)
        {
            x=head;
            while(x->next!=NULL)
            {
                if(x->data==20)
                {
                    flag=1;
                    break;
                }
                else
                {
                    x=x->next;
                }
            }
            if(flag==0)
                cout<<"Item not found\n";
            else
                cout<<"Item found\n";

        }

        else
        {
            cout<<"Sorry! Invalid option!"<<endl;
        }

    }
    return 0;
}

