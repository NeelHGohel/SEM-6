#include <stdio.h>
#include <stdlib.h>

void main()
{
    FILE *fp;
    char ch;
    int chars = 0, lines = 0, tabs = 0, space = 0;

    fp = fopen("file.txt", "r");

    while ((ch = fgetc(fp)) != EOF)
    {
        chars++;
        if (ch == " ")
            space++;
        else if (ch == "\t")
        {
            tabs++;
        }
        else if (ch == "\n")
        {
            lines++;
        }
    }
    fclose(fp);
    printf("chars %d\n",chars);
    printf("space %d\n",space);
    printf("tabs %d\n",tabs);
    printf("lines %d",lines);
}