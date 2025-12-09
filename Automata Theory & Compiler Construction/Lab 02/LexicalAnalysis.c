#include <stdio.h>
#include <stdlib.h>

void main()
{
    FILE *fp1, *fp2;

    fp1 = fopen("input.txt", "r");
    fp2 = fopen("output.txt", "w");

    char ch = fgetc(fp1);
    while (ch != EOF)
    {
        if (ch == '/')
        {
            if (ch == '/')
            {
                while (ch != '\n')
                {
                    ch = fgetc(fp1);
                }
            }
            else if (ch == '*')
            {
                ch = fgetc(fp1);
                while (ch != '/')
                {
                    ch = fgetc(fp1);
                }
            }
        }
        fputc(ch, fp2);
        printf("%c", ch);
        ch = fgetc(fp1);
    }
    fclose(fp1);
    fclose(fp2);
}