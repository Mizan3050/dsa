#include <iostream>
using namespace std;

/* s: kiritos strength  */
/* n: number of dragon */
/* m: strength of dragon */

int a, b, c[10000], m, n, s;
main()
{
    cin >> s >> n;
    for (int i = 1; i <= n; i++)
    {
        cin >> a >> b;
        c[a] += b;
        if (m < a)
            m = a;
    }

    for (int i = 1; i <= m; i++)
        if (s > i)
            s = s + c[i];
    if (s > m)
        cout << "YES";
    else
        cout << "NO";
}